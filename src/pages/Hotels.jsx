import React from "react";
import HotelCard from "../Components/HotelCard";
import hotels from "../data/Hotels";

const Hotels = () => {
  return (
    <section className="py-5 hotels-page">

      <div className="container">

        {/* Page Heading */}
        <div className="text-center mb-5">

          <span className="text-primary fw-semibold">
            FIND YOUR PERFECT STAY
          </span>

          <h1 className="fw-bold mt-2">
            Find Your Perfect Stay
          </h1>

          <p className="text-muted mx-auto mt-3" style={{ maxWidth: "650px" }}>
            Discover comfortable hotels, luxury resorts and beautiful
            stays in some of the world's most amazing destinations.
          </p>

        </div>

        {/* Hotels */}
        <div className="row g-4">

          {hotels.map((hotel) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              key={hotel.id}
            >
              <HotelCard hotel={hotel} />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Hotels;