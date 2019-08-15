class Api::GamesController < ApplicationController
  def create
    game = Game.create(game_params)
    render :json => game
  end

  def high_scores
    render :json => Game.high_scores
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end

  private

  def game_params
    params.require(:game).permit(:player, :season, :score)
  end
end