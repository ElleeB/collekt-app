Rails.application.routes.draw do
  root 'homepage#index'

  resources :registrations, only: [:create]

  post :login, to: 'sessions#create'
  delete :logout, to: 'sessions#logout'
  get :logged_in, to: 'sessions#logged_in'

  match '*path', to: 'homepage#index', via: :all
end
