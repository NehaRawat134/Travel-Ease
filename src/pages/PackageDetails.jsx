import React from "react";
import { Link, useParams } from "react-router-dom";
import packages from "../data/Packages";

const PackageDetails = () => {
  const { id } = useParams();

  const pkg = packages.find(
    (item) => item.id === Number(id)
  );

  if (!pkg) {
    return (
      <div className="container py-5 text-center">
        <h2>Package Not Found</h2>

        <p className="text-muted">
          The package you are looking for does not exist.
        </p>

        <Link
          to="/packages"
          className="btn btn-primary"
        >
          Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-light py-4">
        <div className="container">
          <Link
            to="/packages"
            className="text-decoration-none"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to Packages
          </Link>
        </div>
      </section>

      {/* Details */}
      <section className="py-5">
        <div className="container">

          <div className="row g-5">

            {/* Image */}
            <div className="col-lg-6">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="img-fluid rounded-4 shadow-sm w-100"
                style={{
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Content */}
            <div className="col-lg-6">

              <span className="text-primary fw-semibold">
                <i className="bi bi-geo-alt-fill me-1"></i>
                {pkg.location}
              </span>

              <h1 className="display-5 fw-bold mt-2">
                {pkg.title}
              </h1>

              <p className="text-muted lead">
                {pkg.description}
              </p>

              <div className="d-flex gap-4 mb-4">

                <div>
                  <i className="bi bi-clock text-primary me-2"></i>
                  <strong>{pkg.duration}</strong>
                </div>

              </div>

              <h3 className="fw-bold mb-3">
                What's Included?
              </h3>

              <div className="row g-3 mb-4">

                {pkg.features.map((feature, index) => (
                  <div
                    className="col-md-6"
                    key={index}
                  >
                    <div className="p-3 bg-light rounded-3">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      {feature}
                    </div>
                  </div>
                ))}

              </div>

              <div className="border-top pt-4">

                <small className="text-muted">
                  Package Price
                </small>

                <h2 className="text-primary fw-bold">
                  ₹{pkg.price.toLocaleString("en-IN")}
                </h2>

                <Link
                  to="/booking"
                  className="btn btn-primary btn-lg rounded-pill px-5"
                >
                  Book Now
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default PackageDetails;