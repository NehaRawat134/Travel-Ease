import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="travel-footer">

      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="container">

          <div className="row align-items-center g-4">

            <div className="col-lg-6">
              <span className="footer-label">
                STAY CONNECTED
              </span>

              <h2>
                Get travel inspiration in your inbox
              </h2>

              <p>
                Subscribe to receive travel tips, destination ideas
                and exclusive offers.
              </p>
            </div>

            <div className="col-lg-6">

              <form className="newsletter-form">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                />

                <button type="submit">
                  Subscribe
                  <i className="bi bi-send ms-2"></i>
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="container">

        <div className="row gy-5">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">

            <Link to="/" className="footer-logo">
              <span>Travel</span>Ease
            </Link>

            <p className="footer-about">
              TravelEase helps you discover amazing destinations,
              comfortable stays and memorable experiences around
              the world.
            </p>

            {/* Social */}
            <div className="footer-social">

              <a href="#!" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#!" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#!" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#!" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/destinations">Destinations</Link>
              </li>

              <li>
                <Link to="/packages">Packages</Link>
              </li>

              <li>
                <Link to="/hotels">Hotels</Link>
              </li>

            </ul>

          </div>

          {/* Explore */}
          <div className="col-lg-2 col-md-6">

            <h5>Explore</h5>

            <ul className="footer-links">

              <li>
                <Link to="/gallery">Gallery</Link>
              </li>

              <li>
                <Link to="/booking">Book a Trip</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <a href="#!">Travel Guide</a>
              </li>

              <li>
                <a href="#!">FAQs</a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">

            <h5>Contact Us</h5>

            <div className="footer-contact">

              <p>
                <i className="bi bi-geo-alt-fill"></i>
                New Delhi, India
              </p>

              <p>
                <i className="bi bi-envelope-fill"></i>
                hello@travelease.com
              </p>

              <p>
                <i className="bi bi-telephone-fill"></i>
                +91 98765 43210
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} TravelEase. All rights reserved.
          </p>

          <div>
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms & Conditions</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;