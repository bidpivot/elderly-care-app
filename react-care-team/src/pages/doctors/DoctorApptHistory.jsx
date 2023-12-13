import React from "react";

// I don't need this mutation, I don't think I even want to have a delete button on the doctor details page
// const apptDestroyQuery = useMutation({
//   mutationFn: id => destroy(`/appointments/${id}`),
//   onSuccess: () => {
//     queryClient.invalidateQueries(["doctor", doctor_id]);
//   },
// });

function DoctorApptHistory({ apptsHistory, context }) {
  return (
    <div className="table-appts">
      <h3 className="text-lg font-bold">Past Appointments</h3>
      <table className="w-full">
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
                  {/* <td>
                    <a
                      className="text-blue-500 cursor-pointer"
                      onClick={() => apptDestroyQuery.mutate(appt.id)}
                    >
                      delete
                    </a>
                  </td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorApptHistory;
