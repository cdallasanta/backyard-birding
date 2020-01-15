Rails.application.routes.draw do
  root "static_pages#fallback_index_html"
  namespace :api do
    post 'games', to: 'games#create'
    get 'high_scores', to: 'games#high_scores'
  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end