require 'jwt'
require 'dotenv'
require 'active_support/core_ext/numeric/time'


module TokenAuthorization
  # encoding data into a jwt token

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    begin
      JWT.encode(payload, ENV['SECRET_KEY'])
    rescue JWT::EncodeError => e
      raise StandardError.new("Error encoding payload: #{e.message}")
    end
  end
  

  # decoding a jwt token
  def self.decode(token)
    JWT.decode(token, ENV['SECRET_KEY'])[0]
  rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
    nil
  end
  
  

  # refreshing a jwt token
  def self.refresh(token)
    decoded = decode(token)
    return unless decoded && decoded[:exp] > Time.now.to_i

    payload = decoded.except('exp')
    encode(payload, Time.now.to_i + 24.hours.to_i)
  end
end
