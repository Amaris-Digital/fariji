require "jwt"


module TokenAuthentication
    # encoding data into a jwt token

    def self.encode(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    # decoding a jwt token
    def self.decode(token)
        JWT.decode(token, Rails.application.secrets.secret_key_base)[0]

    rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
        nil
    end
    
end