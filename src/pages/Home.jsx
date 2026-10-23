import Hero from "../Components/Hero";
import DestinationCard from "../Components/DestinationCard";
import TestimonialCard from "../Components/TestimonialCard";

import destinations from "../data/Destinations";
import testimonials from "../data/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="py-5">
        <div className="container">

          <h2 className="text-center mb-5">
            Popular Destinations
          </h2>

          <div className="row g-4">
            {destinations.slice(0, 3).map((destination) => (
              <div className="col-lg-4" key={destination.id}>
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-5">
        <div className="container">

          <h2 className="text-center mb-5">
            What Our Travelers Say
          </h2>

          <div className="row g-4">
            {testimonials.slice(0, 3).map((item) => (
              <div className="col-lg-4" key={item.id}>
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;