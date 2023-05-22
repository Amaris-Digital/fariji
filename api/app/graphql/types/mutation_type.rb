# frozen_string_literal: true

require_all 'lib'

module Types
  class MutationType < Types::BaseObject
    include TokenAuthorization
    # TODO: remove me
    field :register, Types::AppResponseType, null: false, description: "Register a new user" do
      argument :phone, String, required: true
      argument  :email, String, required:false
      argument :date_of_birth, GraphQL::Types::ISO8601DateTime, required: true
      argument :isMuslim, Boolean, required: false
      argument :password, String, required: true
    end
  
    def register(**kwargs)
    
      user = User.new(kwargs)

      if user.save
        authToken = TokenAuthorization.encode( { user_id: user.id } )
        {
          status: 'success',
          message: 'user registered successfully',
          body: { authToken: authToken }
        }
      else
        {
          status: 'unprocessible_entity',
          message: 'user registration failed',
          body:{ errors: user.errors.full_messages}
        }
      end
    end
  end
end
