class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :text
      t.string :media
      t.string :reaction

      t.timestamps
    end
  end
end
