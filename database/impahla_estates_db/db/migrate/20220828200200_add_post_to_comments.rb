class AddPostToComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :comments, :post, null: false, foreign_key: { to_table: :posts }
  end
end
