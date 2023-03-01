
import { useLocal } from "../../useLocal";
import { useNavigate} from "react-router-dom";
import { useContext } from 'react'
import { DataContext } from "../../DataContext";
import '../register/Register.css'
//import Footer from "../footer/Footer";

const Login = (props) => {
    const [email, setEmail] = useLocal("email", "")
    const [pass, setPass] = useLocal("pass", "")
    // const [isLoggedIn, setisLoggedIn] = useLocal('isLoggedIn', '');
    const datanum = useContext(DataContext)

    let navigate = useNavigate()
    const logIn = () => {
        //props.setisLoggedIn(true);
        datanum.setisLoggedIn(true);
        const path = "/mycarviewer"
        navigate(path, { replace: true });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const reDirect = () => {
        const path = "/register"
        navigate(path)
    }

    return (
        <div>
            <div id="form__container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit" onClick={() => logIn()}>Log In</button>
                </form>
                <button className="link-btn" onClick={() => reDirect()}>Don't have an account? Register here.</button>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
export default Login;