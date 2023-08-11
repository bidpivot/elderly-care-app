class Task < ApplicationRecord
  TASKTYPES = ["bill", "other"]
  STATUS = %w(pending completed)
  validates :task_type, inclusion: { in: TASKTYPES }
  validates :task_type, presence: true
  validates :title, presence: true
  validates :status, inclusion: { in: STATUS }
end
