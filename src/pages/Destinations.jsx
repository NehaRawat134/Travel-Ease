import DestinationCard from "../Components/DestinationCard";
import destinations from "../data/Destinations";

const Destinations = () => {
  return (
    <section className="py-5">
      <div className="container">

        <h1 className="text-center mb-5">
          Explore Destinations
        </h1>

        <div className="row g-4">
          {destinations.map((destination) => (
            <div
              className="col-xl-4 col-md-6"
              key={destination.id}
            >
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;