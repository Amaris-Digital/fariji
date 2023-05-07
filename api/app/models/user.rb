class User < ApplicationRecord
    has_secure_password

    enum :status, { inactive: 0, active: 1 }

    validates :email, uniqueness: true
    validates :phone, presence: true, length: { minimum: 9, maximum: 12 }
    validates :password, length: { minimum: 6 }, presence: true, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+\z/, message: "must contain at least one letter and one number" }
    validate :at_least_eighteen_years_old
  


    private

    def at_least_eighteen_years_old
        if date_of_birth > 18.years.ago.to_date
            errors.add(:date_of_birth, "You must be at least eighteen years old")
        end
    end

end
