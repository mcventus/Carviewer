import { Navigate } from 'react-router-dom'

const GuardMyCarViewer = ({ isLoggedIn, children }) => {
    console.log("login status: " + isLoggedIn)
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    } else {
        return children
    }
}
export default GuardMyCarViewer;