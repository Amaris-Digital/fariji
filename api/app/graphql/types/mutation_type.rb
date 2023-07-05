# frozen_string_literal: true

require_all 'lib'

module Types
  class MutationType < Types::BaseObject

    field :reset_password, mutation: Mutations::ResetPassword
    field :send_otp, mutation: Mutations::SendOtp
    field :verify_otp, mutation: Mutations::VerifyOtp
    field :delete_user, mutation: Mutations::DeleteUser

    include TokenAuthorization
    # TODO: remove me
    field :register, Types::AppResponseType, null: false, description: "Register a new user" do
      argument :phone, String, required: true
      argument  :email, String, required:false
      argument :date_of_birth, GraphQL::Types::ISO8601DateTime, required: true
      argument :isMuslim, Boolean, required: false
      argument :password, String, required: true
    end

    field :uploadProfilePhoto, Types::AppResponseType, null: false, description: "Upload profile photo" do
      argument :phone, String, required: true
      argument :avatar, ApolloUploadServer::Upload, required: true
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

    def uploadProfilePhoto(phone:, avatar:)
      user = User.find_by(phone: phone)
      user.avatar.attach(io: avatar.tempfile, filename: avatar.original_filename, content_type: avatar.content_type) if avatar.present?
    
      {
        status: 'success',
        message: 'Profile photo uploaded successfully',
        body: nil
      }
    end
    

    field :sign_in, mutation: Mutations::Auth::SignIn
  end
end
