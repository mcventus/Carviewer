import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="header__top">
        <div className="header__darker">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 header__top__text">
                <h1>CarViewer</h1>
                <p>
                  Use this website to search for cars all over the USA. What is
                  more, the site will give detail information any car you are
                  interested in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
