class AddReasonForJoiningToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :reason_for_joining, :integer
  end
end
