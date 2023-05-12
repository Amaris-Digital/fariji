# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :register, Types::UserType, null: false do
      argument :phone, String, required: true
      argument  :email, String, required:false
      argument :date_of_birth, GraphQL::Types::ISO8601DateTime, required: true
      argument :isMuslim, Boolean, required: false
      argument :password, String, required: true
      argument :password_confirmation, String, required: true

    end
  
    def register(**kwargs)
    
      user = User.create!(
        kwargs
      )

      user 

      rescue ActiveRecord::RecordInvalid => e
        raise GraphQL::ExecutionError, "Invalid input: #{e.record.errors.full_messages.join(', ')}"
      end

    end
  
end
