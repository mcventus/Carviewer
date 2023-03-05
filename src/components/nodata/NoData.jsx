import "../cardata/CarData.css";
import "./NoData.css";
import { Link } from "react-router-dom";

export default function NoData() {
  return (
    <div classNmae="no-data">
      <div>
        <h2>Sorry, no data here.</h2>
        <h3>Go home and search again.</h3>
      </div>
      <button className="no-data-button" id="link-btn">
        <Link to="/cardata">Back</Link>
      </button>
    </div>
  );
}
