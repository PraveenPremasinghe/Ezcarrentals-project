import { useEffect, useState } from "react";
import Slider from "react-slick";
import HeroTextImage from "../images/hero/letteringt.png";
import "../styles/main.css";
import VehicleCard from "./VehicleCard ";


import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
    slidesToShow: 4,
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
    console.log(vehiclesData);
  };

  return (
    <>
      {/* ******************* * imeplement new code here **************************** */}
      <section className="hero-section-bg">
        <div className="container ">
          <div className="hero-text">
            <h1>
              Planning Your Next Journey With{" "}
              <img
                src={HeroTextImage}
                className="hero-text-img"
                alt="car-img"
              ></img>
            </h1>

            <h2>EZ Car Rentals</h2>
            <p>
              Compare prices from the best car rental companies in the world
            </p>
          </div>

          <div className="reserve-now">
            <button onClick={bookBtn} class="reserve-now-btn">
              <span> Request a Quote</span>
            </button>
          </div>

          <div className="home-page-car-section">
            <Slider {...settings}>
              {vehicleDetailsData.map((vehicle, index) => (
                <div key={index} className="VehicleCard-main"  onClick={bookBtn}>
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
        </div>
      </section>

      {/* ******************* * imeplement new code here **************************** */}
    </>
  );
}

export default Hero;
