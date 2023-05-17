FactoryBot.define do
    factory :user do
      phone { '+1234567890' }
      password { 'Secret123' }
      date_of_birth { '1990-1-1' }
      email {'awinoyeyyd@gmail.com'}
    end
  end