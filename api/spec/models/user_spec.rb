require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'should have secure password' do
    it { should have_secure_password }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:phone) }
    it { is_expected.to validate_presence_of(:date_of_birth) }
    it { is_expected.to validate_length_of(:phone).is_at_least(9).is_at_most(15) }
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

    describe 'avatar validations' do
      let(:user) do
        User.new(
          phone: '+254704333658',
          email: 'johndoe89@gmail.com',
          password: 'Password1',
          date_of_birth: '1990-01-01',
          isMuslim: true
        )
      end


    it 'should not have an attached avatar by default' do
      expect(user.avatar.attached?).to be false
    end

    it 'should allow attaching a PNG image as the avatar' do
      avatar_path = Rails.root.join('spec', 'fixtures', 'files', 'avatar_test.png')
      avatar = fixture_file_upload(avatar_path, 'image/png')
      user.avatar.attach(avatar)
      expect(user).to be_valid
    end

    it 'should allow attaching a JPEG image as the avatar' do
      avatar_path = Rails.root.join('spec', 'fixtures', 'files', 'download.jpeg')
      avatar = fixture_file_upload(avatar_path, 'image/jpeg')
      user.avatar.attach(avatar)
      expect(user).to be_valid
    end

    it 'should not allow attaching a non-image file as the avatar' do
      avatar_path = Rails.root.join('spec', 'fixtures', 'files', 'test.txt')
      avatar = fixture_file_upload(avatar_path, 'text/plain')
      user.avatar.attach(avatar)
      expect(user).to_not be_valid
      expect(user.errors[:avatar]).to include('must be a PNG or JPEG image')
    end
  end


end