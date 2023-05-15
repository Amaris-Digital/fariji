class CreateOtps < ActiveRecord::Migration[7.0]
  def change
    create_table :otps do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :otp
      t.datetime :expiry
      t.boolean :valid
      t.string :timestamps

      t.timestamps
    end
  end
end