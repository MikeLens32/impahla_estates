class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :media, :reaction
  belongs_to :post_id, :user_id
end
