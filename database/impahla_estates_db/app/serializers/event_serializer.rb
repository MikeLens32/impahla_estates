class EventSerializer < ActiveModel::Serializer
  attributes :id, :text, :date, :media
  belongs_to :host_id
end
