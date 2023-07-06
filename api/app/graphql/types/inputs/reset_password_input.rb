# frozen_string_literal: true

module Types
  module Inputs
    class ResetPasswordInput < BaseInputObject
      argument :confirmPassword, String, required: true, description: 'Confirm new password'
      argument :password, String, required: true, description: 'New password'
      argument :otp, Integer, required: true, description: 'One-time password code'
      argument :phone, String, required: true, description: "User's phone number"
    end
  end
end
