require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'should have secure password' do
    it { should have_secure_password }
  end
  
  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:phone) }
    it { should validate_presence_of(:date_of_birth) }
    it { should validate_uniqueness_of(:email)}
    it { should validaate_length_of(:phone).is_at_least(9).is_at_most(12) }
    it { should validate_presence_of(:password) }
    it { should validate_length_of(:password).is_at_least(6) }
    it { should validate_format_of(:password).with(/\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+\z/) }
  end


  describe 'date of birth validators' do
    under_eighteen_error = "You must be at least eighteen years old"

    over_eighteen = '2000-01-01'
    under_eighteen = '2020-01-01'

    valid_user = User.create(date_of_birth: over_eighteen)
    invalid_user = User.create(date_of_birth: under_eighteen)

    expect(valid_user).to be_valid
    expect(invalid_user.errors[:date_of_birth]).to include(under_eighteen_error)


  end

  


end
