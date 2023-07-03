require 'rails_helper'
require 'spec_helper'

RSpec.describe Mutations::OtpMutations::VerifyOtp, type: :request do
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

  before do
    @phone_number = user.phone
  end

  describe 'verifyOtp' do
    context 'verify otp' do
      it 'verifies the OTP successfully' do
        post '/graphql', params: { query: Queries::VerifyOtpQuery.query(phone: @phone_number, otp: otp.otp) }

        expect(response).to have_http_status(200)
        json_response = JSON.parse(response.body)
        data = json_response['data']['verifyOtp']

        expect(data['status']).to eq('success')
        expect(data['message']).to eq('OTP verified successfully')
      end

      it 'returns an error message for an invalid OTP' do
        post '/graphql', params: { query: Queries::VerifyOtpQuery.query(phone: @phone_number, otp: 4242) }

        expect(response).to have_http_status(200)
        json_response = JSON.parse(response.body)
        data = json_response['data']['verifyOtp']

        expect(data['status']).to eq('failed')
        expect(data['message']).to eq('Invalid OTP')
      end

      it 'returns an error message for an expired OTP' do
        otp.expiry = Time.current - 5.minutes
        otp.save!
        post '/graphql', params: { query: Queries::VerifyOtpQuery.query(phone: @phone_number, otp: otp.otp) }

        expect(response).to have_http_status(200)
        json_response = JSON.parse(response.body)
        data = json_response['data']['verifyOtp']

        expect(data['status']).to eq('failed')
        expect(data['message']).to eq('OTP has expired or is invalid')
      end
    end
  end
end
