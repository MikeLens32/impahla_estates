class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :text
      t.datetime :date
      t.string :media

      t.timestamps
    end
  end
end
