
import { useLocal } from "../../useLocal";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react'
import { DataContext } from '../../DataContext'
import '../register/Register.css'


//GLOBAL VARIABLES
let containsChar = false;
let containsSpecChar = false;
let containsNumber = false;
let isClicked = false;
let valid = false;
let invalid = false;


export const Register = () => {


  const [email, setEmail] = useState("email", '');
  const [password, setPassword] = useState('password', '');
  const [name, setName] = useState('name', '');

  const datanum = useContext(DataContext)
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
    //localStorage.removeItem("name")

  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    //localStorage.removeItem("email")

  }
  const handleChangePass = (e) => {
    setPassword(e.target.value)
  }
  const reDirect = () => {
    const path = '/login'
    navigate(path, { replace: true })
  }

  const access = () => {
    console.log("status: " + datanum.isLoggedIn)
    if (datanum.isLoggedIn) {
      localStorage.setItem("name", JSON.stringify(name))
      localStorage.setItem("email", JSON.stringify(email))
      localStorage.setItem("password", JSON.stringify(password))
      const path = "/mycarviewer"
      navigate(path, { replace: true });
    }
  }

  //password validity 
  const divStyleValid = {
    display: "flex",
    color: "green",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1.5rem",
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1.5rem' width='1.5rem' viewBox='0 0 512 512'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' fill='green' d='M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z'/%3E%3C/svg%3E") no-repeat left`,
    padding: "2rem",
    align: "center",
    margin: "1rem 0",
    backgroundContent: "",
    backgroundDisplay: "inline-block",
    backgroundPosition: "left",
    backgroundMargin: "0 auto",
    marginTop: "0px",
  };

  const divStyleInvalid = {
    display: "flex",
    color: "red",
    padding: "2rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1.5rem",
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1.5rem' width='1.5rem' viewBox='0 0 512 512'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' fill='red' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z'/%3E%3C/svg%3E") no-repeat left`,
    align: "center",
    margin: "1rem 0",
    fontSize: "14px",
    backgroundContent: "",
    backgroundDisplay: "inline-block",
    backgroundPosition: "left",
    backgroundMargin: "0 auto",
    marginTop: "0px",
  };
  const charList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const specialCharacterList = [
    "!",
    "@",
    "$",
    "%",
    "^",
    "&",
    "*",
    "?",
    "#",
    "~",
    '"',
    ",",
    "(",
    ")",
    "+",
    "-",
    ".",
    "/",
    ":",
    ";",
    ">",
    "<",
    "[",
    "]",
    "`",
    "{",
    "}",
    "|",
  ];
  const listNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const checkPswValidity = (str) => {
    for (let index = 0; index < charList.length; index++) {
      if (str.includes(charList[index])) {
        containsChar = true;
        break;
      } else {
        containsChar = false;
      }
    }

    for (let index = 0; index < specialCharacterList.length; index++) {
      if (str.includes(specialCharacterList[index])) {
        containsSpecChar = true;
        break;
      } else {
        containsSpecChar = false;
      }
    }

    for (let index = 0; index < listNum.length; index++) {
      if (str.includes(listNum[index])) {
        containsNumber = true;
        break;
      } else {
        containsNumber = false;
      }
    }
  };
  const setValidVisibility = () => {
    if (isClicked) {
      return <div style={divStyleValid}>Valid</div>;
    }
    return "";
  };

  const setInvalidVisibility = () => {
    if (isClicked) {
      return <div style={divStyleInvalid}>Invalid</div>;
    }
    return "";
  };

  const validate = (valid) =>
    isClicked && valid ? setValidVisibility() : setInvalidVisibility();

  const setIsClicked = (length) => {
    if (length !== 0) {
      isClicked = true;
    } else {
      isClicked = false;
    }
    checkPswValidity(password);
    if (
      length >= 7 &&
      password.length >= 7 &&
      containsChar &&
      containsSpecChar &&
      containsNumber
    ) {
      valid = true
      invalid = false
      datanum.setisLoggedIn(true)
    } else {
      valid = false
      invalid = true
    }
  };

  return (
    <div id="form__container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input value={name} onChange={handleChangeName} id="name" placeholder="Full Name" name="name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={handleChangeEmail} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={handleChangePass} type="password" onClick={setIsClicked(password.length)} placeholder="password" id="password" name="password" />
        {validate(valid)}{" "}
        <button id="log-reg" type="submit" onClick={() => { access() }}>Log In</button>
      </form>
      <button className="link-button" onClick={() => reDirect()}>Already have an account? Login here.</button>
    </div>

  )
}
export default Register;