Rails.application.routes.draw do
  resources :notes
  resources :appointments
  namespace :api do
    namespace :v1 do
      resources :doctors
      resources :prescriptions
    end
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
