import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import HeroTextImage from "../images/hero/letteringt.png";
import HeroSecondImg from "../images/hero/HeroSecondImg-ai-brush-removebg-2ien9sy.png";
import { useEffect, useState } from "react";
import "../styles/main.css";
import VehicleCard from "./VehicleCard ";
import Slider from "react-slick";

import car1 from "../images/hero/cars/car1.png";
import car2 from "../images/hero/cars/car2.png";
import { Card, CardMedia, Typography, styled, Box } from "@mui/material";

import { FaCar, FaCog, FaDoorOpen, FaDollarSign } from "react-icons/fa";

import { LuArmchair } from "react-icons/lu";
import { GiCarDoor } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

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
          slidesToShow: 3,
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
              <span> RESERVE</span>
            </button>
          </div>

          <div className="home-page-car-section">
            <Slider {...settings}>
              <div className="VehicleCard-main">
                <VehicleCard
                  imageUrl={car1}
                  vehicleName="Toyota Axio"
                  category="Economy"
                  doors="4"
                  seats="4"
                  transmission="Automatic"
                  perDayPrice="80"
                />
              </div>
              <div className="VehicleCard-main">
                <VehicleCard
                  imageUrl={car2}
                  vehicleName="Toyota Axio"
                  category="Economy"
                  doors="4"
                  seats="4"
                  transmission="Automatic"
                  perDayPrice="80"
                />
              </div>
              <div className="VehicleCard-main">
                <VehicleCard
                  imageUrl={car1}
                  vehicleName="Toyota Axio"
                  category="Economy"
                  doors="4"
                  seats="4"
                  transmission="Automatic"
                  perDayPrice="80"
                />
              </div>

              <div className="VehicleCard-main">
                <VehicleCard
                  imageUrl={car2}
                  vehicleName="Toyota Axio"
                  category="Economy"
                  doors="4"
                  seats="4"
                  transmission="Automatic"
                  perDayPrice="80"
                />
              </div>

              {/* Add more sets of VehicleCard components for additional slides */}
            </Slider>
          </div>
        </div>
      </section>

      {/* ******************* * imeplement new code here **************************** */}
    </>
  );
}

export default Hero;
