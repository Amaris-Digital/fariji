module Types
    module Inputs
      class UpdateUserAccountInput < BaseInputObject
        argument :id, ID, required: true
        argument :phone, String, required: true
        argument :email, String, required: true
        argument :avatar, ApolloUploadServer::Upload, required: true
        argument :name, String, required: true
        argument :reasonForJoining, Integer, required: true
      end
    end
  end
  