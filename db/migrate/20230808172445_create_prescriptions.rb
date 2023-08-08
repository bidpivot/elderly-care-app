class CreatePrescriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :prescriptions do |t|
      t.string :dosage
      t.string :frequency
      t.boolean :status
      t.date :ended
      t.integer :tablets
      t.string :name
      t.string :purpose
      t.references :doctor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
