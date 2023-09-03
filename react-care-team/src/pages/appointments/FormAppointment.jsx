// import DatePicker from "react-datepicker";

export default function FormAppointment(props) {
  return (
    <div className="appointment-form-container">
      <form onSubmit={props.onFormSubmit}>
        <div className="appointment-form-content">
          <label htmlFor="appt-date">
            Appointment Date:
            <input
              type="date"
              id="appt-date"
              name="appt-date"
              onChange={props.onDateChange}
              value={props.apptDate}
            />
          </label>

          {/* <label htmlFor="appt-time">Appointment Time</label>
        <input
          type="time"
          id="appt-time"
          name="appt-time"
          onChange={props.onTimeChange}
          value={props.apptTime}
        /> */}

          <label htmlFor="appt-note">
            Notes:
            <input
              type="textarea"
              id="appt-note"
              name="appt-note"
              onChange={props.onNoteChange}
              value={props.apptNote}
            />
          </label>

          <button type="submit">Create Appointment</button>
        </div>
      </form>
      {/* <div className="validation-message">{props.validation}</div> */}
      <button onClick={props.onCancelClick}>cancel</button>
    </div>
  );
}
