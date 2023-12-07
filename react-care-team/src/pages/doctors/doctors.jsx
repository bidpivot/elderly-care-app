import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/doctors")
      .then(response => response.json())
      .then(data => {
        console.log(data.error); // likely have to create state for doctors and set it with data response
        if (data) {
          setDoctors(data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Current Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} info={doctor} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
