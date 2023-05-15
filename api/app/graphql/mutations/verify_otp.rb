module Mutations
  class VerifyOtp < BaseMutation
    argument :phone, String, required: true
    argument :otp, String, required: true

    field :status, String, null: false
    field :message, String, null: false

    def resolve(phone:, otp:)
      # Find the user in the database based on their phone number
      user = User.find_by(phone: phone)

      return { status: 'failed', message: 'User not found' } unless user

      otp_record = user.otps.last
      return { status: 'failed', message: 'OTP has expired or is invalid' } unless otp_record && otp_record.valid? && otp_record.expiry >= Time.now
      
      if otp_record.otp == otp
        otp_record.update(valid: false)  # Mark the OTP as invalid
        return { status: 'success', message: 'OTP verified successfully' }
      end
      
      return { status: 'failed', message: 'Invalid OTP' }
      
    end
  end
end
