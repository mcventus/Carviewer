import ShowImage from "../showimages/ShowImage";
import React from "react";
import "./Home.css";
import "../about/About.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Home = (props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div id="home">
        <div className="container">
          <div className="section-title">
            <h2>People On The Road</h2>
            <p id="home-parag">
              On this website, you can find relevant information about cars in
              USA by typing only the car's maker name. The website will then
              display as primary information car's make, year, and model. If
              more detail information is needed about a specific car, all one
              has to do is to select the car he or she is interested in and
              click it. Details like id and type will be included. Happy
              searching!
            </p>
          </div>
          <div id="row">
            <div>
              {props.data
                ? props.data.map((car, index) => (
                    <div
                      key={`${index}__${car.title} `}
                      className="col-sm-6 col-md-4 col-lg-4"
                    >
                      <ShowImage
                        title={car.title}
                        largeImg={car.largeImg}
                        smallImg={car.smallImg}
                      />
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
