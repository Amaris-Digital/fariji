module Mutations
    class UpdateUserAccount < BaseMutation
  
      field :updateAccount, Types::AppResponseType, null: false, description: "Update user account information" do
        argument :input, Types::Inputs::UpdateUserAccountInput, required: true
      end
  
      def resolve(input:)
        phone = input[:phone]
        user = User.find_by(phone: phone)
        return { status: 'not_found', message: 'User not found', body: nil } unless user
  
        
        avatar = input[:avatar]
        user.avatar.attach(io: avatar.tempfile, filename: avatar.original_filename, content_type: avatar.content_type) if avatar.present?
  
        
        user.name = input[:name] if input[:name].present?
  
        
        if input[:email].present?
          user.phone = input[:phone] if input[:phone].present?
        end
  
        user.email = input[:email] if input[:email].present?
  
        if input[:reasonForJoining].present? && User.reason_for_joinings.include?(input[:reasonForJoining].to_sym)
          user.reason_for_joining = input[:reasonForJoining]
        end
  
        if user.save
          { status: 'success', message: 'Account information updated successfully', body: nil }
        else
          { status: 'unprocessible_entity', message: 'Failed to update account information', body: { errors: user.errors.full_messages } }
        end
      end
    end
  end
  