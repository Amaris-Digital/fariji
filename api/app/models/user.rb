class User < ApplicationRecord
    has_secure_password
    has_one_attached :avatar

    

    enum :status, { inactive: 0, active: 1 }

    enum reason_for_joining: {
      plan_for_departure: 0,
      raise_funeral_expenses: 1
    }

                                    
    validates :email, uniqueness: { allow_nil: true }, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i, allow_nil: true }
    validates :phone, presence: true, uniqueness: true, length: { minimum: 9, maximum: 15 }
  
    validates :password, length: { minimum: 6 }, presence: true, format: { with:  /\A(?=.*[A-Z])(?=.*\d).{6,}\z/, message: 'must contain at least one uppercase letter, one number and atleast 6 characters ' }
    validate :at_least_eighteen_years_old
    validates :date_of_birth, presence: true
    validate :avatar_validations, if: :avatar_attached?

    # TODO: add validation for date, which format should be it?

    
    private
    def at_least_eighteen_years_old
      if self.date_of_birth.present? && self.date_of_birth > 18.years.ago.to_date
        errors.add(:date_of_birth, 'You must be at least eighteen years old')
      end
    end

    def avatar_attached?
      avatar.attached?
    end

    def avatar_validations
      if avatar.attached?
        unless ['image/png', 'image/jpeg', 'image/jpg'].include?(avatar.blob.content_type)
          errors.add(:avatar, 'must be a PNG, JPEG or JPG image')
        end
      end
    end
    

end