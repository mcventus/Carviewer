import React from 'react'
// import '../cardata/CarData.css'
import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import ShowImage from '../showimages/ShowImage'
import './CarDataDetail.css'
import '../about/About.css'
import carDataArray from '../cardatadetail/cardataimg.json'


export default function CarDataDetail() {

  const carito = {
    id: '30930',
    make: 'toyota',
    model: 'yaris',
  }

  const [car, setCar] = useState({})
  let { id } = useParams()
  //const datanumDetail = useContext(CarDataContext)
  function getLocal(key, iniValue) {
    // getting stored value
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : iniValue;
      return initial;
    }
  }
  useEffect(() => {
    let selectedCar = getLocal('car', carito)
    setCar(selectedCar)
  }, [id])

  return car ? (
      <div>
      {/* <div id="home">
      <div className="container">
            {carDataArray
              ? carDataArray.map((carin, index) => (
                <div
                key={`${index}__${carin.title} `}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                    <ShowImage
                      title={carin.title}
                      largeImg={carin.largeImg}
                      smallImg={carin.smallImg}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div> */}
        <div className="card-detail">
          <div id="row">
          </div>
          {'ID '}{car.id} {" "}<br />
          {'MAKE '}{car.make} {" "}<br/>
          {'YEAR '}{car.year}<br />
          {'MODEL '}{car.model}{" "} <br />
          {'TYPE '}{car.type}
        </div>
        <button id="back">
          <Link to="/cardata" id="link-btn">Back</Link>
        </button>
      {/* <Footer /> */}
    </div>
  ) : <h1>No car detail data found</h1>
}
