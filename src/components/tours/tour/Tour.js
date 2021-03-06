
import { Link } from "react-router-dom";
function Tour(props) {
  return (
    <>
      <Link to={`/city/${props.id}`}>
        <div className="tours-section">
          <h1>{props.name}</h1>
          <img src={props.image} alt={props.name} style={{ width: "50rem" }} />
          <hr/>
        </div>
      </Link>
    </>
  );
}
export default Tour;
