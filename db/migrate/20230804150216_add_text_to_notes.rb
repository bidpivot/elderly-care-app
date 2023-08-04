class AddTextToNotes < ActiveRecord::Migration[7.0]
  def change
    add_column :notes, :content, :text
  end
end
