class Appointment < ApplicationRecord
  belongs_to :doctor
  # validates :appointment_date_and_time, presence: true

  def doctor
    @doctor = Doctor.find(self.doctor_id)
    @doctor
  end

  def doctor_lastname
    @doctor = Doctor.find(self.doctor_id)
    @doctor.last_name
  end
end

