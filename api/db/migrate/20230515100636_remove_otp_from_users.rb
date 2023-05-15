class RemoveOtpFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :otp, :string
  end
end
