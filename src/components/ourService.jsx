import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Image1 from "../images/testimonials/Afterhours.jpg";
import Image2 from "../images/testimonials/business.jpg";
import Image3 from "../images/testimonials/CardropoffandPickup.jpg";
import Image4 from "../images/testimonials/Delivery.jpg";
import Image5 from "../images/testimonials/RoadsideAssistance.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

const slidesContent = [
  {
    title: "Roadside Assistance",
    description:
      "We offer roadside assistance within Melbourne region. Call us if you need any help and we will take it from there.",
  },
  {
    title: "Car Drop off and Pick up",
    description:
      "We offer car drop off and pick up service depending on our availability. We could happily drop you off to the airport for the price of an Uber (if available).",
  },
  {
    title: "We are a local business",
    description:
      "When you rent from us you help a local small business to grow.",
  },
  {
    title: "After hours pick up and drop off",
    description:
      "We try our best to cater to your needs. Depending on our availability we will happily offer after hours rental service.",
  },
  {
    title: "Delivery",
    description:
      "If you need a delivery from A to B. We can offer our commercial vehicles with driver too. Ask us for pricing and availability.",
  },
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
      <section className='pick-section'>
        <div className='container'>
          <div className='pick-container'>
            <div className='pick-container__title'>
              <h2>OUR SERVICES</h2>
              <h3>
                We pride ourselves in offering an unmatched service with crazy
                low pricing
              </h3>

              {/* <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p> */}
            </div>

            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className='our-service-slider'>
                  <div className='image-slider'>
                    <img src={image} alt={`slide ${index}`} />
                    <div className='yellow-box'>
                      <h2>{slidesContent[index].title}</h2>
                      <p>{slidesContent[index].description}</p>
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
