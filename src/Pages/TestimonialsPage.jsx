import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
              <a href="tel:0400920512">
  <i className="fa-solid fa-phone"></i>&nbsp; +61 0400 920 512
</a>

              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
