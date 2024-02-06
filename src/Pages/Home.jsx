import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import OurService from "../components/ourService";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Footer from "../components/Footer";

function Home() {

  const [isVisible, setIsVisible] = useState(false);


  const handleWhatsAppCall = () => {
    const phoneNumber = "0400920512";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  
  return (
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


      <div className="wh-api-bg">
      <div onClick={handleWhatsAppCall}>
      <div className="wh-api">
	<div className="wh-fixed whatsapp-pulse">
		 
			<button className="wh-ap-btn"></button>
		 
	</div>
</div>
      </div>
      
    </div>

    <div className="scroll-up-button">
      {isVisible && (
        <button onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
    
    </>
  );
}

export default Home;
