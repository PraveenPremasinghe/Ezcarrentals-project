import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import OurService from "../components/ourService";
import Banner from "../components/Banner";

import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
 
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <OurService />
      <Banner />
   
      <Testimonials />
      <Faq />
 
      <Footer />
    </>
  );
}

export default Home;
