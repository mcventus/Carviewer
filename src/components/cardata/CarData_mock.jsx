
// MOCK 
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./CarData.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import CarDataDetail from "../cardatadetail/CarDataDetail";
import carin from "./mock_data.json";
import ShowCar from "./ShowCar";
import { CarDataContext } from "../../CarDataContext";
// import carImg from '../../components/cardata/spec-imgs/cadillac_500x750.png'

export default function CarData(props) {
  //const [carData, setCarData] = useState([]);
  const [car, setCarSearched] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  //const [carImg, setCarImg] = useState({})
  const datanum = useContext(CarDataContext);

  let navigate = useNavigate();
  const showCarDetail = (car) => {
    car.make = datanum.options.params.make
    localStorage.setItem("car", JSON.stringify(car));
    setShowDetail(true);
    const path = "/cardata/" + car.id;
    navigate(path, { replace: false });
  };

  useEffect(() => {
        carin.map((car, index)=> {
          setCarSearched(car)
          console.log(car)
        })
        // searchText = datanum.options.params.make
        // carin.find((car, index)=> {
        //   car.make = "toyota"? setCarSearched(car):console.log("No car found!" + car.make)
        // })
        // console.log(datanum.options.params.make)
        // console.log("Xyz: "+car)
  }, []);

    return (
      <div>
        <div className="bg-light d-flex justify-content-between">
          <div>
            <h2 style={{ marginBottom: "20px" }}>RESULTS FROM THE SEARCH</h2>
          </div>
          <div>
            <p>Select and click any car to get detail information.</p>
          </div>
        </div>
        <div className="car-grid">
            <div onClick={() => showCarDetail(car)} key={car.id} >
              <ShowCar make={datanum.options.params.make} year={car.year} model={car.model} />
            </div>
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
  } 

