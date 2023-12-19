import { useMutation, useQueryClient } from "@tanstack/react-query";
import { destroy } from "../../helpers/useFetch.js";
import FormAppointment from "../appointments/FormAppointment.jsx";

function DoctorApptHistory({
  apptsHistory,
  context,
  doctor,
  openModalWithApptData,
}) {
  const queryClient = useQueryClient();
  // I don't need this mutation, I don't think I even want to have a delete button on the doctor details page
  const apptDestroyQuery = useMutation({
    mutationFn: id => destroy(`/appointments/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["doctor", doctor.doctor_id]);
    },
  });

  return (
    <div className="table-appts">
      <h3 className="text-lg font-bold">{`Past Appointments with Dr. ${doctor.last_name} `}</h3>

      {apptsHistory &&
        apptsHistory.map(appt => {
          return (
            <div
              key={appt.id}
              className="bg-white shadow rounded p-4 mb-4 cursor-pointer transform transition duration-500 ease-in-out hover:scale-105"
              onClick={() => openModalWithApptData(appt)}
            >
              <h4 className="font-bold">
                {context.convertRubyDate(appt.date_and_time)}
              </h4>
              <p className="italic">{appt.note}</p>
            </div>
          );
        })}

      {/* <table className="w-full">
        <tbody>
          <tr>
            <th className="py-2">Appointment Date</th>
            <th className="py-2">Note</th>
          </tr>

          {apptsHistory &&
            apptsHistory.map(appt => {
              return (
                <tr key={appt.id}>
                  <td>{context.convertRubyDate(appt.date_and_time)}</td>
                  <td>{appt.note}</td>
                  <td>
                    <a
                      className="text-blue-500 cursor-pointer"
                      onClick={() => apptDestroyQuery.mutate(appt.id)}
                    >
                      delete
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table> */}
    </div>
  );
}

export default DoctorApptHistory;
