require 'rails_helper'

RSpec.describe 'user mutation', type: :request do

    describe 'createUser' do
        
        context 'when user is valid' do
            before do
                post '/graphql', params: { query: mutation(
                     phone: '1234567890', 
                     email: 'johndoe@gmail.com', 
                     password: 'Password1',
                      date_of_birth: '1990-01-01', 
                      isMuslim: 'true'
                       ) 
                    }
            end
            it 'returns a success message' do
                json = JSON.parse(response.body)
                expect(json['data']['register']['message']).to eq('user registered successfully')
            end

            it 'returns a success status' do
                json = JSON.parse(response.body)
                expect(json['data']['register']['status']).to eq('success')
            end
        end

        context 'when a user is not valid ' do 
            before do
                post '/graphql', params: { query: mutation(
                     phone: '1234', 
                     email: 'joh', 
                     password: 'pa',
                      date_of_birth: '2020-01-01', 
                      isMuslim: 'true'
                       ) 
                    }
            end
            it 'returns a success message' do
                json = JSON.parse(response.body)
                expect(json['data']['register']['message']).to eq('user registration failed')
            end

            it 'returns a success status' do
                json = JSON.parse(response.body)
                expect(json['data']['register']['status']).to eq('unprocessible_entity')
            end
        end

    end

    def mutation( phone: , email: , password: , date_of_birth: , isMuslim: )
        <<-GQL
            mutation {
                register(
                    phone: "#{phone}",
                    email: "#{email}",
                    password: "#{password}",
                    dateOfBirth: "#{date_of_birth}",
                    isMuslim: #{isMuslim}
                ) {
                    status
                    message
                    body
                }
            }
        GQL
    end
end
