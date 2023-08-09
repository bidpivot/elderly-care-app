import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../helpers/AppContext";

export default function DoctorDetails() {
  const params = useParams();
  const [doctor, setDoctor] = useState({});
  // console.log(params.id);
  const context = useContext(AppContext);
  // console.log(context);
  const nextAppt = doctor.next_appointment?.date_and_time; // defined next appt date from doctor state
  const nextApptDate = context.convertRubyDate(nextAppt); // converted it to better format with datehelper function from context
  const lastAppt = doctor.last_appointment?.date_and_time;
  const lastApptDate = context.convertRubyDate(lastAppt);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/doctors/${params.id}`)
      .then(r => r.json())
      .then(data => {
        // console.log(data.appts_history);
        setDoctor(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className="profile">
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
          Next Appt: {nextAppt ? nextApptDate : "No Scheduled Appointments"}
        </p>
        <p>Last Appt: {lastAppt ? lastApptDate : "No Appointment History"}</p>
      </div>
      <div className="table-appts">
        <table>
          <tbody>
            <tr>
              <th>Appointment Date</th>
              <th>Note</th>
            </tr>
            {console.log(doctor.appts_history)}
            {doctor.appts_history &&
              doctor.appts_history.map(appt => {
                return (
                  <tr key={appt.id}>
                    <td>{appt.date_and_time}</td>
                    <td>{appt.note}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
