#Mutation to delete user
module Mutations
  class DeleteUser < BaseMutation
    argument :id, ID, required: true

    type Boolean

    def resolve(id:)
      user = User.find_by(id: id)
      user.update(is_active: false, is_deleted: true)
      true

    end
  end
end
