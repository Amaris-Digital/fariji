module Types
    module Inputs
      class UploadPhotoInput < BaseInputObject
        argument :phone, String, required: true
        argument :avatar, ApolloUploadServer::Upload, required: true
      end
    end
  end
  