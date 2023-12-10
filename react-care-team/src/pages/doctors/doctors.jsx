import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { get } from "../../helpers/useFetch"
import { useQuery } from "@tanstack/react-query"

function Doctors() {

  const { data: doctors, isLoading, error } = useQuery({ queryKey: ["doctors"], queryFn: () => get("/doctors"), refetchOnMount: false, refetchOnWindowFocus: false })

  if (isLoading) {
    return <div>
      Laoding ...
    </div>
  }

  if (!doctors) {
    return null
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Current Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {doctors && doctors.map(doctor => (
          <DoctorCard key={doctor.id} info={doctor} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
