import Nav from '../nav/Nav'
import './header.css'

export default function Home(){
    return(
        <div className='car-viewer-header'>
            <div className='nav-container'>
                <Nav/>
            </div>
            {/* <div className='header-title'>
                <h1>CarViewer</h1>
            </div> */}
        </div>
    )
}