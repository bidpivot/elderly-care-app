import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DoctorDetails() {
  const params = useParams();
  const [doctor, setDoctor] = useState({});
  // console.log(params.id);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/doctors/${params.id}`)
      .then(r => r.json())
      .then(data => {
        console.log(data.appts_history);
        setDoctor(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className="profile">
        <h1>
          Add prescriptions + create context for fixing date format + create
          table for appt history
        </h1>
        <h1>Dr. {`${doctor.first_name} ${doctor.last_name}`}</h1>
        <h3>Profile</h3>
        <p>Specialty: {doctor.specialty}</p>
        <p>Phone Number: {doctor.phone}</p>
        <p>Address: {doctor.address}</p>
        <p>Website: {doctor.website}</p>
      </div>
      <div className="relevant-info">
        <h3>Important Info</h3>
        <p>Next Steps: {doctor.next_steps}</p>
        <p>
          Next Appt:{" "}
          {doctor.next_appointment
            ? doctor.next_appointment.date_and_time
            : "No Scheduled Appointments"}
        </p>
        <p>
          Last Appt:{" "}
          {doctor.last_appointment
            ? doctor.last_appointment.date_and_time
            : "No Appointment History"}
        </p>
      </div>
    </>
  );
}
