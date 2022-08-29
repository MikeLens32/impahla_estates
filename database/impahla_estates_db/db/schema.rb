# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_29_165639) do

  create_table "comments", force: :cascade do |t|
    t.string "text"
    t.string "media"
    t.integer "reaction"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "post_id", null: false
    t.integer "user_id", null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "text"
    t.date "date"
    t.string "media"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "host_id", null: false
    t.index ["host_id"], name: "index_events_on_host_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "address"
    t.string "description"
    t.string "media"
    t.integer "price"
    t.integer "bedroom"
    t.integer "bath"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "creator_id", null: false
    t.index ["creator_id"], name: "index_listings_on_creator_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "text"
    t.string "media"
    t.integer "reaction"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "author_id", null: false
    t.index ["author_id"], name: "index_posts_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "events", "users", column: "host_id"
  add_foreign_key "listings", "users", column: "creator_id"
  add_foreign_key "posts", "users", column: "author_id"
end
