module Types
    class AppResponseType < Types::BaseObject
        field :status, String, null: false
        field :message, String, null: false
        field :body, GraphQL::Types::JSON, null: false
    end


    
end