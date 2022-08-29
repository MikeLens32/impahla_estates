class ChangeReactionToBeIntegerInComments < ActiveRecord::Migration[6.1]
  def change
    change_column :comments, :reaction, :integer
  end
end
