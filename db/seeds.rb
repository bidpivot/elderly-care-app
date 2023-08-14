# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Doctors
karl = Doctor.create!(first_name: "Mitch", last_name: "Karl", phone: "561-392-9214", specialty: "General Practitioner", next_steps: "follow up in 6 months", address: "880 North West 13th St, Suite 1B, Boca Raton, FL 33486", website: "www.drkarlcares.com")
falchook = Doctor.create!(first_name: "Anette", last_name: "Falchook", phone: "561-338-8484", specialty: "Neurologist", next_steps: "asses progress with new Rytari meds and make decision whether to continue on it", address: "1050 NW 15th St suite 216 a, Boca Raton, FL 33486", website: nil)
Lazar = Doctor.create!(first_name: "Ira", last_name: "Lazar", phone: "555-1212", specialty: "Kidney Specialist", next_steps: "get blood work again in 6months and see him for follow up to review results", address: "please input", website: nil)
Gonzalez = Doctor.create!(first_name: "Marco", last_name: "Gonzalez", phone: "(561) 498-8100", specialty: "Opthamologist", next_steps: "check astigmatism", address: "16201 S MILITARY TRL
  Delray Beach, FL 33484", website: nil)

# Appointments
Appointment.create!(doctor: karl, date_and_time: "2021-01-01 01:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: karl, date_and_time: "2022-02-16 11:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: karl, date_and_time: "2023-07-16 11:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: karl, date_and_time: "2023-07-31 01:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: karl, date_and_time: "2023-05-15 10:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: karl, date_and_time: "2024-12-15 10:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: karl, date_and_time: "2023-09-16 12:00:00", note: "some notes from the appointment")

Appointment.create!(doctor: falchook, date_and_time: "2023-08-08 08:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: falchook, date_and_time: "2023-09-09 09:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: falchook, date_and_time: "2023-10-10 10:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: falchook, date_and_time: "2023-11-11 11:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: falchook, date_and_time: "2023-06-22 11:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: falchook, date_and_time: "2023-04-11 10:00:00", note: "some notes from the appointment")
Appointment.create!(doctor: falchook, date_and_time: "2024-11-05 10:00:00", note: "some notes from the appointment")

# Questions to ask doctor
Question.create!(doctor: falchook, content: "an example of a question?", answer: "your question makes no sense", answered: false)
Question.create!(doctor: Doctor.all.first, content: "an example of a question?", answer: "example answer", answered: false)


# Prescriptions owned by doctors
Prescription.create!(dosage: "5mg", frequency: "3x per day", status: true, ended: nil, tablets: "1", name: "Eliquis", purpose: "blood Thinner", doctor: karl)
Prescription.create!(dosage: "?", frequency: "3x per day", status: true, ended: nil, tablets: "1", name: "Rytari", purpose: "Parkinsons symptoms", doctor: falchook)

# Notes
Note.create!(doctor: Doctor.all.first, content: "this is some placeholder text so that it looks like there is some content here for a note that represents notes taken while at the doctor")
Note.create!(doctor: Doctor.all.second, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

# tasks => need to be owned by a user eventually
Task.create!(title: "get sub for Ana's vacation", content: "Call OneCall and see if they can get coverage for the 24th and 31", due: Date.today, status: "pending", task_type: "follow-up") 
Task.create!(title: "pay hospital bill", content: "you have outstanding bills from hospital visit and you are paying them off month by month", due: Date.today, status: "pending", task_type: "bill") 