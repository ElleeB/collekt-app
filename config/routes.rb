Rails.application.routes.draw do
  root 'homepage#index'

  resources :sessions, only: [:create]
  resources :registrations, only: [:create]

  delete :logout, to: 'sessions#logout'
  get :logged_in, to: 'sessions#logged_in'

  match '*path', to: 'homepage#index', via: :all
end
