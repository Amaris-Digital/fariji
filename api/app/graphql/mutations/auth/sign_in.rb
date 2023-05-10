module Mutations
    module Auth
      class SignIn < BaseMutation
        require 'jwt'
  
        description "Signs In the user into the system"
  
        argument :input, Types::Inputs::SignInInput, required: true
  
        field :token, String, null: false, description: "User's Authorizations Token to be used"
        field :user, Types::UserType, null: false, description: "User's output"
  
        def resolve(input: nil)
          user = User.find_by(phone: input.phone)
          if user && user.password == input.password
            token = JsonWebToken.encode({user_id: user.id})
            if token
              return {token: token, user: user}
            else
              raise GraphQL::ExecutionError.new("Server was unable to create a token. Please try again later.")
            end
          else
            raise GraphQL::ExecutionError.new("Invalid Phone Number or Password")
          end
        end
      end
    end
  end  