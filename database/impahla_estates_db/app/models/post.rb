class Post < ApplicationRecord

    has_many :users, through: :comments 
    has_many :comments, dependent: :destroy
    belongs_to :author, class_name: "User", foreign_key: :author_id #alias user as author

    validates :text, presence: true

    def all_post
        current_user = session[:user_id]
        my_creatation = current_user === author_id
        not_by_me = !my_creatation
        Post.find(my_creatation+not_by_me)
    end

end
