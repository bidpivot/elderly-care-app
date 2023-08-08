class AddAnsweredToQuestion < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :answered, :boolean
  end
end
