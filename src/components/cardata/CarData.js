import { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL_DATA } from "../../globals"
import './cardata.css'

export default function Data() {

    const [carData, setCarData] = useState({})
    const [carImg, setCarImg] = useState({})
    useEffect(() => {
        const options = {
            method: 'GET',
            url: `${BASE_URL_DATA}`,
            params: { limit: '5', page: '5', make: 'Mercedes' },
            headers: {
                'X-RapidAPI-Key': '818ea8e0bfmsh0182c314b270b49p1acc79jsn1c625283d60b',
                'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
            }
        };

        const getCarData = async () => {
            axios.request(options).then(function (response) {
                const temp = {}
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