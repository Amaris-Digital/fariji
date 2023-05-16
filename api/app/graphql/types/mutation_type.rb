# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :reset_password, mutation: Mutations::ResetPassword
    field :send_otp, mutation: Mutations::SendOtp
    field :verify_otp, mutation: Mutations::VerifyOtp
  end
end
