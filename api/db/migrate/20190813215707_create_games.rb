class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :player
      t.int :score
      t.string :season

      t.timestamps
    end
  end
end
