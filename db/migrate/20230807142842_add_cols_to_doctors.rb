class AddColsToDoctors < ActiveRecord::Migration[7.0]
  def change
    add_column :doctors, :next_steps, :text
    add_column :doctors, :address, :string
    add_column :doctors, :website, :string
  end
end
