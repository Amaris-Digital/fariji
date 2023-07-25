
module Queries
    class RegisterUserQuery
      def self.query(phone:, email:, password:, date_of_birth:, isMuslim:)
        <<~GQL
          mutation {
            register(
              input: {
                phone: "#{phone}"
                email: "#{email}"
                password: "#{password}"
                dateOfBirth: "#{date_of_birth}"
                isMuslim: #{isMuslim}
              }
            ) {
              status
              message
              body
            }
          }
        GQL
      end
    end
  end
  