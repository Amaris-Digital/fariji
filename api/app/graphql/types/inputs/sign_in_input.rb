module Types
    module Inputs
      class SignInInput < BaseInputObject
        argument :phone, String, required: true, description: "User's Phone Number"
        argument :password, String, required: true
      end
    end
  end
  