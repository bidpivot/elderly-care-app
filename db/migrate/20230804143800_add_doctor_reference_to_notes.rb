class AddDoctorReferenceToNotes < ActiveRecord::Migration[7.0]
  def change
    add_reference :notes, :doctor, foreign_key: true
  end
end
