require 'rails_helper'

Rspec.describe Mutations::DeleteUser, type: :request do
    describe 'deleteuser' do
        let!(:user) { create(:user) }
        let(:mutation) do
            <<~GQL
            mutation($id: ID!) {
              deleteUser(id: $id)
            }
          GQL
        end

        it 'deletes a  user account' do
            user_id = user.id

            expect do
                post '/graphql', params: { query: mutation, variables: {id: user_id} }
            end.to change { User.count }.by(-1)

            expect(response).to have_http_status(:success)
            json_response = JSON.parse(response.body)
            expect(json_response['data']['deleteUser']).to eq(true)
        end 

        it 'returns false if the user account does not exist' do
            expect do
                post '/graphql', params: { query: mutation, variables: { id: 'non-existing_id'}}
            end
        end
    end 
