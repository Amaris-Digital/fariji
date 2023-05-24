module Types
    module Inputs
      class SignInInput < BaseInputObject
        argument :phone, String, required: true, description: "User's Phone number"
        argument :password, String, required: true, description: "Password minimum 8 and maximum 72 characters long"
      end
    end
  end
  