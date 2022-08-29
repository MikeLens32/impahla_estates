class AddComCreatorToComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :comments, :com_creator, null: false, foreign_key: { to_table: :users }
  end
end
