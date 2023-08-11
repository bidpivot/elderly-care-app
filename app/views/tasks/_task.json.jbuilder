json.extract! task, :id, :title, :content, :due, :status, :type, :created_at, :updated_at
json.url task_url(task, format: :json)
