module Mutations
  module ResetPassword
  class ResetPassword < BaseMutation
    argument :input, Types::Inputs::ResetPasswordInput, required: true

    field :message, String, null: false
    field :status, String, null: false

    def resolve(input:)
      otp = input[:otp]
      password = input[:password]
      confirmPassword = input[:confirmPassword]
      phone = input[:phone]

      user = User.find_by(phone: phone)

      return { status: 'failed', message: 'User not found' } unless user
      return { status: 'failed', message: 'Passwords do not match' } unless password == confirmPassword
         
      otp_record = Otp.find_by(user: user)
      if otp_record.nil?
        return { status: 'failed', message: 'OTP not found' }
      end

      unless otp_record&.is_valid? && otp_record.expiry >= otp_record.created_at
        return { status: 'failed', message: 'OTP has expired or is invalid' }
      end
      
      if otp_record.otp == otp
        if otp_record.new_record?
          otp_record.update(is_valid: true)
        end
        user.update(password: 'Password12')
        otp_record.update(is_valid: false)
        return { status: 'success', message: 'Password reset successfully' }
      end

      { status: 'failed', message: 'Invalid OTP' }
      end
    end
  end
end
