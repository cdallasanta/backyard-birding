class ApplicationController < ActionController::API
  protect_from_forgery with: :exception

  def fallback_index_html
    render :file => 'client/public/index.html'
  end
end
