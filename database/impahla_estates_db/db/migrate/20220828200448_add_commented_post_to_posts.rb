class AddCommentedPostToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :commented_post, null: false, foreign_key: { to_table: :users }
  end
end
