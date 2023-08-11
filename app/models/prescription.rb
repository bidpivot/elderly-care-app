class Prescription < ApplicationRecord
  belongs_to :doctor
  validates :name, presence: true
  validates :dosage, presence: true
  validates :frequency, presence: true

  def as_json(options = {})
    super(options.merge(include: { doctor: { only: [:id, :first_name, :last_name, :specialty] } }))
  end

end
