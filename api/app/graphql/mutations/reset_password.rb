module Mutations
  class ResetPassword < BaseMutation
    argument :phone, String, required: true
    argument :email, String, required: true
    argument :otp, String, required: true
    argument :password, String, required: true
      
    field :status, String, null: false
    field :message, String, null: false

    def resolve(phone:, email:, otp:, password:)
      user = User.where(phone: phone).or(User.where(email: email))


      if user
        otp_record = user.otps.last

        if otp_record && otp_record.valid? && otp_record.expiry >= Time.now
          if otp_record.otp == otp
            otp_record.update(valid: false)  # Mark the OTP as invalid
            user.update(password: password)
            { status: 'success', message: 'Password reset successfully' }
          else
            { status: 'failed', message: 'Invalid OTP' }
          end
        else
          { status: 'failed', message: 'OTP has expired or is invalid' }
        end
      else
        { status: 'failed', message: 'User not found' }
      end
    end
  end
end
