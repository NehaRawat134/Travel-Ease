
import { useParams, Link } from "react-router-dom";
import destinations from "../data/Destinations";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => String(item.id) === String(id)
  );

  if (!destination) {
    return (
      <div className="container section-padding text-center">
        <h2>Destination not found</h2>
        <Link
          to="/destinations"
          className="btn btn-primary rounded-pill px-4"
        >
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <section className="container section-padding">
      <div className="row align-items-center g-4">
        <div className="col-md-6">
          <img
            src={destination.image}
            alt={destination.name}
            className="img-fluid rounded-4 w-100"
            style={{ maxHeight: "420px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6">
          <span className="text-primary">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {destination.country}
          </span>

          <h1 className="mt-3">{destination.name}</h1>

          <p className="lead">
            {destination.description}
          </p>

          {destination.rating && (
            <p>
              <i className="bi bi-star-fill text-warning me-2"></i>
              {destination.rating}
            </p>
          )}

          {destination.price_from && (
            <h4 className="text-primary mb-4">
              Starting from ₹{destination.price_from}
            </h4>
          )}

          <Link
            to="/booking"
            className="btn btn-primary rounded-pill px-4 me-2"
          >
            Book Now
          </Link>

          <Link
            to="/destinations"
            className="btn btn-outline-primary rounded-pill px-4"
          >
            Back
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DestinationDetails;
