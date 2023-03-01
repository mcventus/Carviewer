import React from 'react'
// import '../cardata/CarData.css'
import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import ShowImage from '../../components/showimages/ShowImage'
import './CarDataDetail.css'
import '../about/About.css'


export default function CarDataDetail(props) {

  const carito = {
    id: '30930',
    make: 'toyota',
    model: 'yaris',
  }

  const [car, setCar] = useState({})
  let { id } = useParams()
  //const datanumDetail = useContext(CarDataContext)
  function getStorageValue(key, defaultValue) {
    // getting stored value
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : defaultValue;
      return initial;
    }
  }
  useEffect(() => {
    let selectedCar = getStorageValue('car', carito)
    setCar(selectedCar)
  }, [id])

  return car ? (
      <div>
      <div id="home">
      <div className="container">
            {props.cardataimg
              ? props.cardataimg.map((car, index) => (
                <div
                key={`${index}__${car.title} `}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                    <ShowImage
                      title={car.title}
                      largeImg={car.large}
                      smallImg={car.small}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        {/* <div className="card-detail">
          <div id="row">
          </div>
          {'ID '}{car.id} {" "}<br />
          {'MAKE '}{car.make} {" "}<br/>
          {'YEAR '}{car.year}<br />
          {'MODEL '}{car.model}{" "} <br />
          {'TYPE '}{car.type}
        </div> */}
        <button id="back">
          <Link to="/cardata" id="link-btn">Back</Link>
        </button>
      {/* <Footer /> */}
    </div>
  ) : <h1>No car detail data found</h1>
}
