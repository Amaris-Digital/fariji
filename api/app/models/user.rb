class User < ApplicationRecord
    has_secure_password

    enum :status, { inactive: 0, active: 1 }
                                    
    validates :email, uniqueness: { allow_nil: true }, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i, allow_nil: true }
    validates :phone, presence: true, uniqueness: true, length: { minimum: 9, maximum: 12 }
    validates :password, length: { minimum: 6 }, presence: true, format: { with:  /\A(?=.*[A-Z])(?=.*\d).{6,}\z/, message: 'must contain at least one uppercase letter, one number and atleast 6 characters ' }
    validate :at_least_eighteen_years_old
    validates :date_of_birth, presence: true

    # TODO: add validation for date, which format should be it?

    private
     def at_least_eighteen_years_old
        if self.date_of_birth.present? && self.date_of_birth > 18.years.ago.to_date
            errors.add(:date_of_birth, 'You must be at least eighteen years old')
        end
    end
end