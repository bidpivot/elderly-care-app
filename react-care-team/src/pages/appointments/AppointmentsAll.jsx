import { useEffect, useState } from "react";

export default function AppointmentsAll() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/appointmentslist")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setAppointments(data);
      })
      .catch(error => console.log(error));
  }, [appointments]);

  return (
    <div id="appointments-container">
      <h3>Upcoming Appointments</h3>
      <table>
        <tr>
          <th>Date</th>
          <th>Doctor</th>
          <th>Specialty</th>
        </tr>
        {appointments.map(appt => {
          return (
            <tr>
              <td>{appt.time}</td>
              <td>{appt.doctor}</td>
              <td>{appt.specialty}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
