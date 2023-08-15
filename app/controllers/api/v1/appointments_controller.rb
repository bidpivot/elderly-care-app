class Api::V1::AppointmentsController < ApplicationController
  before_action :set_appointment, only: %i[ show update destroy ]

  # GET /appointments
  # GET /appointments.json
  def index
    @appointments = Appointment.all
    render json: @appointments
  end

  # GET /appointments/1
  # GET /appointments/1.json
  def show
  end

  # POST /appointments
  # POST /appointments.json
  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save!
      render json: {appt: @appointment, status: "success"}, status: :ok
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointments/1
  # PATCH/PUT /appointments/1.json
  def update
    if @appointment.update(appointment_params)
      render :show, status: :ok, location: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointments/1
  # DELETE /appointments/1.json
  def destroy
    @appointment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def appointment_params
      params.require(:appointment).permit(:doctor_id, :note, :date_and_time)
    end
end
