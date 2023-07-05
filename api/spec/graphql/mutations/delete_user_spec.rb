require 'rails_helper'

RSpec.describe Mutations::DeleteUser, type: :request do
  describe 'deleteUser' do
    let!(:user) { create(:user) }
    let(:mutation) do
      <<~GQL
        mutation($id: ID!) {
          deleteUser(id: $id)
        }
      GQL
    end

    it 'deletes a user account' do
      user_id = user.id

        post '/graphql', params: { query: mutation, variables: { id: user_id } }

      expect(response).to have_http_status(:success)
      json_response = JSON.parse(response.body)
      pp json_response
      expect(json_response['data']['deleteUser']).to eq(true)
    end
  end
end