module Types
    module Inputs
      class RegisterInput < BaseInputObject
        argument :phone, String, required: true
        argument :email, String, required: false
        argument :date_of_birth, GraphQL::Types::ISO8601DateTime, required: true
        argument :isMuslim, Boolean, required: false
        argument :password, String, required: true
      end
    end
  end
  