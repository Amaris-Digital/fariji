# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :phone, String, null: false
    field :email, String
    field :date_of_birth, GraphQL::Types::ISO8601Date, null: false
    field :isMuslim, Boolean
    field :status, Integer
    # Adding fields of active
    field :is_active, Boolean, null: false
    # Adding field deleted
    field: is_deleted, Boolean, null: false
    field :password_digest, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
