# frozen_string_literal: true

# This is a reusable module that handles sending out of otp codes via sms
module AppMessagingService
  def self.send_otp(user, otp)
    client = Twilio::REST::Client.new(ENV('TWILIO_ACCOUNT_SID'), ENV('TWILIO_AUTH_TOKEN'))
    message = client.messages.create(
      body: "Your OTP is #{otp}",
      from: ENV('TWILIO_PHONE_NUMBER'),
      to: "+#{user.phone}"
    )
    message.sid
  end
end
