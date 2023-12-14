import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import FormAppointment from "../appointments/FormAppointment.jsx";
import DocProfilePic from "../../components/DocProfilePic";
import michell_karl from "../../assets/michell_karl.jpg";
import { get } from "../../helpers/useFetch.js";
import { useQuery } from "@tanstack/react-query";
import DoctorLatestInfo from "./DoctorLatestInfo.jsx";
import DoctorAddress from "./DoctorAddress.jsx";
import { AppContext } from "../../helpers/AppContext";
import DoctorApptHistory from "./DoctorApptHistory.jsx";

export default function DoctorDetails() {
  const context = useContext(AppContext);
  const params = useParams();
  const doctor_id = params.id;
  const [formOpen, setFormOpen] = useState(false);

  // react query hook that fetches the doctor's data but also related appointment data from that table
  const { data: doctor, isLoading } = useQuery({
    queryKey: ["doctor", doctor_id],
    queryFn: () => get(`/doctors/${doctor_id}`),
    enabled: !!params.id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!doctor) {
    return <div>Doctor not found</div>;
  }
  const apptsHistory = doctor?.appts_history;

  return (
    <div className="p-4 bg-white shadow overflow-y-auto rounded-lg">
      <div>
        {/* <h1 className="text-2xl font-bold">
          Dr. {`${doctor.first_name} ${doctor.last_name}`}
        </h1> */}
        {<DocProfilePic image={michell_karl} />}
      </div>
      <DoctorAddress doctor={doctor} />
      <DoctorLatestInfo doctor={doctor} />
      <DoctorApptHistory apptsHistory={apptsHistory} context={context} />{" "}
      {!formOpen && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setFormOpen(true)}
        >
          Create Appointment
        </button>
      )}
      {formOpen && (
        <FormAppointment
          onCancelClick={() => setFormOpen(false)}
          formOpen={formOpen} // this is a boolean
          doctor_id={doctor_id}
        />
      )}
    </div>
  );
}
