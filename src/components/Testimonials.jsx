import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const demoData = [
  {
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    name: 'Jones Mbogholi',
    country: 'Kenya',
  },
  {
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    name: 'Jane Doe',
    country: 'Kenya',
  },
  {
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    name: 'John Doe',
    country: 'Kenya',
  },
  {
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    name: 'Jane Doe',
    country: 'Kenya',
  },
  {
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    name: 'John Doe',
    country: 'Kenya',
  },
  {
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    name: 'Jane Doe',
    country: 'Kenya',
  },
  {
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    name: 'John Doe',
    country: 'Kenya',
  },
  {
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    name: 'Jane Doe',
    country: 'Kenya',
  },
];

function Testimonials() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
 
  };


  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

        




            <Slider {...settings}>
      {demoData.map((testimonial, index) => (
        <div key={index} className="all-testimonials">
          <div className="all-testimonials__box">
            <span className="quotes-icon">
              <i className="fa-solid fa-quote-right"></i>
            </span>
            <p>{testimonial.quote}</p>
            <div className="all-testimonials__box__name">
              <div className="all-testimonials__box__name__profile">
                <img src={Img2} alt="user_img" />
                <span>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.country}</p>
                </span>
              </div>
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

export default Testimonials;
