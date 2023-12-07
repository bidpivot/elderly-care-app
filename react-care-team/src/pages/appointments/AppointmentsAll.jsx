import { dateFormatter } from "../../helpers/dateFormatter";
import { useEffect, useState } from "react";

export default function AppointmentsAll() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/appointmentslist")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setAppointments(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Upcoming Appointments</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-4 px-6">Date</th>
            <th className="py-4 px-6">Time</th>
            <th className="py-4 px-6">Doctor</th>
            <th className="py-4 px-6">Specialty</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appt => {
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
