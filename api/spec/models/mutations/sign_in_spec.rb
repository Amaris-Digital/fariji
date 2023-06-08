require 'rails_helper'

RSpec.describe Mutations::Auth::SignIn do
  describe '.resolve' do
    let(:user) { create(:user) }
    let(:signin_mutation) { Mutations::Auth::SignIn.new(object: nil, context: nil, field: nil) }

    context 'when valid credentials are provided' do
      let(:valid_input) { { phone: user.phone, password: user.password } }
      let(:expected_token) { 'some_generated_token' }

      it 'returns the user token and success message' do
        expect(TokenAuthorization).to receive(:encode).with({ user_id: user.id }).and_return(expected_token)

        result = signin_mutation.resolve(input: valid_input)

        expect(result).to eq({ data: { token: expected_token }, message: 'user signed in successfully', status: 'success', token: expected_token, user: user })
      end
    end

    context 'when invalid credentials are provided' do
      let(:invalid_input) { { phone: 'invalid_phone', password: 'invalid_password' } }

      it 'returns an error message' do
        result = signin_mutation.resolve(input: invalid_input)

        expect(result).to eq({ status: 'forbidden', message: 'Invalid phone number or password.', token: nil })
      end
    end

    context 'when unable to generate a token' do
      let(:valid_input) { { phone: user.phone, password: user.password } }

      it 'returns an error message' do
        expect(TokenAuthorization).to receive(:encode).with({ user_id: user.id }).and_return(nil)

        result = signin_mutation.resolve(input: valid_input)

        expect(result).to eq({ status: 'failed', message: 'Unable to generate token.', token: nil })
      end
    end
  end
end
