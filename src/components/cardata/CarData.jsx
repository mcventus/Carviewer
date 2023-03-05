import { useState, useEffect, useContext } from "react";
import { CarDataContext } from "../../CarDataContext";
import axios from "axios";
import "./CarData.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import CarDataDetail from "../cardatadetail/CarDataDetail";
import ShowCar from "./ShowCar";
import { useLocal } from "../../useLocal";

export default function CarData() {
  const [carData, setCarData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [selections, setSelections] = useLocal("selections", "");

  let navigate = useNavigate();
  const showCarDetail = (car) => {
    localStorage.removeItem("car");
    localStorage.setItem("car", JSON.stringify(car));
    localStorage.removeItem("selections");
    localStorage.setItem("selections", JSON.stringify(car));
    setShowDetail(true);
    const path = "/cardata/" + car.id;
    navigate(path, { replace: false });
  };

  const datanumcar = useContext(CarDataContext);

  useEffect(() => {
    const getCarData = async () => {
      axios
        .request(datanumcar.options)
        .then(function (response) {
          setCarData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getCarData();
  }, []);

  if (carData && !showDetail) {
    return (
      <div>
        <div className="bg-light d-flex justify-content-between">
          <div>
            <h2 style={{ marginBottom: "20px" }}>RESULTS FROM THE SEARCH</h2>
          </div>
          <div>
            <p style={{ fontSize: "14px", marginBottom: "20px" }}>
              Select and click any car to get detail information.
            </p>
          </div>
        </div>
        <div className="car-grid">
          {carData.map((car, index) => (
            <div onClick={() => showCarDetail(car)} key={car.id}>
              <ShowCar make={car.make} year={car.year} model={car.model} />
            </div>
          ))}
        </div>
        <div id="above-back">
          <button id="back">
            <Link to="/mycarviewer" id="link-btn">
              Back
            </Link>
          </button>
        </div>
      </div>
    );
  } else if (showDetail && carData) {
    return <CarDataDetail carData={carData} />;
  } else {
    return (
      <div>
        <h1>loading please wait</h1>
      </div>
    );
  }
}
