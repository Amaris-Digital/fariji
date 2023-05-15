# frozen_string_literal: true

module AppMessagingService # rubocop:disable Style/Documentation
  def self.send_otp(phone, otp)
    client = Twilio::REST::Client.new(ENV.fetch('TWILIO_ACCOUNT_SID'), ENV.fetch('TWILIO_AUTH_TOKEN'))
    message = client.messages.create(
      body: "Your OTP is #{otp}",
      from: ENV.fetch('TWILIO_PHONE_NUMBER'),
      to: "+#{phone}"
    )
    message.sid
  end
end
