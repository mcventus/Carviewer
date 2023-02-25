import { useState, useEffect, useContext } from "react"
import { CarDataContext } from "../../CarDataContext"
import axios from 'axios'
import { BASE_URL_DATA } from "../../globals"
import './cardata.css'

export default function Data() {

    const searchTextInput = useContext(CarDataContext)
    const [carData, setCarData] = useState({})
    const [carImg, setCarImg] = useState({})
    
    useEffect(() => {
      
        const options = {
            method: 'GET',
            url: `${BASE_URL_DATA}`,
            params: { limit: '5', page: '5', make: 'Toyota' },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_CAR_KEY}`,
                'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
            }
        };

        const getCarData = async () => {
            axios.request(options).then(function (response) {
                console.log(response.data[0]);
                response.data.map((d) =>(setCarData(d) ))
            }).catch(function (error) {
                console.error(error);
            });
        }
        getCarData()



    }, [])
    if (carData) {
        return (
            <div className="data-container">
                <h2>{carData.id}</h2>
                <h2>{carData.name}</h2>
                <h2>{carData.model}</h2>
                <h2>{carData.type}</h2>
                <h2>{carData.year}</h2>

                {/* <img src={dataImg} /> */}
            </div>
        )

    } else {
        return (
            <h1>loading please wait</h1>
        )
    }

}