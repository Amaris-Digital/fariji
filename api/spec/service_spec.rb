require 'jwt'
require 'dotenv'
require_relative '../lib/jwt_service'

RSpec.describe TokenAuthorization do
    describe '.encode' do
      it 'encodes a payload into a JWT token' do
        payload = { user_id: 123 }
        token = described_class.encode(payload)
  
        expect(token).to be_a(String)
      end
    end
  
  end
