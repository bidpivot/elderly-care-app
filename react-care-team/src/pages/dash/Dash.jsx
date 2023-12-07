// import Doctors from "../doctors/doctors";
import Prescriptions from "../prescriptions/Prescriptions";
import Tasks from "../tasks/Tasks";
import AppointmentsAll from "../appointments/AppointmentsAll";

export default function Dash() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <Tasks />
          </div>
          <div className="p-4 bg-white rounded shadow">
            <AppointmentsAll />
          </div>
          <div className="p-4 bg-white rounded shadow">
            <Prescriptions />
          </div>
        </div>
      </div>
    </div>
  );
}
