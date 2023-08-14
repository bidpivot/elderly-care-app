class Api::V1::TasksController < ApplicationController
  before_action :set_task, only: %i[ show update destroy ]

  # GET /tasks
  # GET /tasks.json
  def index
    @tasks = Task.all
    render json: @tasks
  end

  # GET /tasks/1
  # GET /tasks/1.json
  def show
  end

  # POST /tasks
  # POST /tasks.json
  def create
    @task = Task.new(task_params)

    if @task.save!
      render json: { data: @task, status: 'success'}, status: :ok
    else
      render json: { data: @task.errors.full_messages, status: 'failure'}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  # PATCH/PUT /tasks/1.json
  def update
    if @task.update(task_params)
      render :show, status: :ok, location: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    deleted_task_id = @task.id
    if @task.destroy
      render json: { deleted_task_id: deleted_task_id, status: 'Task was deleted from the database' }, status: :ok
    else
      render json: { data: @task.errors.full_messages, status: 'Failed to delete' }, status: :unprocessable_entity
    end
  end
  

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:title, :content, :due, :status, :task_type)
    end
end
