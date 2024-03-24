import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Testimonials() {
  return (
    <>
      <section className='testimonials-section'>
        <div className='container'>
          <div className='testimonials-content'>
            <div className='testimonials-content__title'>
              <h2>Reviewed by Real People</h2>
              <p>
                Discover the positive impact we've made on our clients by
                reading their testimonials. We like to stay a little old school
                and do business face-to-face. Below is what our clients think of
                us.
              </p>
            </div>
            <div class='client-feedback'>
              <div
                class='elfsight-app-7486a9ab-c5fb-4418-9f20-adfd84024ee6'
                data-elfsight-app-lazy
              ></div>
              <div class='overlay'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
