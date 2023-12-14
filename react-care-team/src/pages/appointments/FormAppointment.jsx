import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { post } from "../../helpers/useFetch.js";

export default function FormAppointment(props) {
  const queryClient = useQueryClient();
  const [apptDate, setApptDate] = useState("");
  const [apptTime, setApptTime] = useState("");
  const [apptNote, setApptNote] = useState("");
  const [validation, setValidation] = useState("");

  const postBody = {
    date_and_time: apptDate, // we might want to change this back to utcApptDate
    note: apptNote,
    doctor_id: props?.doctor_id ?? null,
  };

  const postAppointment = useMutation({
    mutationFn: () => post("/appointments", postBody),
    onSuccess: () => {
      queryClient.invalidateQueries(["doctor", props?.doctor_id]);
      // I need to tighten this up, what should be invalidated? upcoming_appointments?, doctor/:id?, all?
    },
  });

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!apptDate) {
      setValidation("Date is required");
      return;
    }
    if (!apptNote) {
      setValidation("share some detail the reason for this event");
      return;
    }
    postAppointment.mutate();
  }

  return (
    <div
      className={`${
        props.formOpen ? "fixed" : "hidden"
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
          <form onSubmit={handleFormSubmit} className="p-6">
            <div className="appointment-form-content">
              <div className="flex flex-col gap-4">
                <label htmlFor="appt-date" className="block">
                  Appointment Date:
                  <input
                    type="date"
                    id="appt-date"
                    name="appt-date"
                    onChange={e => setApptDate(e.target.value)}
                    value={apptDate}
                    className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <label htmlFor="appt-note" className="block">
                  Notes:
                  <textarea
                    id="appt-note"
                    name="appt-note"
                    placeholder="Share some details about the reason for this event."
                    onChange={e => setApptNote(e.target.value)}
                    value={apptNote}
                    className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={props.onClose}
                  className="mt-4 text-red-500 bg-transparent border-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
