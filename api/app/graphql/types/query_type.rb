# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :profile, AppResponseType, null: false, description: "Returns a user profile" do
      argument :id, ID, required: true, description: "User ID"
    end


    def profile(id:)
      user = User.find_by(id: id)

      unless user
        return {
          status: 'failed',
          message: 'user profile not found',
          body: { profile: nil}
        }
      end
  
      {
        status: 'success',
        message: 'user profile fetched successfully',
        body: { profile: {  
          email: user.email,
          name: user.name,
          phone: user.phone,
          reason_for_joining: user.reason_for_joining,
          dateJoined: user.created_at.strftime('%Y-%m-%d')
        } }
      }
    end
  end
end