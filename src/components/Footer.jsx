import { FaPhoneVolume ,FaEnvelopeOpenText,FaLocationArrow,FaHeadphonesAlt     } from 'react-icons/fa';

function Footer() {
  const emailAddress = 'ezcarrentalsmelbourne@gmail.com';
  const phoneNumber = '+610400920512';

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Ezcarrentals </span> 
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
              <a href={`tel:${phoneNumber}`}>
  <FaPhoneVolume  />&nbsp;{phoneNumber}
</a>
              </li>

              <li>
              <a href={`mailto:${emailAddress}`}>
<FaEnvelopeOpenText /> &nbsp;
      {emailAddress}
    </a>
              </li>

             
            </ul>

           

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>

     
      </footer>
      <div className="footer-bottom">
        Designed and Developed by Zero I N D E X &copy; 2024 All Rights Reserved
          </div>
    </>
  );
}

export default Footer;
