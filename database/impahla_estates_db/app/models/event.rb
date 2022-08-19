class Event < ApplicationRecord

    validates :text, pressence: true, length: {in:3..40}
    validates :date, presence: true

end
