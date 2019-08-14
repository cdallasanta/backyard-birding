class Game < ApplicationRecord
  def self.high_scores
    Game.order(score: :asc).last(10).reverse
  end
end