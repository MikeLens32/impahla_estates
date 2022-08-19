class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :address
      t.string :description
      t.integer :price
      t.integer :bedroom
      t.integer :bath

      t.timestamps
    end
  end
end
