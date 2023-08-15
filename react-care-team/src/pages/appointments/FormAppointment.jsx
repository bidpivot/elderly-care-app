export default function FormAppointment(props) {
  return (
    <div>
      {/* onsubmit figure out what the route and action should be rails side */}
      <form onSubmit={props.onFormSubmit}>
        <label htmlFor="appt-date">Appointment Date</label>
        <input
          type="date"
          id="appt-date"
          name="appt-date"
          onChange={props.onDateChange}
          value={props.apptDate}
        />

        <label htmlFor="appt-note">Notes</label>
        <input
          type="textarea"
          id="appt-note"
          name="appt-note"
          onChange={props.onNoteChange}
          value={props.apptNote}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
