Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    get 'greetings', to: 'greetings/index'
  end
  # Defines the root path route ("/")
  # root "articles#index"
  root 'static#index'
end
