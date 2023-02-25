import './Home.css'
import '../../App.css'
import { useState, useContext} from 'react'
import { CarDataContext } from '../../CarDataContext'
import CarData from '../cardata/CarData'


export default function Home(){

    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchText);
    }

    return(
       
   <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search for car"/>
            <CarData/>
        </form>
    </div>
       
     
    )
}