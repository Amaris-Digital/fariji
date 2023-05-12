module Mutations
    class SendOtp < BaseMutation
      argument :phone, String, required: true
  
      field :message, String, null: false
  
      def resolve(phone:)
        # Find the user in the database based on their phone number
        user = User.find_by(phone: phone)
  
        # Generate the OTP
        otp = rand(2000..9000)
  
        # Send the OTP via Twilio
        client = Twilio::REST::Client.new('AC6aa25af213eb27e64cb71b24a9453a47', '1cbc8aea593612a310687e9a69b68221')
        message = client.messages.create(
          body: "Your OTP is #{otp}",
          from: '+12542725733',
          to: "+#{user.phone}"
        )
  
        # Store the OTP in the user's record
        user.update(otp: otp)
  
        { message: 'OTP sent successfully' }
      end
    end
  end