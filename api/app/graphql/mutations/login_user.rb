module Mutations
    class LoginUser < BaseMutation
        argument :phone, String, required: true
        argument :password, Text, required: true

        type Types::Payloads::LoginUserType

        def resolve(phone:, password:)
            result = login_user(phone, password)
            result.success? ? result : execution_error(message: result.error)
        end

        private

        def login_user(phone, password)
            Users::Login.call(phone: phone, password: password)
        end
    end
end