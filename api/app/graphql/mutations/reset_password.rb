module Mutations
    class ResetPassword < BaseMutation
      argument :phone, String, required: true
      argument :email, String, required: true
      argument :otp, String, required: true
      argument :password, String, required: true
      
      field :message, String, null: false
  
      def resolve(phone:, email:, otp:, password:)
        # Find the user based on their phone number or email address
        user = User.find_by(phone: phone)
        user ||= User.find_by(email: email)
  
        if user
          # Verify the OTP
          if user.otp == otp
            # Reset the password
            user.update(password: password, otp: nil)
  
            { message: 'Password reset successfully' }
          else
            raise GraphQL::ExecutionError, 'Invalid OTP'
          end
        else
          raise GraphQL::ExecutionError, 'User not found'
        end
      end
    end
  end
  