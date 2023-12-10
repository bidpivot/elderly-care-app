// import DatePicker from "react-datepicker";
export default function FormAppointment(props) {
  return (
    <div
      className={`${
        props.creating ? "fixed" : "hidden"
      } z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={props.onFormSubmit} className="p-6">
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

              <button
                type="button"
                onClick={props.onClose}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
