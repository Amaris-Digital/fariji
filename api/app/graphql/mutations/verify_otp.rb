module Mutations
    class VerifyOtp < BaseMutation
      argument :phone, String, required: true
      argument :otp, String, required: true
  
      field :message, String, null: false
  
      def resolve(phone:, otp:)
        # Find the user in the database based on their phone number
        user = User.find_by(phone: phone)
  
        # Check if the OTP is correct
        if user.otp == otp
          # Clear the OTP from the user's record
          user.update(otp: nil)
  
          { message: 'OTP verified successfully' }
        else
          raise GraphQL::ExecutionError, 'Invalid OTP'
        end
      end
    end
  end