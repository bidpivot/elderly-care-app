class Api::V1::PrescriptionsController < ApplicationController
  def index
    @prescriptions = Prescription.all
    
    render json: @prescriptions
  end
end
