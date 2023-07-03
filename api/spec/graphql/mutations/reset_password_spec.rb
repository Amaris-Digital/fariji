require 'rails_helper'
require 'spec_helper'

RSpec.describe Mutations::ResetPassword::ResetPassword, type: :request do
  let!(:user) do
    User.create!(
      phone: '+254704333658',
      email: 'johndoe89@gmail.com',
      password: 'Password1',
      date_of_birth: '1990-01-01',
      isMuslim: 'true'
    )
  end

  let!(:otp_value) { rand(1000..9999) }

  let!(:otp) do
    Otp.create!(
      user: user,
      otp: otp_value,
      is_valid: true,
      expiry: Time.current + 5.minutes
    )
  end
  
  let(:new_password) { 'newpassword1' }
  let(:confirm_password) {'newpassword1'}

  describe 'resetPassword' do
    context 'when the user is found and OTP is valid' do
      it 'resets the user password' do
        expect do
          post '/graphql', params: { query: Queries::ResetPasswordQuery.reset_password_mutation(phone: user.phone, otp: otp.otp, password: new_password, confirmPassword: confirm_password) }
        end.to change { user.reload.password_digest }
      end

      it 'marks the OTP as invalid' do
        expect do
          post '/graphql', params: { query: Queries::ResetPasswordQuery.reset_password_mutation(phone: user.phone, otp: otp.otp, password: new_password, confirmPassword: confirm_password) }
        end.to change { otp.reload.is_valid? }.to(false)
      end

      it 'returns success status and message' do
        post '/graphql', params: { query: Queries::ResetPasswordQuery.reset_password_mutation(phone: user.phone, otp: otp.otp, password: new_password, confirmPassword: confirm_password) }
        
        json_response = JSON.parse(response.body)
        data = json_response['data']['resetPassword']

        expect(data['status']).to eq('success')
        expect(data['message']).to eq('Password reset successfully')
      end
    end

    context 'when the user is not found' do
      it 'returns failed status and message' do
        post '/graphql', params: { query: Queries::ResetPasswordQuery.reset_password_mutation(phone: '+254703033658', otp: otp.otp, password: new_password, confirmPassword: confirm_password) }

        json_response = JSON.parse(response.body)
        data = json_response['data']['resetPassword']

        expect(data['status']).to eq('failed')
        expect(data['message']).to eq('User not found')
      end
    end

    context 'when the OTP has expired or is invalid' do
      before do
        otp.update(is_valid: false)
      end

      it 'returns failed status and message' do
        post '/graphql', params: { query: Queries::ResetPasswordQuery.reset_password_mutation(phone: user.phone, otp: otp.otp, password: new_password, confirmPassword: confirm_password) }

        json_response = JSON.parse(response.body)
        data = json_response['data']['resetPassword']

        expect(data['status']).to eq('failed')
        expect(data['message']).to eq('OTP has expired or is invalid')
      end
    end

    context 'when the OTP is invalid' do
      it 'returns failed status and message' do
        post '/graphql', params: { query: Queries::ResetPasswordQuery.reset_password_mutation(phone: user.phone, otp: 0000, password: new_password, confirmPassword: confirm_password) }
  
        json_response = JSON.parse(response.body)
        data = json_response['data']['resetPassword']
  
        expect(data['status']).to eq('failed')
        expect(data['message']).to eq('Invalid OTP')
      end
    end
  end
end