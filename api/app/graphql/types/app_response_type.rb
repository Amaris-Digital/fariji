module Types
    class AppResponseType < Types::BaseObject
        field :status, String, null: false
        field :message, String, null: false
        field :body, String, null: false
    end
end