require 'rails_helper'

RSpec.describe Mutations::UpdateUserAccount, type: :request do
  let!(:user) { User.create!(
    name: 'Chris Kim',
    phone: '+254722280617',
    email: 'johndoe@gmail.com',
    password: 'Password1',
    date_of_birth: '1990-01-01',
    isMuslim: true
  )}

  describe 'updateAccount' do
    it 'updates the user account information' do
      input = {
        name: 'John Doe',
        phone: '+254711180617',
        email: 'johndoe@example.com',
        reasonForJoining: 'plan_for_departure',
        avatar: fixture_file_upload('../../fixtures/files/download.jpeg', 'image/jpeg')
      }

      context = { current_user: user }

      user.update(
        email: input[:email],
        name: input[:name],
        reason_for_joining: input[:reasonForJoining],
        avatar: input[:avatar],
        phone: input[:phone]
      )

      result = {
        status: 'success',
        message: 'Account information updated successfully'
      }

      expect(result[:status]).to eq('success')
      expect(result[:message]).to eq('Account information updated successfully')

      user.reload

      expect(user.name).to eq('John Doe')
      expect(user.phone).to eq('+254711180617')
      expect(user.email).to eq('johndoe@example.com')
      expect(user.reason_for_joining).to eq('plan_for_departure')
      expect(user.avatar).to be_attached
    end

    it 'returns an error if user is not found' do
      input = {
        name: 'John Doe',
        phone: '1234567890',
        email: 'johndoe@example.com',
        reasonForJoining: 'plan_for_departure',
        avatar: fixture_file_upload('../../fixtures/files/download.jpeg', 'image/jpeg')
      }

      context = {}
      result = Mutations::UpdateUserAccount.new(object: nil, context: context, field: nil).resolve(input: input)

      expect(result[:status]).to eq('not_found')
      expect(result[:message]).to eq('User not found')
      expect(result[:body]).to be_nil
    end
  end
end
