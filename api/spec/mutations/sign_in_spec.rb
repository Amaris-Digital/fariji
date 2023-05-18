require 'rails_helper'

module Mutations
   module Auth
    RSpec.describe SignIn, type: :request do
      describe '.resolve' do
        context 'When the login credentials are correct' do
          user = FactoryBot.create(:user, email: Faker::Internet.unique.email, )
        it 'creates a user session' do
          expect do
          post '/graphql', params: { query: query(id: user.id) }
          expect(response).to have_http_status(200)
          json = JSON.parse(response.body)
          expect(json['data']['signIn']['token']).not_to be_nil
         end
        end
        end
        context 'When the login credentials are incorrect' do
          user = FactoryBot.create(:user)
          it 'incorrect phone or password' do
            expect do 
            post '/graphql', params: { query: query.gsub(id: user.id, password: "wrong-password") }
            expect(response).to have_http_status(:unprocessable_entity)
        end 
      end
    end
          def query(id)
            <<~GQL
            mutation {
              signIn(input: { phone: "#{user.phone}", password: "Secret123" }) {
                token
                user {
                  id
                  email
                }
              }
            }
          GQL
          end
         
        end
      
    end
  end
end


