
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 3, // Number of slides to show at this breakpoint
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="our-service-slider">
                  <div className="image-slider">
                    <img src={image} alt={`slide ${index}`} />
                    <div className="yellow-box">
                      <h2>Fuel Plans</h2>
                      <p>
                        We offer a number of convenient car rental fuel plan
                        options. Pay in advance for a full tank of gas and bring
                        the car back empty or simply purchase a full tank just
                        before you return the car to the drop-off location.
                      </p>
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
