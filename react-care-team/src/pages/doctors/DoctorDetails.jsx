import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DoctorDetails() {
  const params = useParams();
  const [doctor, setDoctor] = useState({});
  // console.log(params.id);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/doctors/${params.id}`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        setDoctor(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Dr. {`${doctor.first_name} ${doctor.last_name}`}</h1>
    </div>
  );
}
