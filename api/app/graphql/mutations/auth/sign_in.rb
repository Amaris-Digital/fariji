 module Mutations
     module Auth
      class SignIn < BaseMutation
     
         description "Signs In the user into the system"
  
        argument :input, Types::Inputs::SignInInput, required: true
  
        field :status, String, null: false, description: "Sign-in status"
        field :message, String, null: false, description: "Sign-in message"
        field :token, String, null: true, description: "User's Authorizations Token to be used in Authenticated mutations and queries"
        field :user, Types::UserType, null: true, description: "User output"
  
        def resolve(input:)
          phone = input[:phone]
          password = input[:password]
         
          user = User.find_by(phone: phone)
          unless user && user.authenticate(password)
            return { 
              status: 'forbidden',
              message: 'Invalid phone number or password.',
              token: nil,
              
            }
          end
          
          token = TokenAuthorization.encode({user_id: user.id})

          unless token
            return { 
              status: 'failed', 
              message: 'Unable to generate token.', 
              token: nil,
             
            }
          end
          
           { 
            status: "success",
            message: "user signed in successfully",
            data: {
              token: token,
            },
            token: token,
            user: user
          }
        end
       
      end
    end
   end
  