require 'jwt'
require 'dotenv'
require_relative '../lib/jwt_service'
Dotenv.load('.env.test')

RSpec.describe TokenAuthorization do
  describe '.encode' do
    it 'encodes a payload into a JWT token' do
      payload = { user_id: 123 }
      token = described_class.encode(payload)

      decoded_payload = JWT.decode(token, ENV['SECRET_KEY'], true, algorithm: 'HS256')[0]
      decoded_payload = decoded_payload.transform_keys(&:to_sym)

      expect(decoded_payload).to eq(payload)
    end
  end
  
  end
