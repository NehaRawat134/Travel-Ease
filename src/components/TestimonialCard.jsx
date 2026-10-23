import React from "react";

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  const rating = testimonial.rating || 5;

  return (
    <div className="testimonial-card h-100">

      {/* Quote */}
      <div className="testimonial-quote">
        <i className="bi bi-quote"></i>
      </div>

      {/* Rating */}
      <div className="testimonial-rating mb-3">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={
              index < rating
                ? "bi bi-star-fill"
                : "bi bi-star"
            }
          ></i>
        ))}
      </div>

      {/* Review */}
      <p className="testimonial-text">
        "{testimonial.message || testimonial.text}"
      </p>

      {/* User */}
      <div className="testimonial-user">

        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-avatar"
          />
        ) : (
          <div className="testimonial-avatar testimonial-placeholder">
            {testimonial.name?.charAt(0)}
          </div>
        )}

        <div>
          <h6>{testimonial.name}</h6>

          <small>
            {testimonial.location || "Verified Traveler"}
          </small>
        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;