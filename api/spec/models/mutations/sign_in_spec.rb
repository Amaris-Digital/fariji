# require 'rails_helper'
#   RSpec.describe Mutations::Auth::SignIn, type: :request do
#     let(:user) { FactoryBot.create(:user, email: Faker::Internet.unique.email) }
#     describe '.resolve' do
#       context 'When the login credentials are correct' do
#         it 'creates a user session' do
#           expect do
#           post '/graphql', params: { query: query(user.phone, user.password) }
#           json = JSON.parse(response.body)
#           expect(response).to have_http_status(200)
#           expect(json['data']['signIn']['token']).not_to be_nil
#           end
#         end
#       end
  
#       context 'When the login credentials are incorrect' do
#         it 'gives an error message: incorrect phone or password' do
#           post '/graphql', params: { query: query(user.phone, "wrong-password") }
#           expect(response).to have_http_status(:forbidden)
#         end
#       end
#     end
  
#     def query(phone, password)
#       <<~GQL
#       mutation {
#         signIn(input: { phone: "#{phone}", password: "#{password}" }) {
#           token
#           user {
#             id
#             email
#           }
#         }
#       }
#       GQL
#     end
#   end
  
# spec/graphql/mutations/sign_in_mutation_spec.rb

# spec/models/mutations/sign_in_spec.rb

require 'rails_helper'

RSpec.describe Mutations::Auth::SignIn do
  describe '.resolve' do
    let(:user) { create(:user) }
    let(:signin_mutation) { Mutations::Auth::SignIn.new(object: nil, context: nil, field: nil) }

    context 'when valid credentials are provided' do
      let(:valid_input) { { phone: user.phone, password: user.password } }
      let(:expected_token) { 'some_generated_token' }

      it 'returns the user token and user object' do
        expect(TokenAuthorization).to receive(:encode).with({ user_id: user.id }).and_return(expected_token)

        result = signin_mutation.resolve(input: valid_input)

        expect(result).to eq({ token: expected_token, user: user })
      end
    end

    context 'when invalid credentials are provided' do
      let(:invalid_input) { { phone: 'invalid_phone', password: 'invalid_password' } }

      it 'returns an error message' do
        result = signin_mutation.resolve(input: invalid_input)

        expect(result).to eq({ status: 'forbidden', message: 'Invalid phone number or password.' })
      end
    end

    context 'when unable to generate a token' do
      let(:valid_input) { { phone: user.phone, password: user.password } }

      it 'returns an error message' do
        expect(TokenAuthorization).to receive(:encode).with({ user_id: user.id }).and_return(nil)

        result = signin_mutation.resolve(input: valid_input)

        expect(result).to eq({ status: 'failed', message: 'Unable to generate token.' })
      end
    end
  end
end
