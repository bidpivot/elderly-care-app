import { dateFormatter } from "../../helpers/dateFormatter";
import { useEffect, useState } from "react";
import { get } from "../../helpers/useFetch";
import { useQuery } from "@tanstack/react-query";
import FormAppointment from "./FormAppointment";

export default function AppointmentsAll() {
  const [creating, setCreating] = useState(false);

  const { data: appointments, isLoading } = useQuery({
    queryKey: ["upcoming_appointments"],
    queryFn: () => get("/appointments/upcoming"),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!appointments) return <div>No appointments found.</div>;
  return (
    <div className="p-4 ">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold mb-2">Upcoming Appointments</h3>

        <button
          onClick={() => setCreating(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          Create New Event
        </button>
      </div>
      {creating && (
        <FormAppointment
          onClose={() => setCreating(false)}
          formOpen={creating}
        />
      )}
      <table className="w-full text-left border-collapse max-h-96">
        <thead>
          <tr className="border-b">
            <th className="py-4 px-6">Date</th>
            <th className="py-4 px-6">Time</th>
            <th className="py-4 px-6">Doctor</th>
            <th className="py-4 px-6">Specialty</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map(appt => {
              const { formattedDate, formattedTime } = dateFormatter(appt.time);

              return (
                <tr key={appt.id} className="border-b">
                  <td className="py-4 px-6">{formattedDate}</td>
                  <td className="py-4 px-6">{formattedTime}</td>
                  <td className="py-4 px-6">{appt.doctor}</td>
                  <td className="py-4 px-6">{appt.specialty}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
