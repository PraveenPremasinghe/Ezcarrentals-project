import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import OurService from "../components/ourService";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../components/Footer";
import  LoadingProgress  from '../components/loadingProgress';

function YourComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleWhatsAppCall = () => {
    const phoneNumber = "0400920512";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Simulate loading time with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoadingProgress />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Banner />
          <BookCar />
          <PlanTrip />
          <OurService />
          <Testimonials />
          <Faq />
          <Footer />

          <div className='wh-api-bg'>
            <div onClick={handleWhatsAppCall}>
              <div className='wh-api'>
                <div className='wh-fixed whatsapp-pulse'>
                  <button className='wh-ap-btn'></button>
                </div>
              </div>
            </div>
          </div>

          <div className='scroll-up-button'>
            {isVisible && (
              <button onClick={scrollToTop}>
                <FaArrowUp />
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default YourComponent;
