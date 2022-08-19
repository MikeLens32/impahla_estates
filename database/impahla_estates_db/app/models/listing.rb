class Listing < ApplicationRecord

    validates :address, pressence: true
    validates :description, pressence: true
    validates :price, pressence: true
    validates :bedroom, pressence: true
    validates :bath, pressence: true


end
