Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "application#root"
  post '/games', to 'games#create'
  get '/high_scores', to 'games#high_scores'
end