import React from "react";

function DoctorAddress({ doctor }) {
  return (
    <div className="profile-doctor">
      <h3 className="text-lg font-bold">Profile</h3>
      <div className="profile-content">
        <p>Specialty: {doctor.specialty}</p>
        <p>Phone Number: {doctor.phone}</p>
        <p>Address: {doctor.address}</p>
        <p>Website: {doctor.website}</p>
      </div>
    </div>
  );
}

export default DoctorAddress;
