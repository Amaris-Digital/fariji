require 'rails_helper'
require_relative '../../../lib/app_messaging_service'
RSpec.describe Mutations::SendOtp, type: :request do

    let!(:user) { User.create!(
      phone: '+254722280617',
      email: 'johndoe@gmail.com',
      password: 'Password1',
      date_of_birth: '1990-01-01',
      isMuslim: 'true'
    )}

  

    before do
      @phone_number = user.phone
    end

  describe 'sendOtp' do
    context 'send otp' do
      
      before do
        post '/graphql', params: { query: mutation(phone: @phone_number) }
      end

      
      it 'sends the OTP successfully' do
        # puts "user #{user}"
        
        expect(response).to have_http_status(200)

        json_response = JSON.parse(response.body)
        data = json_response['data']['sendOtp']
        
        expect(data['status']).to eq('success')
        expect(data['message']).to eq('OTP sent successfully')
      end
      
      it 'creates an OTP record' do
        expect(Otp.count).to eq(1)
      end
      
    end
  end

  def mutation(phone: )
    <<~GQL
      mutation {
        sendOtp(
          phone: "#{phone}"
        ) {
          status
          message
        }
      }
    GQL
  end
 
end
