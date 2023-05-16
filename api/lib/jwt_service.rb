# frozen_string_literal: true

# This module provides JWT token encoding and decoding functionality.
module TokenAuthorization
  # encoding data into a jwt token

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    begin
      JWT.encode(payload, ENV.fetch('SECRET_KEY'))
    rescue JWT::EncodeError => e
      puts "Error encoding payload: #{e.message}"
      return nil
    end
  end  

  # decoding a jwt token
  def self.decode(token)
    JWT.decode(token, ENV.fetch('SECRET_KEY'))[0]
  rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
    nil
  end

  # refreshing a jwt token
  def self.refresh(token)
    decoded = decode(token)
    return nil unless decoded

    return unless decoded.key?(:exp) && decoded[:exp] > Time.now.to_i

    # generate a new token with a fresh expiration time
    payload = decoded.dup
    payload[:exp] = Time.now.to_i + 1.week.to_i
    encode(payload)
  end
end
