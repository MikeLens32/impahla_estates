class User < ApplicationRecord

    # This will be needed for my stretch goal of having jobs
    # has_many :sent_invitations, class_name: "Invitation"
    # has_many :recieved_invitations, class_name: "Invitation", foreign_key: :member_id, dependent: :destroy

    # has_many :created_jobs, class_name: "Job", foreign_key: :creator_id, dependent: :destroy
    # #active records is going to check all the leagues to see which creator id links what your looking for
    # has_many :pending_job_invites, -> {where(invite_accepted: false) }, through: :recieved_invitations, source: :job
    # has_many :accepted_job_invites, -> {where(invite_accepted: true) }, through: :recieved_invitations, source: :job

    has_many :created_listings, class_name: "Listing", foreign_key: :creator_id
    has_many :created_events, class_name: "Event", foreign_key: :host_id
    has_many :commented_post, class_name: "Post", foreign_key: :commented_post_id, through: :comments #commented_post, through :comments
    has_many :authored_post, class_name: "Post", foreign_key: :authored_post_id #for the Post created by the User

    has_many :comments, dependent: :destroy
    has_many :events, dependent: :destroy
    has_many :listings, dependent: :destroy
    
    validates :username, presence: true, uniqueness: true, length: {in: 4..20}
    validates :password, length: {in: 6..20}

    has_secure_password

end
