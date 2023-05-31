# frozen_string_literal: true

module Mutations
  module Inputs
    class ResetPasswordInput < BaseMutation
      argument :confirm_password, String, required: true, description: 'Confirm new password'
      argument :new_password, String, required: true, description: 'New password'
      argument :otp, String, required: true, description: 'One-time password code'
      argument :phone, String, required: true, description: "User's phone number"
    end
  end
end
