# frozen_string_literal: true

module Mutations
  class VerifyOtp < BaseMutation
    argument :otp, String, required: true
    argument :phone, String, required: true

    field :message, String, null: false
    field :status, String, null: false

    def resolve(phone:, otp:)
      # Find the user in the database based on their phone number
      user = User.find_by(phone: phone)

      return { status: 'failed', message: 'User not found' } unless user

      otp_record = user.otps.last
      unless otp_record&.valid? && otp_record.expiry >= Time.zone.now
        return { status: 'failed',
                 message: 'OTP has expired or is invalid' }
      end

      if otp_record.otp == otp
        otp_record.update(valid: false) # Mark the OTP as invalid
        return { status: 'success', message: 'OTP verified successfully' }
      end

      { status: 'failed', message: 'Invalid OTP' }
    end
  end
end
