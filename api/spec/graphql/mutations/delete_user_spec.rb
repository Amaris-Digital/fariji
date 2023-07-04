# require 'rails_helper'

# RSpec.describe Mutations::DeleteUser, type: :request do
#     describe 'deleteuser' do
#         let!(:user) { create(:user) }
#         let(:mutation) do
#             <<~GQL
#             mutation($id: ID!) {
#               deleteUser(id: $id)
#             }
#           GQL
#         end
#     end 

#         it 'deletes a user account' do
#             user_id = user.id

#             expect do
#                 post '/graphql', params: { query: mutation, variables: {id: user_id} }
#             end.to change { User.count }.by(-1)

#             expect(response).to have_http_status(:success)
#             json_response = JSON.parse(response.body)
#             expect(json_response['data']['deleteUser']).to eq(true)
#         end 

#         it 'returns false if the user account does not exist' do
#             expect do
#                 post '/graphql', params: { query: mutation, variables: { id: 'non-existing_id'}}
#             end
#         end
#     end
# spec/graphql/mutations/delete_user_spec.rb

require 'rails_helper'

RSpec.describe Mutations::DeleteUser, type: :request do
  describe 'DeleteUser mutation' do
    let!(:user) { FactoryBot.create(:user) }

    it 'deletes the user and updates is_active and is_deleted fields' do
      mutation = <<~GRAPHQL
        mutation {
          deleteUser(id: "#{user.id}")
        }
      GRAPHQL

      expect do
        post '/graphql', params: { query: mutation }
      end.to change(User, :count).by(-1)

      user.reload
      expect(user.is_active).to be false
      expect(user.is_deleted).to be true

      expect(response).to have_http_status(:success)
      expect(json_response['data']['deleteUser']).to be true
    end
  end
end


