import { NavLink } from 'react-router-dom'
import './Nav.css'
import logo32 from '../../logo/logo32_camel.png'

export default function Nav(){
    return(
        <div className='nav-container'>
            <nav>
                 <img src={logo32} alt="Logo"/>
                <ul>
                    <li><NavLink id="link" to="/">Home</NavLink></li>
                    <li><NavLink id="link" to="/data">Data</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}