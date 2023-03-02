import './About.css'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const About = (props) => {
  return (
    <div>
       
      <Header/>
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3 style={{marginBottom: '100px', marginTop: '40px', fontSize: '40px'}}>Common cars in the USA</h3>
              <div>
                <div className='container'>
              
                <div className="row">
               
                  <div className='col'>
                 
                  <ul id="list_cars" >
                    {props.data
                      ? props.data.paragraph_1.map((car, index) => (
                          <p  id="list_cars" style={{ listStyleType: "none" }} key={`${index}__${car}`}>  <h3 id="car_types">{car.title}</h3>{car.paragraph}</p>
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
    <Footer/>
    </div>
  );
};
export default About