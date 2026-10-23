import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  if (!destination) return null;

  return (
    <div className="destination-card h-100">

      {/* Image */}
      <div className="destination-image-wrapper">

        <img
          src={destination.image}
          alt={destination.name}
          className="destination-image"
        />

        <span className="destination-badge">
          <i className="bi bi-geo-alt-fill me-1"></i>
          {destination.country}
        </span>

      </div>

      {/* Content */}
      <div className="destination-content">

        <div className="d-flex justify-content-between align-items-start">

          <div>
            <h4>{destination.name}</h4>

            {destination.country && (
              <p className="text-muted mb-2">
                <i className="bi bi-pin-map me-1"></i>
                {destination.country}
              </p>
            )}
          </div>

          {destination.rating && (
            <span className="destination-rating">
              <i className="bi bi-star-fill"></i>
              {destination.rating}
            </span>
          )}

        </div>

        <p className="destination-description">
          {destination.description}
        </p>

        <div className="d-flex justify-content-between align-items-center mt-3">

          {destination.price_from && (
            <div>
              <small className="text-muted">Starting from</small>
              <h5 className="text-primary mb-0">
                ₹{destination.price_from}
              </h5>
            </div>
          )}

          <Link
            to={`/destinations/${destination.id}`}
            className="btn btn-outline-primary rounded-pill"
          >
            Explore
            <i className="bi bi-arrow-up-right ms-2"></i>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default DestinationCard;