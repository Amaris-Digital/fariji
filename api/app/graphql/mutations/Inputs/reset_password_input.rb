module Mutations
    module Inputs
      class ResetPasswordInput < BaseMutation
        argument :phone, String, required: true, description: "User's phone number"
        argument :otp, String, required: true, description: "One-time password code"
        argument :new_password, String, required: true, description: "New password"
        argument :confirm_password, String, required: true, description: "Confirm new password"
      end
    end
  end
  