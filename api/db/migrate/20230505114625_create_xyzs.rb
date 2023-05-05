class CreateXyzs < ActiveRecord::Migration[7.0]
  def change
    create_table :xyzs do |t|
      t.string :name

      t.timestamps
    end
  end
end
