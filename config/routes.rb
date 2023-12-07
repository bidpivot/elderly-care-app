Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  namespace :api do
    namespace :v1 do
      resources :doctors
      resources :prescriptions
      resources :notes
      resources :appointments
      resources :tasks
      get '/appointmentslist', to: 'appointments#appt_list'
    end
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
