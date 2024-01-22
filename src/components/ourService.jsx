import { useState ,useEffect  } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



 

const images = [
  "https://demo.olevmedia.net/wheelsberry/wp-content/uploads/2016/08/SHUTTERSTOCK_111951167.jpg",
  "http://demo.olevmedia.net/wheelsberry/wp-content/uploads/2016/08/SHUTTERSTOCK_59980393.jpg",
  "http://demo.olevmedia.net/wheelsberry/wp-content/uploads/2016/08/SHUTTERSTOCK_84012001.jpg",

 
];

 

function OurService() {
 

 


  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
 
  };


  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>BEST SERVICE IN THE WORLD</h3>
              <h2>OUR SERVICES</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>

            {/* <div className="pick-container__car-content">
              
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div> */}







 
    
<Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="our-service-slider">
          <div className="image-slider">
            <img src={image} alt={`slide ${index}`} />
            <div className="yellow-box">
              <h2>Fuel Plans</h2>
              <p>We offer a number of convenient car rental fuel plan options. Pay in advance for a full tank of gas and bring the car back empty or simply purchase a full tank just before you return the car to the drop-off location.</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
      
   


  



            
          </div>
        </div>
      </section>
    </>
  );
}

export default OurService;
