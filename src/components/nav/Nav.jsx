import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo32 from "../../logo/logo115x32_1.png";
import "../main/Main.css";
import { useNavigate } from "react-router-dom";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { useState, useEffect } from "react";

export default function Nav(props) {
 
  const navigate = useNavigate();
  const [navSize, setnavSize] = useState("7rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navBorderRadius, setnavBorderRadius] = useState("0");
  const [navPadding, setnavPadding] = useState("0");

  //logged in user
  const [loggedinName, setLoggedinName] = useState("");
  
  const listenScrollEvent = () => {
    window.scrollY > 7 ? setnavColor("#ffffff") : setnavColor("transparent");
    window.scrollY > 7 ? setnavSize("5rem") : setnavSize("7rem");
    window.scrollY > 7
      ? setnavBorderRadius("7rem")
      : setnavBorderRadius("0rem");
    window.scrollY > 7
      ? setnavBorderRadius("1rem")
      : setnavBorderRadius("0rem");
    window.scrollY > 7 ? setnavPadding("1rem") : setnavPadding("0rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  
  }, []);

  useEffect(()=>{
    const namify = localStorage.getItem("name")
    const nameStored = JSON.parse(namify)
    setLoggedinName(nameStored)
  }, [loggedinName])

  const logIn = () => {
    props.setisLoggedIn(true);
    // {<Navigate to="/login" replace/>}
    const path = "/profile";
    navigate(path, { replace: true });
  };

  const logOut = () => {
    props.setisLoggedIn(false);
    // {<Navigate to="/login" replace/>}
    const path = "/login";
    navigate(path, { replace: true });
  };

  const namify = localStorage.getItem("name")
  const nameStored = JSON.parse(namify)

  const [viewNavbar, setViewNavbar] = useState(false);
  const handleViewNavbar = () => {
    setViewNavbar(!viewNavbar);
  };
  return (
    <div className="container">
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          borderRadius: navBorderRadius,
          padding: navPadding,
          transition: "all 1s"
        }}
      >
        <img src={logo32} className="logo"></img>
        <div className="dropdown-menu">
          <button className="dropdown-btn" onClick={handleViewNavbar}>
            <TfiLayoutMenuSeparated />
          </button>
          <div className={`nav-elements ${viewNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink id="link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink id="link" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink id="link" to="/mycarviewer">
                  MyCarViewer
                </NavLink>
              </li>
             
              {props.isLoggedIn ? (
                 <li>
                <NavLink id="link" >
                
                <div id="loggedin-user">{loggedinName}</div>
                  </NavLink>
                  </li>
              ):("")
                  
                }
              {props.isLoggedIn ? (
                <li>
                  <NavLink
                    onClick={() => {
                      props.setisLoggedIn(false);
                    }}
                    to="/"
                    id="link-logout"
                  >
                  Logout
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    id="link-login"
                  >
                    LogIn
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
