module Queries
    class ProfilePhotoUploadQuery
      def self.query
        <<~GQL
          mutation($avatar: Upload!, $phone: String!) {
            uploadProfilePhoto(input: { phone: $phone, avatar: $avatar }) {
              status
              message
            }
          }
        GQL
      end
    end
  end
  