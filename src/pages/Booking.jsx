import React, { useState } from "react";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <span className="text-primary fw-semibold">
            BOOK YOUR TRIP
          </span>

          <h1 className="display-5 fw-bold mt-2">
            Plan Your Next Adventure
          </h1>

          <p className="text-muted">
            Fill in the details below and start your journey with Travel Ease.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-8">

              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4 p-md-5">

                  {submitted ? (
                    <div className="text-center py-5">

                      <div className="mb-4">
                        <i className="bi bi-check-circle-fill text-success display-1"></i>
                      </div>

                      <h2 className="fw-bold">
                        Booking Request Submitted!
                      </h2>

                      <p className="text-muted">
                        Thank you for choosing Travel Ease.
                        Our team will contact you soon.
                      </p>

                      <button
                        className="btn btn-primary rounded-pill px-4"
                        onClick={() => setSubmitted(false)}
                      >
                        Book Another Trip
                      </button>

                    </div>
                  ) : (
                    <>
                      <h3 className="fw-bold mb-4">
                        Book Your Trip
                      </h3>

                      <form onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            Full Name
                          </label>

                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        {/* Email & Phone */}
                        <div className="row">

                          <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                              Email Address
                            </label>

                            <input
                              type="email"
                              className="form-control form-control-lg"
                              placeholder="Enter your email"
                              required
                            />
                          </div>

                          <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                              Phone Number
                            </label>

                            <input
                              type="tel"
                              className="form-control form-control-lg"
                              placeholder="Enter phone number"
                              required
                            />
                          </div>

                        </div>

                        {/* Destination */}
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            Destination
                          </label>

                          <select
                            className="form-select form-select-lg"
                            required
                          >
                            <option value="">
                              Select Destination
                            </option>
                            <option>Goa</option>
                            <option>Manali</option>
                            <option>Dubai</option>
                            <option>Paris</option>
                            <option>Kerala</option>
                            <option>Bali</option>
                          </select>
                        </div>

                        {/* Date & Travelers */}
                        <div className="row">

                          <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                              Travel Date
                            </label>

                            <input
                              type="date"
                              className="form-control form-control-lg"
                              required
                            />
                          </div>

                          <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                              Number of Travelers
                            </label>

                            <select
                              className="form-select form-select-lg"
                              required
                            >
                              <option value="">
                                Select Travelers
                              </option>
                              <option>1 Traveler</option>
                              <option>2 Travelers</option>
                              <option>3 Travelers</option>
                              <option>4 Travelers</option>
                              <option>5+ Travelers</option>
                            </select>
                          </div>

                        </div>

                        {/* Message */}
                        <div className="mb-4">
                          <label className="form-label fw-semibold">
                            Special Requests
                          </label>

                          <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Any special requirements?"
                          ></textarea>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg w-100 rounded-pill"
                        >
                          <i className="bi bi-calendar-check me-2"></i>
                          Book Trip
                        </button>

                      </form>
                    </>
                  )}

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;