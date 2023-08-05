# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Doctors
Doctor.create!(first_name: "Mitch", last_name: "Karl", phone: "555-555-5555", specialty: "General Practitioner")
Doctor.create!(first_name: "Anette", last_name: "Falchook", phone: "561-555-5555", specialty: "Neurologist")


# Appointments
Appointment.create!(doctor: Doctor.all.first, date_and_time: "2021-01-01 01:00:00")
Appointment.create!(doctor: Doctor.all.first, date_and_time: "2022-02-16 11:00:00")
Appointment.create!(doctor: Doctor.all.first, date_and_time: "2023-07-16 11:00:00")
Appointment.create!(doctor: Doctor.all.first, date_and_time: "2023-07-31 01:00:00")
Appointment.create!(doctor: Doctor.all.first, date_and_time: "2023-05-15 10:00:00")
Appointment.create!(doctor: Doctor.all.first, date_and_time: "2024-12-15 10:00:00")
Appointment.create!(doctor: Doctor.all.first, date_and_time: "2023-09-16 12:00:00")

Appointment.create!(doctor: Doctor.all.second, date_and_time: "2023-08-08 08:00:00")
Appointment.create!(doctor: Doctor.all.second, date_and_time: "2023-09-09 09:00:00")
Appointment.create!(doctor: Doctor.all.second, date_and_time: "2023-10-10 10:00:00")
Appointment.create!(doctor: Doctor.all.second, date_and_time: "2023-11-11 11:00:00")
Appointment.create!(doctor: Doctor.all.second, date_and_time: "2023-06-22 11:00:00")
Appointment.create!(doctor: Doctor.all.second, date_and_time: "2023-04-11 10:00:00")
Appointment.create!(doctor: Doctor.all.second, date_and_time: "2024-11-05 10:00:00")

# Notes
Note.create!(doctor: Doctor.all.first, content: "this is some placeholder text so that it looks like there is some content here for a note that represents notes taken while at the doctor")
Note.create!(doctor: Doctor.all.second, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
