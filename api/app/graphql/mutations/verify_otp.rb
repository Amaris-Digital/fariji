module Mutations
  class VerifyOtp < BaseMutation
    argument :phone, String, required: true
    argument :otp, String, required: true

    field :status, String, null: false
    field :message, String, null: false

    def resolve(phone:, otp:)
      # Find the user in the database based on their phone number
      user = User.find_by(phone: phone)

      if user
        otp_record = user.otps.last

        if otp_record && otp_record.valid? && otp_record.expiry >= Time.now
          if otp_record.otp == otp
            otp_record.update(valid: false)  # Mark the OTP as invalid
            { status: 'success', message: 'OTP verified successfully' }
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
