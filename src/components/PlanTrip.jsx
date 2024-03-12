import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className='plan-section'>
        <div className='container'>
          <div className='plan-container'>
            <div className='plan-container__title'>
              <h3>Plan your trip now</h3>
              <h2>
                QUICK & <span class='red-text'>EZ</span> TO RENT
              </h2>
            </div>

            <div className='plan-container__boxes'>
              <div className='plan-container__boxes__box'>
                <img src={SelectCar} alt='icon_img' />
                <h3>Select Car</h3>
                <p>
                  We offer a wide range of vehicles to suit all your driving
                  needs. From compact cars to moving vans and utes. We are your
                  one stop local shop for all your rental needs.
                </p>
              </div>

              <div className='plan-container__boxes__box'>
                <img src={Contact} alt='icon_img' />
                <h3>Call us or send us your enquiry</h3>
                <p>
                  Our friendly staff are always ready to answer your enquiries
                  and get you on the road. We will set you an appointment to
                  come down to collect the car.
                </p>
              </div>

              <div className='plan-container__boxes__box'>
                <img src={Drive} alt='icon_img' />
                <h3>Let's Drive</h3>
                <p>
                  Pick up and drop off your car at our Chadstone base. We offer
                  free drop off to Jordanville train station (if available).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
