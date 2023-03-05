
import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react'
import { DataContext } from "../../DataContext";
import '../register/Register.css'
//import Footer from "../footer/Footer";

const Login = () => {
    const [name, setName] = useState("name", "")
    const [password, setPassword] = useState("password", "")
    const datanum = useContext(DataContext)

    let navigate = useNavigate()
    const logIn = () => {
        //props.setisLoggedIn(true);
        const passify = localStorage.getItem("password")
        const passStored = JSON.parse(passify)
        console.log("password stored: " + passStored)
        console.log("password : " + password)
        const namify = localStorage.getItem("name")
        const nameStored = JSON.parse(namify)
        console.log("name stored: " + nameStored)
        console.log("name : " + name)
        if (name === nameStored && password === passStored) {
            console.log("test passed!")
            datanum.setisLoggedIn(true);
            const path = "/mycarviewer"
            navigate(path, { replace: true });
        } else {
            const path = "/login"
            navigate(path, { replace: true })
        }

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
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Your name" id="name" name="name" />
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />
                    <button id="log-reg" type="submit" onClick={() => logIn()}>Log In</button>
                </form>
                <button className="link-button" onClick={() => reDirect()}>Don't have an account? Register here.</button>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
export default Login;