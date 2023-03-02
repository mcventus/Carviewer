import React from 'react'
// import '../cardata/CarData.css'
import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import ShowImage from '../showimages/ShowImage'
import './CarDataDetail.css'
import '../about/About.css'
import carDataArray from '../cardatadetail/cardataimg.json'
import '../home/Home.css'
import { cadillac, chevrolet, gmc, hyundai, mercedes, nissan, toyota} from "../specImgs";

const carImags = [
  {
    make:'Toyota',
    image: toyota
  },
  {
    make:'Nissan',
    image: nissan
  },
  {
    make:'Hyundai',
    image: hyundai
  },
  {
    make:'Mercedes',
    image: mercedes
  },
  {
    make:'Chevrolet',
    image: chevrolet
  },
  {
    make:'GMC',
    image: gmc
  },
  {
    make:'Cadillac',
    image: cadillac
  }
]



export default function CarDataDetail() {

  const carito = {
    id: '30930',
    make: 'toyota',
    model: 'yaris',
  }

  const [car, setCar] = useState({})
  const [carImg, setCarImg] = useState()

  const DisplayCarDetail = ({car}) =>{
    return(
      <div className="home-item">
      <div className="hover-bg">
      {" "}
          <a href={carImg}>
            <div className="hover-text">
              <table className='displayDetail' style={{width:'auto', textAlign:'left', margin:'0 auto', color:'whitesmoke', marginBottom: '100px'}}>
                <tr>
                <td><h2>{'ID  '}</h2></td>
                <td><h2>{car.id}</h2></td>
                </tr>
                <tr>
                <td><h2>{'YEAR '}</h2></td>
                <td><h2>{car.year}</h2></td>
                </tr>
                <tr>
                <td><h2>{'MAKE '}</h2></td>
                <td><h2>{car.make}</h2></td>
                </tr>
                <tr>
                <td><h2>{'MODEL'}</h2></td>
                <td><h2>{car.model}</h2></td>
                </tr>
                <tr>
                <td><h2>{'TYPE  '}</h2></td>
                <td><h2>{car.type}</h2></td>
                </tr>
              </table>
            </div>
          <img src={carImg} className="flex-img" style={{margin: '0 auto'}}/>
          </a>{" "}
          <br/>
      </div>
      </div>
  )
  }

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
      carImags.map((c)=>{
        if(c.make == selectedCar.make){
            setCarImg(c.image)
            setCar(selectedCar)
            console.log('Img car type : '+c.make)
        }else{
            console.error("Error!")
        }
      })
     console.log(selectedCar)
  }, [id])

  return car ? (
      <div>
        <DisplayCarDetail car={car} id={car.id}/>
        <button id="back">
          <Link to="/cardata" id="link-btn">Back</Link>
        </button>
      {/* <Footer /> */}
    </div>
  ) : <h1>No car detail data found</h1>
}
