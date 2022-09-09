class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :media, :reaction, :comments
  belongs_to :author_id
end
