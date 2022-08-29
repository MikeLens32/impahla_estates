class Event < ApplicationRecord

    belongs_to :host, class_name: "User", foreign_key: :host_id

    validates :text, presence: true
    validates :date, presence: true

end
