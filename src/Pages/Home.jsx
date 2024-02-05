import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import OurService from "../components/ourService";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
 
import Footer from "../components/Footer";

function Home() {




  const handleWhatsAppCall = () => {
    const phoneNumber = "0400920512";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };
  
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


      <div>
      <button onClick={handleWhatsAppCall}>
      <div class="wh-api">
	<div class="wh-fixed whatsapp-pulse">
		 
			<button class="wh-ap-btn"></button>
		 
	</div>
</div>
      </button>
      
    </div>
    
    </>
  );
}

export default Home;
