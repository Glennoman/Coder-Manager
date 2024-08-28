import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      text: "This guy is an amazing frontend developer that delivered the task exactly how we need it...",
    },
    // Add more testimonials if needed
  ];

  const handlePrev = () => {
    setActiveTestimonial(
      (activeTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveTestimonial((activeTestimonial + 1) % testimonials.length);
  };

  return (
    <section>
      <div id="testimonials">
        <h1>Testimonials</h1>
        <div id="testimonial-content" className="testimonial-content">
          <div className="testimonial active">
            <p>{testimonials[activeTestimonial].text}</p>
          </div>
        </div>
        <button id="prev" onClick={handlePrev}>
          Previous
        </button>
        <button id="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
