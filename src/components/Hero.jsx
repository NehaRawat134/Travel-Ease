import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">

      <div className="hero-overlay"></div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-75">

          <div className="col-lg-7">

            <span className="hero-badge">
              <i className="bi bi-airplane-fill me-2"></i>
              YOUR JOURNEY STARTS HERE
            </span>

            <h1 className="hero-title mt-4">
              Explore the World,
              <span>Live the Journey.</span>
            </h1>

            <p className="hero-description mt-4">
              Discover beautiful destinations, unforgettable experiences
              and carefully planned travel packages designed to make
              every journey special.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">

              <Link
                to="/destinations"
                className="btn btn-primary btn-lg rounded-pill px-4"
              >
                Explore Destinations
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

              <Link
                to="/packages"
                className="btn btn-outline-light btn-lg rounded-pill px-4"
              >
                View Packages
              </Link>

            </div>

            {/* Hero Stats */}
            <div className="hero-stats mt-5">

              <div>
                <h4>50+</h4>
                <span>Destinations</span>
              </div>

              <div>
                <h4>100+</h4>
                <span>Travel Packages</span>
              </div>

              <div>
                <h4>10K+</h4>
                <span>Happy Travelers</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <i className="bi bi-chevron-down"></i>
      </div>

    </section>
  );
};

export default Hero;