class Post < ApplicationRecord

    has_many :users, through: :comments 
    has_many :comments
    belongs_to :author, class_name: "User" foreign_key: :author_id #alias user as author

    validates :text, presence: true
    validates :media, presence: true

end
