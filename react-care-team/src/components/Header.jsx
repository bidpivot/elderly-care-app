import cat3 from "../assets/cat3.png";
export default function Header(props) {
  return (
    <div className="header">
      <div>
        <h2>Our Care Team</h2>
        <h3>Team Name</h3>
      </div>
      <div className="container-header-right">
        <p>Ana (caretaker)</p>
        <img src={props.image} height="30" width="30" />
      </div>
    </div>
  );
}
