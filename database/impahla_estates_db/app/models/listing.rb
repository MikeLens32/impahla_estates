class Listing < ApplicationRecord

    belongs_to :creator, class_name: "User", foreign_key: :creator_id

    validates :address, presence: true
    validates :description, presence: true
    validates :price, presence: true
    validates :bedroom, presence: true
    validates :bath, presence: true


end
