import React from "react";
import { Link, useParams } from "react-router-dom";
import hotels from "../data/Hotels";

const HotelDetails = () => {
  const { id } = useParams();

  const hotel = hotels.find(
    (item) => item.id === Number(id)
  );

  if (!hotel) {
    return (
      <section className="py-5">
        <div className="container text-center">
          <h2>Hotel Not Found</h2>

          <p className="text-muted">
            Sorry, the hotel you are looking for does not exist.
          </p>

          <Link
            to="/hotels"
            className="btn btn-primary rounded-pill"
          >
            Back to Hotels
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="hotel-details-page py-5">

      <div className="container">

        {/* Back Button */}
        <Link
          to="/hotels"
          className="btn btn-outline-primary rounded-pill mb-4"
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back to Hotels
        </Link>

        <div className="row g-5">

          {/* Hotel Image */}
          <div className="col-lg-7">

            <div className="hotel-details-image-wrapper">

              <img
                src={hotel.image}
                alt={hotel.name}
                className="hotel-details-image"
              />

              {hotel.featured && (
                <span className="hotel-details-featured">
                  <i className="bi bi-star-fill me-1"></i>
                  Featured Hotel
                </span>
              )}

            </div>

          </div>

          {/* Hotel Information */}
          <div className="col-lg-5">

            <span className="text-primary fw-semibold">
              {hotel.type}
            </span>

            <h1 className="hotel-details-title mt-2">
              {hotel.name}
            </h1>

            <p className="hotel-details-location">
              <i className="bi bi-geo-alt-fill me-2"></i>
              {hotel.location}
            </p>

            {/* Rating */}
            <div className="hotel-details-rating mb-4">

              <span>
                <i className="bi bi-star-fill"></i>
                {hotel.rating}
              </span>

              <small>
                {hotel.reviews} reviews
              </small>

            </div>

            {/* Description */}
            <p className="hotel-details-description">
              {hotel.description}
            </p>

            {/* Amenities */}
            <h5 className="fw-bold mt-4 mb-3">
              Hotel Amenities
            </h5>

            <div className="hotel-details-amenities">

              {hotel.amenities.map((amenity, index) => (
                <div key={index}>
                  <i className="bi bi-check-circle-fill"></i>
                  {amenity}
                </div>
              ))}

            </div>

            {/* Price */}
            <div className="hotel-details-booking">

              <div>
                <small>Starting from</small>

                <h2>
                  ₹{hotel.price.toLocaleString("en-IN")}
                  <span> / night</span>
                </h2>
              </div>

              <Link
                to="/booking"
                className="btn btn-primary rounded-pill px-4"
              >
                Book Now
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HotelDetails;