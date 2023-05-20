# frozen_string_literal: true

module Mutations
  class SendOtp < BaseMutation
    
    argument :phone, String, required: true

    field :message, String, null: false
    field :status, String, null: false

    def resolve(phone:)
      user = User.find_by(phone: phone)

      if Otp.exists?(user: user)
        otp_record = Otp.find_by(user: user)
      else
        otp_record = Otp.new(user: user)
      end

      otp = rand(2000..9000)

      expiry = 5.minutes.from_now

      otp_record.otp = otp
      otp_record.is_valid = true
      otp_record.expiry = expiry
      otp_record.save!

      AppMessagingService.send_otp(user, otp)

      { status: 'success', message: 'OTP sent successfully' }
    end
  end
end