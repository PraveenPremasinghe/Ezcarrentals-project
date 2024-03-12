import { FaEnvelopeOpenText, FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/logo/Ezcarrentals-logo.png";

function Footer() {
  const emailAddress = "ezcarrentalsmelbourne@gmail.com";
  const phoneNumber = "0400 920 512";

  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='footer-content'>
            <ul className='footer-content__1'>
              <li>
                <div className='navbar__img'>
                  <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                    <img
                      src={Logo}
                      alt='logo-img'
                      style={{
                        width: "200px",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </Link>
                </div>
              </li>

              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href={`tel:${phoneNumber}`}>
                  <FaPhoneVolume />
                  &nbsp;{phoneNumber}
                </a>
              </li>

              <li>
                <a href={`mailto:${emailAddress}`}>
                  <FaEnvelopeOpenText /> &nbsp;
                  {emailAddress}
                </a>
              </li>
            </ul>

            <ul className='footer-content__2'>
              <li>Working Hours</li>
              <li>
                We work only on appointment basis. But we can be reached out
              </li>
              <li>Mon - Fri: 8:00AM - 8:00PM</li>
              <li>Sat: 8:00AM - 8:00PM</li>
              <li>Sun: 8:00AM - 8:00PM</li>
            </ul>

            <ul className='footer-content__2'>
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type='email' placeholder='Enter Email Address'></input>
              </li>
              <li>
                <button className='submit-email'>Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className='footer-bottom'>
        Designed and Developed by{" "}
        <a href='https://praveenpremasinghe-me.netlify.app/'>
          {" "}
          Zero I N D E X{" "}
        </a>{" "}
        &copy; 2024 All Rights Reserved
      </div>
    </>
  );
}

export default Footer;
