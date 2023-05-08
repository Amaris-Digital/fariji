require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'should have secure password' do
    it { should have_secure_password }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:phone) }
    it { is_expected.to validate_presence_of(:date_of_birth) }
    it { is_expected.to validate_length_of(:phone).is_at_least(9).is_at_most(12) }
    it { is_expected.to validate_presence_of(:password) }
    it { is_expected.to validate_length_of(:password).is_at_least(6) }
  end

  describe 'date of birth validation' do

    it 'should validate a user should be least eighteen years old' do
      under_eighteen_error = "You must be at least eighteen years old"

      over_eighteen = '2000-01-01'
      under_eighteen = '2020-01-01'

      valid_user = User.create(date_of_birth: over_eighteen)
      invalid_user = User.create(date_of_birth: under_eighteen)

      expect(valid_user.errors.full_messages).to_not include(under_eighteen_error)
      expect(invalid_user.errors[:date_of_birth]).to include(under_eighteen_error)

    end

    describe 'email should be unique' do
      it 'should validate email uniqueness' do
        user1 = User.create(email: 'test@example.com', phone: '123456789', date_of_birth: '2000-01-01', password: 'Password1')
        user2 = User.create(email: 'test@example.com', phone: '123456789', date_of_birth: '2000-01-01', password: 'Password1')

        expect(user2.errors[:email]).to include('has already been taken')
      end
    end

    describe 'password validation' do
      
      context 'with all lowercase and a number' do
        it 'should not be valid' do
          user = User.create(email: 'test@example.com', phone: '123456789', date_of_birth: '2000-01-01', password: 'password1')

          expect(user).to_not be_valid
        end
      end

      context 'atleast an uppercase letter with no number' do
        it 'should not be valid' do
          user = User.create(email: 'test@example.com', phone: '123456789', date_of_birth: '2000-01-01', password: 'Password')

          expect(user).to_not be_valid
        end
      end

      context 'valid password' do
        it 'should be valid' do
          user = User.create(email: 'test@example.com', phone: '123456789', date_of_birth: '2000-01-01', password: 'Password1')

          expect(user).to be_valid
        end
      end
    end
  end 

end