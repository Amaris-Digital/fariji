# frozen_string_literal: true

require_all 'lib'

module Types
  class MutationType < Types::BaseObject

    field :reset_password, mutation: Mutations::ResetPassword::ResetPassword
    field :verify_otp, mutation: Mutations::OtpMutations::VerifyOtp

    include TokenAuthorization
    field :register, Types::AppResponseType, null: false, description: "Register a new user" do
      argument :input, Types::Inputs::RegisterInput, required: true
    end

    field :uploadProfilePhoto, Types::AppResponseType, null: false, description: "Upload profile photo" do
      argument :input, Types::Inputs::UploadPhotoInput, required: true
    end
  
    def register(input:)
      phone = input[:phone]
      email = input[:email]
      date_of_birth = input[:dateOfBirth]
      isMuslim = input[:isMuslim]
      password = input[:password]



      user = User.new(input.to_h)

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
          body: { errors: user.errors.full_messages }
        }
      end
    end

    def uploadProfilePhoto(input:)
      phone = input[:phone]
      avatar = input[:avatar]

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