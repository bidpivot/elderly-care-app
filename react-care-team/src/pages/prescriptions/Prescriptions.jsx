import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../../helpers/useFetch";
import { useQuery } from "@tanstack/react-query";

function Prescriptions() {
  const { data: prescriptions, isLoading } = useQuery({
    queryKey: ["prescriptions"],
    queryFn: () => get("/prescriptions"),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!prescriptions) return <div>No prescriptions found.</div>;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Current Prescriptions</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Purpose</th>
            <th className="py-4 px-6">Total Daily Dosage</th>
            <th className="py-4 px-6">Frequency</th>
            <th className="py-4 px-6">Presribing Doctor</th>
            <th className="py-4 px-6">Status</th>
            <th className="py-4 px-6">Date Ended</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map(prescription => {
            return (
              <tr key={prescription.id} className="border-b">
                <td className="py-4 px-6">{prescription.name}</td>
                <td className="py-4 px-6">{prescription.purpose}</td>
                <td className="py-4 px-6">{prescription.dosage}</td>
                <td className="py-4 px-6">{prescription.frequency}</td>
                <td className="py-4 px-6">
                  {prescription.doctor.last_name} (
                  {prescription.doctor.specialty})
                </td>
                <td className="py-4 px-6">
                  {prescription.status ? "active" : "ended"}
                </td>
                <td className="py-4 px-6">
                  {prescription.status ? "active" : prescription.ended}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Prescriptions;
