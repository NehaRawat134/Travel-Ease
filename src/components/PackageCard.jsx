import React from "react";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  if (!packageData) return null;

  return (
    <div className="package-card h-100">

      {/* Image */}
      <div className="package-image-wrapper">

        <img
          src={packageData.image}
          alt={packageData.title}
          className="package-image"
        />

        {packageData.featured && (
          <span className="package-featured">
            <i className="bi bi-star-fill me-1"></i>
            Featured
          </span>
        )}

        {packageData.duration && (
          <span className="package-duration">
            <i className="bi bi-clock me-1"></i>
            {packageData.duration}
          </span>
        )}

      </div>

      {/* Content */}
      <div className="package-content">

        <span className="package-type">
          {packageData.package_type || "Travel Package"}
        </span>

        <h4 className="mt-2">
          {packageData.title}
        </h4>

        <p className="text-muted">
          {packageData.description}
        </p>

        <div className="package-footer">

          <div>
            <small className="text-muted">
              Starting from
            </small>

            <h4 className="text-primary mb-0">
              ₹{packageData.price}
            </h4>
          </div>

          <Link
            to={`/packages/${packageData.id}`}
            className="btn btn-primary rounded-pill"
          >
            View Details
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default PackageCard;