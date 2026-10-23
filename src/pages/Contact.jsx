import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(135deg, #0d6efd, #084298)",
        }}
      >
        <div className="container py-4">
          <div className="row align-items-center">

            <div className="col-lg-8">

              <span className="badge bg-white text-primary px-3 py-2 mb-3">
                WE ARE HERE TO HELP
              </span>

              <h1 className="display-4 fw-bold">
                Let's Talk About
                <br />
                Your Next Journey
              </h1>

              <p className="lead mt-3 mb-0">
                Have a question about a destination, hotel or travel
                package? Our team would love to hear from you.
              </p>

            </div>

            <div className="col-lg-4 text-center mt-4 mt-lg-0">

              <i
                className="bi bi-chat-heart"
                style={{ fontSize: "120px" }}
              ></i>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-5">
        <div className="container">

          <div className="row g-4">

            {/* Email */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                    <i className="bi bi-envelope-fill text-primary fs-4"></i>
                  </div>

                  <h5 className="fw-bold mb-0 ms-3">
                    Email Us
                  </h5>
                </div>

                <p className="text-muted mb-1">
                  General enquiries
                </p>

                <a
                  href="mailto:hello@travelease.com"
                  className="text-decoration-none"
                >
                  hello@travelease.com
                </a>

              </div>
            </div>

            {/* Phone */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                    <i className="bi bi-telephone-fill text-primary fs-4"></i>
                  </div>

                  <h5 className="fw-bold mb-0 ms-3">
                    Call Us
                  </h5>
                </div>

                <p className="text-muted mb-1">
                  Mon - Sat, 9 AM - 7 PM
                </p>

                <a
                  href="tel:+911234567890"
                  className="text-decoration-none"
                >
                  +91 12345 67890
                </a>

              </div>
            </div>

            {/* Location */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                    <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
                  </div>

                  <h5 className="fw-bold mb-0 ms-3">
                    Visit Us
                  </h5>
                </div>

                <p className="text-muted mb-1">
                  Travel Ease Office
                </p>

                <span>
                  New Delhi, India
                </span>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM + HELP ================= */}
      <section className="bg-light py-5">
        <div className="container">

          <div className="row g-5">

            {/* FORM */}
            <div className="col-lg-7">

              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4 p-md-5">

                  <span className="text-primary fw-semibold">
                    SEND US A MESSAGE
                  </span>

                  <h2 className="fw-bold mt-2 mb-4">
                    How Can We Help?
                  </h2>

                  {submitted && (
                    <div
                      className="alert alert-success d-flex align-items-center"
                      role="alert"
                    >
                      <i className="bi bi-check-circle-fill me-2"></i>

                      <div>
                        <strong>Message sent successfully!</strong>
                        <br />
                        Our travel team will contact you soon.
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="row">

                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>

                    </div>

                    {/* Subject */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        What can we help with?
                      </label>

                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-select form-select-lg"
                        required
                      >
                        <option value="">
                          Select an option
                        </option>

                        <option value="package">
                          Travel Package
                        </option>

                        <option value="hotel">
                          Hotel Booking
                        </option>

                        <option value="destination">
                          Destination Information
                        </option>

                        <option value="booking">
                          Existing Booking
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Your Message
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        rows="5"
                        placeholder="Tell us how we can help..."
                        required
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-pill px-5"
                    >
                      Send Message
                      <i className="bi bi-send-fill ms-2"></i>
                    </button>

                  </form>

                </div>
              </div>

            </div>

            {/* HELP SIDE */}
            <div className="col-lg-5">

              <div className="mb-4">

                <span className="text-primary fw-semibold">
                  QUICK SUPPORT
                </span>

                <h2 className="fw-bold mt-2">
                  Need Help With Your Trip?
                </h2>

                <p className="text-muted">
                  Whether you are planning a new adventure or need
                  assistance with an existing booking, we are ready
                  to help.
                </p>

              </div>

              {/* Support Cards */}
              <div className="card border-0 shadow-sm mb-3">
                <div className="card-body p-4">

                  <div className="d-flex">

                    <i className="bi bi-calendar-check text-primary fs-2 me-3"></i>

                    <div>
                      <h5 className="fw-bold">
                        Booking Assistance
                      </h5>

                      <p className="text-muted mb-0">
                        Need help selecting a package or hotel?
                        Talk to our travel team.
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              <div className="card border-0 shadow-sm mb-3">
                <div className="card-body p-4">

                  <div className="d-flex">

                    <i className="bi bi-question-circle text-primary fs-2 me-3"></i>

                    <div>
                      <h5 className="fw-bold">
                        Travel Questions
                      </h5>

                      <p className="text-muted mb-0">
                        Ask us about destinations, packages,
                        hotels and travel plans.
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                  <div className="d-flex">

                    <i className="bi bi-headset text-primary fs-2 me-3"></i>

                    <div>
                      <h5 className="fw-bold">
                        Customer Support
                      </h5>

                      <p className="text-muted mb-0">
                        Our support team is available to assist
                        you with your travel needs.
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-semibold">
              FAQ
            </span>

            <h2 className="fw-bold mt-2">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <div className="accordion" id="contactFAQ">

                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOne"
                    >
                      How can I book a travel package?
                    </button>
                  </h2>

                  <div
                    id="faqOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#contactFAQ"
                  >
                    <div className="accordion-body text-muted">
                      Select a package from our Packages page,
                      view the details and click the Book Now button.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqTwo"
                    >
                      Can I get help choosing a destination?
                    </button>
                  </h2>

                  <div
                    id="faqTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#contactFAQ"
                  >
                    <div className="accordion-body text-muted">
                      Yes. Send us a message with your preferences
                      and our team can help you explore suitable options.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqThree"
                    >
                      How can I contact Travel Ease?
                    </button>
                  </h2>

                  <div
                    id="faqThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#contactFAQ"
                  >
                    <div className="accordion-body text-muted">
                      You can contact us through email, phone or
                      the contact form available on this page.
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SOCIAL CTA ================= */}
      <section className="py-5 bg-light">
        <div className="container text-center">

          <h3 className="fw-bold">
            Follow Our Travel Stories
          </h3>

          <p className="text-muted">
            Get travel inspiration and discover new destinations.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">

            <a
              href="#"
              className="btn btn-outline-primary rounded-circle"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="#"
              className="btn btn-outline-primary rounded-circle"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="#"
              className="btn btn-outline-primary rounded-circle"
            >
              <i className="bi bi-twitter-x"></i>
            </a>

            <a
              href="#"
              className="btn btn-outline-primary rounded-circle"
            >
              <i className="bi bi-youtube"></i>
            </a>

          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;