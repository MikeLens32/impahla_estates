Rails.application.routes.draw do
  resources :listings
  resources :events
  resources :comments
  resources :posts
  resources :users, only: [:update, :destroy, :index]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'
end
