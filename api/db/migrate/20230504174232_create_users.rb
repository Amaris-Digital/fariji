class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :phone, null: false, unique: true
      t.string :email, unique: true
      t.date :date_of_birth
      t.boolean :culture, default: false
      t.timestamps
    end
  end
end
