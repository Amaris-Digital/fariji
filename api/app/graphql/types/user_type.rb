module Types
    class UserType < Types::BaseObject
      field :id, ID, null: false
      field :phone, String, null: false, description: "User's phone number"
    end
  end
  