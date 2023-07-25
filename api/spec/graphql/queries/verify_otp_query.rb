module Queries
    class VerifyOtpQuery
      def self.query(phone:, otp:)
        <<~GQL
          mutation {
            verifyOtp(phone: "#{phone}", otp: #{otp}) {
              status
              message
            }
          }
        GQL
      end
    end
  end
  