module Mutations
  class ProfilePhotoUpload < BaseMutation
    description "Upload a profile photo for the user"

    argument :avatar, ApolloUploadServer::Upload, required: true
    argument :phone, String, required: true 

    field :success, Boolean, null: false

    def resolve(avatar:, phone:)
      user = User.find_by(phone: phone)

      return { success: false } unless user

      upload_result = UploadImage.call({ avatar: avatar }, user)
      return { success: upload_result[:success] }
    end
  end
end
