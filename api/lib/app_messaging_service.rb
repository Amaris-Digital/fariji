module AppMessagingService
    def self.send_otp(phone, otp)
      client = Twilio::REST::Client.new(ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN'])
      message = client.messages.create(
        body: "Your OTP is #{otp}",
        from: ENV['TWILIO_PHONE_NUMBER'],
        to: "+#{phone}"
      )
      
      message.sid
    end
  end