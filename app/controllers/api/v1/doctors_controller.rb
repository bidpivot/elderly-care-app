class Api::V1::DoctorsController < ApplicationController
  before_action :set_doctor, only: %i[ show update destroy ]

  # GET /doctors
  def index
    @doctors = Doctor.all.map do |doctor|
      {
        id: doctor.id,
        first_name: doctor.first_name,
        last_name: doctor.last_name,
        phone: doctor.phone,
        specialty: doctor.specialty,
        last_appointment: doctor.appointments.where("date_and_time <= ?", DateTime.now).order(date_and_time: :desc).first,
        next_appointment: doctor.appointments.where("date_and_time >= ?", DateTime.now).order(date_and_time: :desc).last,
        notes: doctor.notes
      }
    end
    render json: @doctors
  end

  # GET /doctors/1
  def show
    render json: @doctor
  end

  # POST /doctors
  def create
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      render json: @doctor, status: :created, location: @doctor
    else
      render json: @doctor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /doctors/1
  def update
    if @doctor.update(doctor_params)
      render json: @doctor
    else
      render json: @doctor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /doctors/1
  def destroy
    @doctor.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def doctor_params
      params.require(:doctor).permit(:first_name, :last_name, :phone, :specialty)
    end
end
