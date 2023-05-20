# frozen_string_literal: true

# This is a reusable module that handles sending out of otp codes via sms
module AppMessagingService
  def self.send_otp(user, otp, account_sid, auth_token, phone_number)
    client = Twilio::REST::Client.new(ENV.fetch(account_sid, auth_token)
    message = client.messages.create(
      body: "Your OTP is #{otp}",
      from: phone_number,
      to: "+#{user.phone}"
    )
    message.sid
  end
end
