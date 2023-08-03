import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/doctors")
      .then(response => response.json())
      .then(data => {
        console.log(data); // likely have to create state for doctors and set it with data response
        if (data) {
          setDoctors(data);
        }
      });
  }, []);

  return (
    <div>
      Current Doctors
      {doctors.map(doctor => (
        <DoctorCard key={doctor.id} info={doctor} />
      ))}
    </div>
  );
}

export default Doctors;
