import { useEffect, useState } from "react";
import Slider from "react-slick";
import HeroTextImage from "../images/hero/letteringt.png";
import "../styles/main.css";
import VehicleCard from "./VehicleCard ";

import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  const storage = getStorage();
  const firestore = getFirestore();

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    

    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetchVehicleDetails();
  }, []);

  //vehicleDetails
  const [vehicleDetailsData, setVehicleDetailsData] = useState([]);

  const fetchVehicleDetails = async () => {
    const vehiclesCollection = collection(firestore, "vehicles");
    const vehiclesSnapshot = await getDocs(vehiclesCollection);
    const vehiclesData = vehiclesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setVehicleDetailsData(vehiclesData);
  };

 
 
  
  

  return (
    <>
      {/* ******************* * imeplement new code here **************************** */}
      <section className='hero-section-bg-2'>
  <div className='container'>
    <div className='hero-text-2'>
      <h1>
        Plan Your Journey With Us Today
      </h1>
      <div>
        <div className='category-main-2'>
          <div className='category-2'>CARS</div>
          <div className='category-2'>UTES</div>
          <div className='category-2'>VANS</div>
        </div>
      </div>
    </div>

    <div className='reserve-now-2'>
      <button onClick={bookBtn} className='reserve-now-btn'>
        <span> Request Quote </span>
      </button>
    </div>
  </div>

  <div className='VehicleCard-slider-2'>
    <Slider
      sx={{
        width: "100%",
        m: 10,
        display: "flex",
        justifyContent: "center",
      }}
      {...settings}
    
    >
      {vehicleDetailsData.map((vehicle, index) => (
        <div key={index}>
          <VehicleCard
            imageUrl={vehicle.imageUrl}
            vehicleName={vehicle.vehicleName}
            category={vehicle.category}
            doors={vehicle.doors}
            seats={vehicle.seats}
            transmission={vehicle.transmission}
            perDayPrice={vehicle.perDayPrice}
          />
        </div>
      ))}
    </Slider>
  </div>
</section>


      {/* ******************* * imeplement new code here **************************** */}
    </>
  );
}

export default Hero;
