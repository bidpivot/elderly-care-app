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

ActiveRecord::Schema[7.0].define(version: 2023_08_08_172445) do
  create_table "appointments", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "doctor_id", null: false
    t.datetime "date_and_time"
    t.index ["doctor_id"], name: "index_appointments_on_doctor_id"
  end

  create_table "doctors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.string "specialty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "next_steps"
    t.string "address"
    t.string "website"
  end

  create_table "notes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "doctor_id"
    t.text "content"
    t.index ["doctor_id"], name: "index_notes_on_doctor_id"
  end

  create_table "prescriptions", force: :cascade do |t|
    t.string "dosage"
    t.string "frequency"
    t.boolean "status"
    t.date "ended"
    t.integer "tablets"
    t.string "name"
    t.string "purpose"
    t.integer "doctor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doctor_id"], name: "index_prescriptions_on_doctor_id"
  end

  create_table "questions", force: :cascade do |t|
    t.text "content"
    t.text "answer"
    t.integer "doctor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "answered"
    t.index ["doctor_id"], name: "index_questions_on_doctor_id"
  end

  add_foreign_key "appointments", "doctors"
  add_foreign_key "notes", "doctors"
  add_foreign_key "prescriptions", "doctors"
  add_foreign_key "questions", "doctors"
end
