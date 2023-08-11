import React, { useEffect, useState } from "react";

function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/prescriptions")
      .then(response => response.json())
      .then(data => {
        console.log(data.error); // likely have to create state for doctors and set it with data response
        if (data) {
          console.log(data.doctor);
          setPrescriptions(data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Current Prescriptions</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Total Daily Dosage</th>
            <th>Frequency</th>
            <th>Presribing Doctor</th>
            <th>Status</th>
            <th>Date Ended</th>
          </tr>
          {prescriptions.map(prescription => {
            return (
              <tr key={prescription.id}>
                <td>{prescription.name}</td>
                <td>{prescription.purpose}</td>
                <td>{prescription.dosage}</td>
                <td>{prescription.frequency}</td>
                <td>
                  {prescription.doctor.last_name} (
                  {prescription.doctor.specialty})
                </td>
                <td>{prescription.status ? "active" : "ended"}</td>
                <td>{prescription.status ? "active" : prescription.ended}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Prescriptions;
