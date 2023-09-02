// import Doctors from "../doctors/doctors";
import Prescriptions from "../prescriptions/Prescriptions";
import Tasks from "../tasks/Tasks";
import AppointmentsAll from "../appointments/AppointmentsAll";

export default function Dash() {
  return (
    <div id="dash-container">
      <Prescriptions />
      <Tasks />
      <AppointmentsAll />
    </div>
  );
}
