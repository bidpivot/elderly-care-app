import michell_karl from "../assets/michell_karl.jpg";
export default function Header(props) {
  return (
    <div className="image-doctor-profile">
      <img src={props.image} height="200" width="200" />
    </div>
  );
}
