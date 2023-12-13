import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function DoctorAddress({ doctor }) {
  return (
    <div className="w-64">
      <Card>
        <CardHeader>
          <CardTitle>
            Dr. {`${doctor.first_name} ${doctor.last_name}`}
          </CardTitle>
          <CardDescription>{doctor.specialty}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{doctor.phone}</p>
          <address>{doctor.address}</address>
          <a href="https://www.drkarlcares.com/">{doctor.website}</a>
        </CardContent>
        {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
      </Card>
    </div>

    // <div className="profile-doctor">
    //   <h3 className="text-lg font-bold">Profile</h3>
    //   <div className="profile-content">
    //     <p>Specialty: {doctor.specialty}</p>
    //     <p>Phone Number: {doctor.phone}</p>
    //     <p>Address: {doctor.address}</p>
    //     <p>Website: {doctor.website}</p>
    //   </div>
    // </div>
  );
}

export default DoctorAddress;
