class ListingSerializer < ActiveModel::Serializer
  attributes :id, :address, :description, :media, :price, :bedroom, :bath, :created_at
  belongs_to :creator_id
end
