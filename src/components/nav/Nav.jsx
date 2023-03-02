import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo32 from "../../logo/logo115x32_1.png";
import "../main/Main.css";
import { Link, useNavigate } from "react-router-dom";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { useState, useEffect } from "react";

export default function Nav(props) {
  //const datanum = useContext(DataContext)
  //const [isLoggedIn, setisLoggedIn] = useLocalStorage('isLoggedIn', '');
  // #666878
  const navigate = useNavigate();
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navBorderRadius, setnavBorderRadius] = useState("0");
  const [navPadding, setnavPadding] = useState("0");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("rgba(219, 219, 219, 0.8) 0%") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    window.scrollY > 10 ? setnavBorderRadius("7rem") : setnavBorderRadius("0rem");
    window.scrollY > 10 ? setnavBorderRadius("1rem") : setnavBorderRadius("0rem");
    window.scrollY > 10 ? setnavPadding("1rem") : setnavPadding("0rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

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
      <nav
          // style={{
          //         backgroundColor: navColor,
          //         height: navSize,
          //         borderRadius: navBorderRadius,
          //         padding: navPadding,
          //         transition: "all 1s"
          //       }}
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
