class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :phone, null: false, unique: true
      t.string :email, unique: true
      t.date :date_of_birth, null: false
      t.boolean :isMuslim, default: false
      t.integer :status, default: 0
      t.text :password_digest
      t.timestamps
    end
  end
end
