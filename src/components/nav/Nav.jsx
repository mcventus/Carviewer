import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo32 from "../../logo/logo115x32_1.png";
import { useState } from "react";
import "../main/Main.css";
import { Link, useNavigate } from "react-router-dom";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { useContext } from "react";
import { useLocalStorage } from "../../useLocal";
import { DataContext } from "../../DataContext";

export default function Nav(props) {
  //const datanum = useContext(DataContext)
  //const [isLoggedIn, setisLoggedIn] = useLocalStorage('isLoggedIn', '');
  const navigate = useNavigate();

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

  const [viewNavbar, setViewNavbar] = useState(false);
  const handleViewNavbar = () => {
    setViewNavbar(!viewNavbar);
  };
  return (
    <div className="container">
      <nav>
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
                  <Link
                    onClick={() => {
                      props.setisLoggedIn(false);
                    }}
                    to="/login"
                    id="link-logout"
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    onClick={() => {
                      props.setisLoggedIn(true);
                    }}
                    to="/mycarviewer"
                    id="link-login"
                  >
                    LogIn
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
