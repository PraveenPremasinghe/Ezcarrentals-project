import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/Ezcarrentals-logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };



  const handleServiceClick = () => {
    document
      .querySelector(".pick-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handelTestimonialsClick = () => {
    document
      .querySelector(".testimonials-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handelContactusClick = () => {
    document
      .querySelector(".contact-page")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>

            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
           
            <li>
              <Link className="about-link" to="#" onClick={handleServiceClick}>
                Our Service
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="testi-link"
                to="#"
                onClick={handelTestimonialsClick}
              >
                Testimonials
              </Link>
            </li>

            <li>
              {" "}
              <Link
                className="testi-link"
                to="#"
                onClick={handelContactusClick}
              >
                Contact us
              </Link>
            </li>
          </ul>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
