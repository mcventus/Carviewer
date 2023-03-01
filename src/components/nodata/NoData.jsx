import '../cardata/CarData.css'
import { Link } from 'react-router-dom'

export default function NoData() {
        return (
            <div>
                <div>
                   <h2>Sorry, no data here.</h2>
                   <h3>Go home and search again.</h3>
            </div>
            <button><Link to="/">Home</Link></button>
            </div>
        )
} 
