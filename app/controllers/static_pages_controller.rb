class StaticPagesController < ActionController::Base
  def test
    "test"
  end

  def fallback_index_html
    render file: 'public/index.html'
  end
end