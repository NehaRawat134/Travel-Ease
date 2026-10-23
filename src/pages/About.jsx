import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <span className="text-primary fw-semibold">
            ABOUT TRAVEL EASE
          </span>

          <h1 className="display-5 fw-bold mt-2">
            Your Journey, Our Passion
          </h1>

          <p className="text-muted mb-0">
            Making your travel experience simple, comfortable and memorable.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-6">
              <img
                src="https://i.pinimg.com/736x/3d/f7/dc/3df7dc1ebb42c6e28104aa242b536e0f.jpg"
                alt="Travel Experience"
                className="img-fluid rounded-4 shadow"
                style={{
                  height: "450px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Content */}
            <div className="col-lg-6">

              <span className="text-primary fw-semibold">
                WHO WE ARE
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-4">
                Making Travel Easy For Everyone
              </h2>

              <p className="text-muted">
                Travel Ease is a travel platform designed to help travelers
                discover beautiful destinations, exciting travel packages
                and comfortable stays.
              </p>

              <p className="text-muted">
                From planning your trip to finding the right hotel and
                exploring amazing destinations, we aim to make every step
                of your journey simple and enjoyable.
              </p>

              <div className="row mt-4">

                <div className="col-6 mb-3">
                  <h3 className="text-primary fw-bold">
                    50+
                  </h3>
                  <p className="text-muted mb-0">
                    Destinations
                  </p>
                </div>

                <div className="col-6 mb-3">
                  <h3 className="text-primary fw-bold">
                    100+
                  </h3>
                  <p className="text-muted mb-0">
                    Travel Packages
                  </p>
                </div>

                <div className="col-6">
                  <h3 className="text-primary fw-bold">
                    5000+
                  </h3>
                  <p className="text-muted mb-0">
                    Happy Travelers
                  </p>
                </div>

                <div className="col-6">
                  <h3 className="text-primary fw-bold">
                    24/7
                  </h3>
                  <p className="text-muted mb-0">
                    Customer Support
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6 order-lg-2">

              <img
                src="https://i.pinimg.com/736x/2b/7c/51/2b7c513d9d69c95903feaca6f81f6c7f.jpg"
                alt="Travel Adventure"
                className="img-fluid rounded-4 shadow"
                style={{
                  height: "400px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />

            </div>

            <div className="col-lg-6 order-lg-1">

              <span className="text-primary fw-semibold">
                OUR MISSION
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-4">
                Making Every Journey Special
              </h2>

              <p className="text-muted">
                Our mission is to make travel planning easier and more
                accessible. We want travelers to spend less time worrying
                about planning and more time enjoying their journey.
              </p>

              <div className="mt-4">

                <div className="d-flex mb-4">
                  <div className="me-3">
                    <i className="bi bi-check-circle-fill text-primary fs-3"></i>
                  </div>

                  <div>
                    <h5 className="fw-bold">
                      Easy Planning
                    </h5>

                    <p className="text-muted mb-0">
                      Plan your complete trip from one convenient platform.
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-3">
                    <i className="bi bi-check-circle-fill text-primary fs-3"></i>
                  </div>

                  <div>
                    <h5 className="fw-bold">
                      Quality Experiences
                    </h5>

                    <p className="text-muted mb-0">
                      Discover destinations and experiences for every type
                      of traveler.
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="me-3">
                    <i className="bi bi-check-circle-fill text-primary fs-3"></i>
                  </div>

                  <div>
                    <h5 className="fw-bold">
                      Traveler Support
                    </h5>

                    <p className="text-muted mb-0">
                      Get support whenever you need help during your journey.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-semibold">
              WHY TRAVEL EASE
            </span>

            <h2 className="display-6 fw-bold mt-2">
              Why Choose Us?
            </h2>

            <p className="text-muted">
              Everything you need for a smooth and memorable journey.
            </p>

          </div>

          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 text-center p-4">

                <i className="bi bi-globe2 text-primary display-5"></i>

                <h5 className="fw-bold mt-3">
                  Amazing Destinations
                </h5>

                <p className="text-muted mb-0">
                  Explore beautiful places and hidden gems around the world.
                </p>

              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 text-center p-4">

                <i className="bi bi-wallet2 text-primary display-5"></i>

                <h5 className="fw-bold mt-3">
                  Best Prices
                </h5>

                <p className="text-muted mb-0">
                  Find travel packages and stays at affordable prices.
                </p>

              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 text-center p-4">

                <i className="bi bi-shield-check text-primary display-5"></i>

                <h5 className="fw-bold mt-3">
                  Safe Booking
                </h5>

                <p className="text-muted mb-0">
                  Enjoy a simple and reliable travel booking experience.
                </p>

              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 text-center p-4">

                <i className="bi bi-headset text-primary display-5"></i>

                <h5 className="fw-bold mt-3">
                  24/7 Support
                </h5>

                <p className="text-muted mb-0">
                  Our support team is always ready to help you.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="container">

          <div className="bg-primary text-white rounded-4 p-5 text-center">

            <h2 className="display-6 fw-bold">
              Ready to Start Your Journey?
            </h2>

            <p className="lead mb-4">
              Discover amazing destinations and plan your next adventure.
            </p>

            <Link
              to="/packages"
              className="btn btn-light btn-lg rounded-pill px-5"
            >
              Explore Packages
            </Link>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;