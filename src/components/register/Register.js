
import { useLocal } from "../../useLocal";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { DataContext } from '../../DataContext'
import '../register/Register.css'

export const Register = () => {
    const [email, setEmail] = useLocal("email", '');
    const [pass, setPass] = useLocal('pass', '');
    const [name, setName] = useLocal('name', '');

    const datanum = useContext(DataContext)
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const reDirect = () => {
        const path = '/login'
        navigate(path, {replace: true})
    }

    const access = () => {
        datanum.setisLoggedIn(true)
        const path = "/mycarviewer"
        navigate(path, { replace: true }); 
    }

    return (
        <div id="form__container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="logReg" type="submit" onClick={()=>{access()}}>Log In</button>
        </form>
        <button className="link-btn" onClick={() =>reDirect()}>Already have an account? Login here.</button>
    </div>
       
    )
}
export default Register;