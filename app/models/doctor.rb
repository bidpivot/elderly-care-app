class Doctor < ApplicationRecord
  has_many :appointments
  has_many :notes
  has_many :prescriptions
end
