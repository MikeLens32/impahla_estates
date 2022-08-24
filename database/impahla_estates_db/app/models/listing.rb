class Listing < ApplicationRecord

    validates :address, presence: true
    validates :description, presence: true
    validates :price, presence: true
    validates :bedroom, presence: true
    validates :bath, presence: true


end
