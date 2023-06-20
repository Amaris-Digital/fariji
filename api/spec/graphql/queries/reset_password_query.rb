
module Queries
    class ResetPasswordQuery
      def self.reset_password_mutation(phone:, otp:, password:, confirmPassword:)
        <<~GQL
          mutation {
            resetPassword(input: {
              phone: "#{phone}",
              otp: #{otp},
              password: "#{password}",
              confirmPassword: "#{confirmPassword}"
            }) {
              status
              message
            }
          }
        GQL
      end
    end
  end
  