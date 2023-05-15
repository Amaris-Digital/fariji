module Mutations
  class SendOtp < BaseMutation

    require_relative '../../../lib/app_messaging_service.rb'

    argument :phone, String, required: true

    field :message, String, null: false

    def resolve(phone:)
      user = User.find_by(phone: phone)

      otp = rand(2000..9000)

      expiry = Time.now + 5.minutes
   
      otp_record = Otp.find_or_initialize_by(user: user)
      otp_record.update(otp: otp, valid: true, expiry: expiry)

      AppMessagingService.send_otp(user, otp)

      { status: 'success', message: 'OTP sent successfully' }
    end
  end
end
