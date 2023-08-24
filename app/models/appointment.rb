class Appointment < ApplicationRecord
  belongs_to :doctor
  # validates :appointment_date_and_time, presence: true
end

