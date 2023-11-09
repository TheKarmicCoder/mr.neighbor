import testimonialsData from "../data/testimonialsData";
import "../css/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>{testimonial.text}</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
