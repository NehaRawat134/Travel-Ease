import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  if (!hotel) return null;

  return (
    <div className="hotel-card h-100">

      {/* Image */}
      <div className="hotel-image-wrapper">

        <img
          src={hotel.image}
          alt={hotel.name}
          className="hotel-image"
        />

        {/* Hotel Type */}
        <span className="hotel-type">
          {hotel.type}
        </span>

        {/* Featured */}
        {hotel.featured && (
          <span className="hotel-featured">
            <i className="bi bi-star-fill me-1"></i>
            Featured
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          className="hotel-wishlist"
          aria-label={`Add ${hotel.name} to wishlist`}
        >
          <i className="bi bi-heart"></i>
        </button>

      </div>

      {/* Content */}
      <div className="hotel-content">

        {/* Name + Rating */}
        <div className="hotel-heading">

          <div>
            <h4>{hotel.name}</h4>

            <p className="hotel-location">
              <i className="bi bi-geo-alt-fill me-1"></i>
              {hotel.location}
            </p>
          </div>

          <div className="hotel-rating">
            <i className="bi bi-star-fill"></i>
            <span>{hotel.rating}</span>
          </div>

        </div>

        {/* Reviews */}
        <p className="hotel-reviews">
          {hotel.reviews} reviews
        </p>

        {/* Description */}
        <p className="hotel-description">
          {hotel.description}
        </p>

        {/* Amenities */}
        {hotel.amenities?.length > 0 && (
          <div className="hotel-amenities">

            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <span key={index}>
                <i className="bi bi-check-circle-fill me-1"></i>
                {amenity}
              </span>
            ))}

          </div>
        )}

        {/* Footer */}
        <div className="hotel-footer">

          <div className="hotel-price">

            <small>Starting from</small>

            <h4>
              ₹{hotel.price.toLocaleString("en-IN")}
              <span> / night</span>
            </h4>

          </div>

          <Link
            to={`/hotels/${hotel.id}`}
            className="btn btn-primary rounded-pill px-3"
          >
            View Hotel
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default HotelCard;