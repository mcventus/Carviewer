import React from "react";
import { Routes, Route } from "react-router-dom";
import MyCarViewer from "../mycarviewer/MyCarViewer";
import GuardMyCarViewer from "../guardmycarviewer/GuardMyCarViewer";
import CarData from "../cardata/CarData";
import NoData from "../nodata/NoData";
import Nav from "../nav/Nav";
import { useState, useEffect } from "react";
import { CarDataContext } from "../../CarDataContext";
import { BASE_URL_DATA } from "../../globals";
import CarDataDetail from "../cardatadetail/CarDataDetail";
import Login from "../login/Login";
import Register from "../register/Register";
import About from "../about/About";
import { DataContext } from "../../DataContext";
import Home from "../home/Home";
import "../../App.css";
import data from "../../data/data.json";
import SmoothScroll from "smooth-scroll";
import Header from "../header/Header";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speedAsDuration: true,
  speed: 2000,
});
export default function Main() {
  const [renderPage, setrenderPage] = useState({});
  useEffect(() => {
    setrenderPage(data);
  }, []);

  const [options, setOptions] = useState({
    method: "GET",
    url: `${BASE_URL_DATA}`,
    params: { limit: "1", page: "1", year: "", make: "", model: "", type: "" },
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_CAR_KEY}`,
      "X-RapidAPI-Host": "car-data.p.rapidapi.com",
    },
  });

  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div className="main">
      <CarDataContext.Provider value={{ options, setOptions }}>
        <DataContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
          <Nav isLoggedIn={isLoggedIn} />
          <Routes>
            <Route exact path="/header" element={<Header />} />
            <Route exact path="/" element={<Home data={renderPage.Home} />} />
            <Route
              exact
              path="/login"
              element={<Login isLoggedIn={isLoggedIn} />}
            ></Route>
            <Route
              exact
              path="/register"
              element={<Register isLoggedIn={isLoggedIn} />}
            ></Route>
            <Route
              exact
              path="/about"
              element={<About data={renderPage.About} />}
            />
            <Route
              path="/mycarviewer"
              element={
                <GuardMyCarViewer isLoggedIn={isLoggedIn}>
                  <MyCarViewer />
                </GuardMyCarViewer>
              }
            />
            <Route path="/cardata" element={<CarData />} />
            <Route path="/cardata/:id" element={<CarDataDetail />} />
            <Route path="/nodata" element={<NoData />} />
          </Routes>
        </DataContext.Provider>
      </CarDataContext.Provider>
    </div>
  );
}
