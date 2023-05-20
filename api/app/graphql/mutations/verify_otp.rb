# frozen_string_literal: true

module Mutations
  class VerifyOtp < BaseMutation
    argument :otp, Integer, required: true
    argument :phone, String, required: true

    field :message, String, null: false
    field :status, String, null: false

    def resolve(phone:, otp:)
      user = User.find_by(phone: phone)

      return { status: 'failed', message: 'User not found' } unless user

      otp_record = Otp.find_by(user: user)
      puts "Stored OTP: #{otp_record.attributes}"
      unless otp_record&.is_valid? && otp_record.expiry >= otp_record.created_at
        return { status: 'failed',
                 message: 'OTP has expired or is invalid' }
      end

      if otp_record.otp == otp
        if otp_record.new_record?
          otp_record.update(is_valid: true)
        end
        return { status: 'success', message: 'OTP verified successfully' }
      end
    
      { status: 'failed', message: 'Invalid OTP' }
    end
  end
end
