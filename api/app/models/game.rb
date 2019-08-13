class Game < ApplicationRecord
  def self.high_scores
    Game.order(score: :desc).last(10)
  end
end