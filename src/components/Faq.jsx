import { useState } from "react";
import {
  FaEnvelopeOpenText,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  const emailAddress = "ezcarrentalsmelbourne@gmail.com";
  const phoneNumber = "0400920512";

  const handleWhatsAppCall = () => {
    const phoneNumber = "0400920512";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section className='faq-section'>
        <div className='container'>
          <div className='faq-content'>
            <div className='faq-content__title'>
              <h5>FAQ</h5>
              <h2>Frequently asked questions when renting with us</h2>
            </div>

            <div className='all-questions'>
              <div className='faq-box'>
                <div
                  id='q1'
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. How can I book a car?</p>
                  <i className='fa-solid fa-angle-down'></i>
                </div>
                <div
                  id='q1'
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Once you send us your enquiry, our friendly staff will get
                  back to you with availability and choice of cars. To confirm
                  your booking you will need to settle a{" "}
                  <b> minimum $50 (non-refundable) </b>deposit. This guarantees
                  your car for the day. Payments can be made via bank transfer,
                  PAYID, credit/debit card or cash.
                </div>
              </div>
              <div className='faq-box'>
                <div
                  id='q2'
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. What's with the $50 payment?</p>
                  <i className='fa-solid fa-angle-down'></i>
                </div>
                <div
                  id='q2'
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  We charge this as a non-refundable payment which gets credited
                  on to your final bill on pick up. This is charged as once a
                  booking is confirmed we hold the car for you and may cancel
                  other bookings to hold the car for you.
                </div>
              </div>

              <div className='faq-box'>
                <div
                  id='q3'
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. What happens during a break down?</p>
                  <i className='fa-solid fa-angle-down'></i>
                </div>
                <div
                  id='q3'
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  You can simply call us and we will take care of the rest. Our
                  towing policy in case a vehicle needs towing covers 40km free
                  of charge. Any additional km will be charged on to you.
                </div>
              </div>

              <div className='faq-box'>
                <div
                  id='q4'
                  onClick={() => openQ("q4")}
                  className={`faq-box__question ${getClassQuestion("q4")}`}
                >
                  <p>4. Can we travel interstate?</p>
                  <i className='fa-solid fa-angle-down'></i>
                </div>
                <div
                  id='q4'
                  onClick={() => openQ("q4")}
                  className={`faq-box__answer ${getClassAnswer("q4")}`}
                >
                  Sorry, we are a small rental business, so we don't allow
                  interstate travel.
                </div>
              </div>

              <div className='faq-box'>
                <div
                  id='q5'
                  onClick={() => openQ("q5")}
                  className={`faq-box__question ${getClassQuestion("q5")}`}
                >
                  <p>5. Can I negotiate prices?</p>
                  <i className='fa-solid fa-angle-down'></i>
                </div>
                <div
                  id='q5'
                  onClick={() => openQ("q5")}
                  className={`faq-box__answer ${getClassAnswer("q5")}`}
                >
                  Of course, you can. We pride ourselves on offering the best
                  rates in our first go. If you wish to rent long-term, we can
                  offer better rates.
                </div>
              </div>

              <div className='faq-box'>
                <div
                  id='q6'
                  onClick={() => openQ("q6")}
                  className={`faq-box__question ${getClassQuestion("q6")}`}
                >
                  <p>6. Do you rent out long term?</p>
                  <i className='fa-solid fa-angle-down'></i>
                </div>
                <div
                  id='q6'
                  onClick={() => openQ("q6")}
                  className={`faq-box__answer ${getClassAnswer("q6")}`}
                >
                  Yes, we do both long-term and short-term rentals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact-page'>
        <div className='container'>
          <div className=' '>
            <div className='contact-div__text'>
              <h2>Need additional information?</h2>
              <p>
                Feel free to call us. If we don't answer leave us a text and we
                will get back to you as soon as possible.
              </p>
              <a href={`tel:${phoneNumber}`}>
                <FaPhoneAlt />
                &nbsp; {phoneNumber}
              </a>

              <a href={`mailto:${emailAddress}`}>
                <FaEnvelopeOpenText /> &nbsp;
                {emailAddress}
              </a>
              <a href='/'>
                <FaLocationArrow /> &nbsp;30 Jindabyne Avenue, Chadstone VIC
                3148
              </a>

              {/* ****************** add social media************************ */}
              <div className='social-card '>
                <a
                  href='https://www.instagram.com/ezcarvanrentals/'
                  className='socialContainer containerOne'
                >
                  <svg className='socialSvg instagramSvg' viewBox='0 0 16 16'>
                    {" "}
                    <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />{" "}
                  </svg>
                </a>

                <a
                  href='#'
                  className='socialContainer containerFour'
                  onClick={handleWhatsAppCall}
                >
                  <svg className='socialSvg whatsappSvg' viewBox='0 0 16 16'>
                    {" "}
                    <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z' />{" "}
                  </svg>
                </a>
                <a
                  href='https://www.facebook.com/EZCarRentalsMelbourne?mibextid=opq0tG'
                  className='socialContainer containerFour'
                >
                  <svg className='socialSvg facebookSvg' viewBox='0 0 16 16'>
                    <path
                      fillRule='evenodd'
                      d='M9.628 1.99H7.247c-2.377 0-4.33 1.953-4.33 4.33v2.38H1.99v2.971h1.927v6.393h3.064V9.682h2.038l.284-2.971H6.92V5.572c0-1.128.106-1.751 1.738-1.751H9.63V1.99z'
                    />
                  </svg>
                </a>
              </div>

              {/* ****************** add social media************************ */}
            </div>

            <div className='contact-div__form'>
              <iframe
                title='Google Map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.3377352649622!2d145.10061171232203!3d-37.87578367184331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad615a21604a335%3A0xde8f69d98bc937ea!2sEZ%20Car%20Rentals%20-%20Van%20Ute%20and%20Car%20Hire!5e0!3m2!1sen!2slk!4v1707201190933!5m2!1sen!2slk'
                width='100%'
                height='450'
                style={{ border: 0, marginTop: "20px", marginBottom: "20px" }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
        <div className='book-banner'>
          <div className='book-banner__overlay'></div>
          <div className='container'>
            <div className='text-content'>
              <h2>Book a car by getting in touch with us </h2>
              <span>
                {/* <a href={`tel:${phoneNumber}`}>
  <FaHeadphonesAlt    />&nbsp; {phoneNumber}
</a> */}

                <button className='call-new-btn'>
                  <FaPhoneAlt className='phone-icon' />
                  {phoneNumber}
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
