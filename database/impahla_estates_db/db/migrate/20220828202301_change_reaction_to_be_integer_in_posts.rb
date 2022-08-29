class ChangeReactionToBeIntegerInPosts < ActiveRecord::Migration[6.1]
  def change
    change_column :posts, :reaction, :integer
  end
end
