import "./About.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const About = (props) => {
  return (
    <div>
      <Header />
      <div id="about">
        <div className="about-container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <div className="abt-com"><h3 id="about-common">Common cars in the USA</h3></div>
                <div>
                  <div className="about-container">
                    <div className="row">
                      <div className="col">
                        <ul id="list_cars">
                          {props.data
                            ? props.data.paragraph_1.map((car, index) => (
                                <p
                                  id="list_cars"
                                  style={{ listStyleType: "none" }}
                                  key={`${index}__${car}`}
                                >
                                  {" "}
                                  <h3 id="car_types">{car.title}</h3>
                                  {car.paragraph}
                                </p>
                              ))
                            : "loading"}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
