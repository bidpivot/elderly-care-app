import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../helpers/AppContext";
import FormAppointment from "../appointments/FormAppointment.jsx";

export default function DoctorDetails() {
  const context = useContext(AppContext);
  const params = useParams();
  const [doctor, setDoctor] = useState({});
  const [apptsHistory, setApptsHistory] = useState([]);
  // const [allAppts, setAllAppts] = useState([]);
  const [creatingForm, setCreatingForm] = useState(false);
  const [apptDate, setApptDate] = useState("");
  const [apptTime, setApptTime] = useState("");
  const [apptNote, setApptNote] = useState("");
  const [validation, setValidation] = useState("");
  // console.log(context);
  const nextAppt = doctor.next_appointment?.date_and_time; // defined next appt date from doctor state
  const nextApptDate = context.convertRubyDate(nextAppt); // converted it to better format with datehelper function from context
  const lastAppt = doctor.last_appointment?.date_and_time;
  const lastApptDate = context.convertRubyDate(lastAppt);

  function convertToUTC(localDate) {
    const utcDate = new Date(localDate);
    utcDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());
    return utcDate.toISOString(); // Store this UTC date on the server
  }

  useEffect(() => {
    console.log(apptDate);
  }, [apptDate]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/doctors/${params.id}`)
      .then(r => r.json())
      .then(data => {
        console.log(data.appts_history);
        setDoctor(data);
        setApptsHistory(data.appts_history);
      })
      .catch(error => console.error(error));
  }, []);

  function handleDeleteClick(id) {
    fetch(`http://localhost:3000/api/v1/appointments/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json()) // why was this raising error with react console?
      .then(data => {
        console.log(data);
        const updatedAppointments = apptsHistory.filter(appt => {
          // console.log(appt.id); // check to make sure appt.id is the same as deleted_appt_id
          // console.log(data.deleted_appt_id);
          return appt.id !== data.deleted_appt_id;
        });
        const sortedAppts = updatedAppointments.sort(
          (a, b) => a.date_and_time - b.date_and_time
        );
        setApptsHistory(sortedAppts);
      })
      .catch(error => console.log(error));
  }

  function handleApptSubmit(event) {
    event.preventDefault();

    if (!apptDate) {
      setValidation("Appointment date is required");
      return;
    }
    // if (!apptNote) {
    //   setValidation("Appointment note is required");
    //   return;
    // }

    // Convert the user-selected local time to UTC
    // const utcApptDate = convertToUTC(new Date(apptDate));
    // console.log(utcApptDate);

    fetch("http://localhost:3000/api/v1/appointments", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date_and_time: apptDate, // we might want to change this back to utcApptDate
        note: apptNote,
        doctor_id: doctor.id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // create state for appointments and reset it with the new appointment spread into the previous array of appts
        setCreatingForm(false);
        setApptsHistory([...apptsHistory, data.appt]);
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <h1>Dr. {`${doctor.first_name} ${doctor.last_name}`}</h1>
      <div className="profile-doctor">
        <h3>Profile</h3>
        <div className="profile-content">
          <p>Specialty: {doctor.specialty}</p>
          <p>Phone Number: {doctor.phone}</p>
          <p>Address: {doctor.address}</p>
          <p>Website: {doctor.website}</p>
        </div>
      </div>
      <div className="relevant-info-doctor">
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

            {apptsHistory &&
              apptsHistory.map(appt => {
                return (
                  <tr key={appt.id}>
                    <td>{context.convertRubyDate(appt.date_and_time)}</td>
                    <td>{appt.note}</td>
                    <td>
                      <a onClick={() => handleDeleteClick(appt.id)}>delete</a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div>
        {!creatingForm && (
          <button onClick={() => setCreatingForm(true)}>
            Create Appointment
          </button>
        )}
        {creatingForm && (
          <FormAppointment
            onDateChange={e => setApptDate(e.target.value)}
            appt-date={apptDate}
            onTimeChange={e => setApptTime(e.target.value)}
            appt-time={apptTime}
            onNoteChange={e => setApptNote(e.target.value)}
            appt-note={apptNote}
            onFormSubmit={handleApptSubmit}
            validation={validation}
            onCancelClick={() => setCreatingForm(false)}
          />
        )}
      </div>
    </>
  );
}
