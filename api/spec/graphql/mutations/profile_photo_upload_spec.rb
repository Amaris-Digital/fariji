require 'rails_helper'
require_relative '../../spec_helper.rb'

RSpec.describe Mutations::ProfilePhotoUpload, type: :request do
  let!(:user) do
    avatar_path = Rails.root.join('spec', 'fixtures', 'files', 'avatar_test.png')
    avatar = fixture_file_upload(avatar_path, 'image/png')
  
    User.create!(
      phone: '+254704333658',
      email: 'johndoe89@gmail.com',
      password: 'Password1',
      date_of_birth: '1990-01-01',
      isMuslim: true,
      avatar: avatar
    )
  end

  describe 'ProfilePhotoUpload mutation' do
    it 'allows profile picture upload' do
  
      avatar_path = Rails.root.join('spec', 'fixtures', 'files', 'download.jpeg')
      avatar = fixture_file_upload(avatar_path, 'image/jpeg')

      post '/graphql', params: {
        "operations" => {
          "query": profile_photo_upload_mutation(user.id),
          "variables": { "avatar": avatar, "userId": user.id.to_s }
        }.to_json,
        "map" => {
          "1" => ["variables.avatar"]
        }.to_json,
        "1" => avatar
      }

      json_response = JSON.parse(response.body)
      puts json_response
      expect(json_response['data']['uploadProfilePhoto']['message']).to eq('Profile photo uploaded successfully')
      expect(json_response['data']['uploadProfilePhoto']['status']).to eq('success')
    end
  end

  def profile_photo_upload_mutation(user_id)
    <<-GQL
      mutation($avatar: Upload!) {
        uploadProfilePhoto(
          userId: "#{user_id}",
          avatar: $avatar
        ) {
          status
          message
        }
      }
    GQL
  end
end
