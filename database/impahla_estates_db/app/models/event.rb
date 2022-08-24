class Event < ApplicationRecord

    validates :text, presence: true, length: {in:3..40}
    validates :date, presence: true

end
