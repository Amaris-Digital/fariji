class AddFieldsToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :is_active, :boolean
    add_column :users, :is_deleted, :boolean
  end
end
