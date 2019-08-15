Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "application#root"
  namespace :api do
    post 'games', to: 'games#create'
    get 'high_scores', to: 'games#high_scores'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end 
end