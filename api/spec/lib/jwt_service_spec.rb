require 'jwt'
require 'dotenv'
require_relative '../../lib/jwt_service'
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

  
  describe '.decode' do
    let(:payload) { { user_id: 123 } }
    let(:token) { JWT.encode(payload, ENV['SECRET_KEY']) }
  
    it 'decodes a JWT token into a payload' do
      decoded_payload = TokenAuthorization.decode(token)
      expect(decoded_payload.symbolize_keys).to eq(payload)
    end
  end

describe '.refresh' do
    let(:payload) { { user_id: 123 } }
    let(:token) { TokenAuthorization.encode(payload, 1.minute.from_now.to_i) }
  
    # context 'when the token is valid and not expired' do
    #     it 'refreshes the token' do
    #         refreshed_token = TokenAuthorization.refresh(token)
    #         expect(refreshed_token).not_to be_nil
          
    #         decoded_payload = TokenAuthorization.decode(refreshed_token)
    #         expect(decoded_payload.symbolize_keys).to eq(payload.merge(exp: Time.now.to_i + 1.week.to_i))
    #       end
          
    # end
  
    context 'when the token is expired' do
      let(:token) { TokenAuthorization.encode(payload, 1.minute.ago.to_i) }
  
      it 'returns nil' do
        expect(TokenAuthorization.refresh(token)).to be_nil
      end
    end
  
    context 'when the token has no expiration time' do
      let(:token) { TokenAuthorization.encode(payload) }
  
      it 'returns nil' do
        expect(TokenAuthorization.refresh(token)).to be_nil
      end
    end
  
    context 'when the token is invalid' do
      let(:token) { 'invalid-token' }
  
      it 'returns nil' do
        expect(TokenAuthorization.refresh(token)).to be_nil
      end
    end
  end
    

  end
