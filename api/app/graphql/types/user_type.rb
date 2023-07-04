# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :phone, String, null: false
    field :email, String
    field :date_of_birth, GraphQL::Types::ISO8601Date, null: false
    field :isMuslim, Boolean
    field :status, Integer
    field :password_digest, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
