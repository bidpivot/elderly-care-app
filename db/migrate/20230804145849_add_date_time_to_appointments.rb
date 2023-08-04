class AddDateTimeToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :date_and_time, :datetime
  end
end
