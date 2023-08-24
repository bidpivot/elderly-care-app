// import DatePicker from "react-datepicker";

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

        {/* <label htmlFor="appt-time">Appointment Time</label>
        <input
          type="time"
          id="appt-time"
          name="appt-time"
          onChange={props.onTimeChange}
          value={props.apptTime}
        /> */}

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
      {/* <div className="validation-message">{props.validation}</div> */}
      <button onClick={props.onCancelClick}>cancel</button>
    </div>
  );
}
