# frozen_string_literal: true

module Mutations
  class ResetPassword < BaseMutation
    argument :email, String, required: true
    argument :otp, String, required: true
    argument :password, String, required: true
    argument :phone, String, required: true

    field :message, String, null: false
    field :status, String, null: false

    def resolve(phone:, email:, otp:, password:)
      user = User.where(phone: phone).or(User.where(email: email))

      return { status: 'failed', message: 'User not found' } unless user

      otp_record = user.otps.last
      unless otp_record&.valid? && otp_record.expiry >= Time.zone.now
        return { status: 'failed',
                 message: 'OTP has expired or is invalid' }
      end

      if otp_record.otp == otp
        otp_record.update(valid: false)  # Mark the OTP as invalid
        user.update(password: password)
        return { status: 'success', message: 'Password reset successfully' }
      end

      { status: 'failed', message: 'Invalid OTP' }
    end
  end
end
