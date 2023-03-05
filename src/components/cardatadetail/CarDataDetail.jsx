import React from "react";
import { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import "./CarDataDetail.css";
import "../about/About.css";
import "./CarDataDetail.css";
import {
  cadillac_sm,
  gmc_sm,
  chevrolet_sm,
  hyundai_sm,
  mercedes_sm,
  nissan_sm,
  toyota_sm,
  hummer_sm,
  chrysler_sm,
  audi_sm,
  peugeot_sm,
  range_rover_sm,
  volkswagen_sm,
  volvo_sm,
  ford_sm,
  dodge_sm,
  opel_sm,
  gmc_lg,
  cadillac_lg,
  chevrolet_lg,
  hyundai_lg,
  mercedes_lg,
  nissan_lg,
  toyota_lg,
  hummer_lg,
  chrysler_lg,
  audi_lg,
  peugeot_lg,
  range_rover_lg,
  volkswagen_lg,
  volvo_lg,
  ford_lg,
  dodge_lg,
  opel_lg,
  mini_sm,
  mini_lg,
} from "../cardata/specImgs";

const carImags = [
  {
    make: "Toyota",
    imageSm: toyota_sm,
    imageLg: toyota_lg,
  },
  {
    make: "Nissan",
    imageSm: nissan_sm,
    imageLg: nissan_lg,
  },
  {
    make: "Hyundai",
    imageSm: hyundai_sm,
    imageLg: hyundai_lg,
  },
  {
    make: "Mercedes-Benz",
    imageSm: mercedes_sm,
    imageLg: mercedes_lg,
  },
  {
    make: "Chevrolet",
    imageSm: chevrolet_sm,
    imageLg: chevrolet_lg,
  },
  {
    make: "GMC",
    imageSm: gmc_sm,
    imageLg: gmc_lg,
  },
  {
    make: "Range Rover",
    imageSm: range_rover_sm,
    imageLg: range_rover_lg,
  },
  {
    make: "Peugeot",
    imageSm: peugeot_sm,
    imageLg: peugeot_lg,
  },
  {
    make: "Audi",
    imageSm: audi_sm,
    imageLg: audi_lg,
  },
  {
    make: "Chrysler",
    imageSm: chrysler_sm,
    imageLg: chrysler_lg,
  },
  {
    make: "HUMMER",
    imageSm: hummer_sm,
    imageLg: hummer_lg,
  },
  {
    make: "Dodge",
    imageSm: dodge_sm,
    iimageLg: dodge_lg,
  },
  {
    make: "Ford",
    imageSm: ford_sm,
    imageLg: ford_lg,
  },
  {
    make: "Volvo",
    imageSm: volvo_sm,
    imageLg: volvo_lg,
  },
  {
    make: " Volkswagen",
    imageSm: volkswagen_sm,
    imageLg: volkswagen_lg,
  },
  {
    make: " Opel",
    imageSm: opel_sm,
    imageLg: opel_lg,
  },
  {
    make: " Cadillac",
    imageSm: cadillac_sm,
    imageLg: cadillac_lg,
  },
  {
    make: " MINI",
    imageSm: mini_sm,
    imageLg: mini_lg,
  },
];

export default function CarDataDetail() {
  const carito = {
    id: "30930",
    make: "toyota",
    model: "yaris",
  };

  const [car, setCar] = useState({});
  const [carImgSm, setCarImgSm] = useState();
  const [carImgLg, setCarImgLg] = useState();

  const DisplayCarDetail = ({ car }) => {
    return (
      <>
        <div className="cardata-cont">
          <div className="detail-item">
            <div className="hover-bg">
              {" "}
              <a title={car.make}>
                <div className="hover-text">
                  <h4>
                    {car.make} 
                  </h4>
                </div>
                <img
                  src={carImgLg}
                  className="flex-img"
                  style={{ margin: "0 auto" }}
                  alt={car.make}
                />
              </a>{" "}
              <br />
            </div>
          </div>
        </div>
        <div className="car-grid">
          <div className="cardata-card">
            <table className="display-detail">
              <tr>
                <td id="td1">
                  <h3>{"ID  "}</h3>
                </td>
                <td id="td2">
                  <h3>{car.id}</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>{"YEAR "}</h3>
                </td>
                <td>
                  <h3>{car.year}</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>{"MAKE "}</h3>
                </td>
                <td>
                  <h3>{car.make}</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>{"MODEL"}</h3>
                </td>
                <td>
                  <h3>{car.model}</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>{"TYPE  "}</h3>
                </td>
                <td>
                  <h3>{car.type}</h3>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  };

  let { id } = useParams();
  function getLocal(key, iniValue) {
    // getting stored value
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : iniValue;
      return initial;
    }
  }
  useEffect(() => {
    let selectedCar = getLocal("car", carito);
    carImags.map((c) => {
      if (c.make === selectedCar.make) {
        setCarImgSm(c.imageSm);
        setCarImgLg(c.imageLg);
        setCar(selectedCar);
      } else {
        console.error("Error!");
      }
    });
    console.log(selectedCar);
  }, [id]);

  return car ? (
    <div>
      <DisplayCarDetail car={car} id={car.id} />
      <button id="back">
        <Link to="/cardata" id="link-btn">
          Back
        </Link>
      </button>
      {/* <Footer /> */}
    </div>
  ) : (
    <h1>No car detail data found</h1>
  );
}
