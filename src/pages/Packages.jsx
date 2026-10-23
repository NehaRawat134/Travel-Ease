import PackageCard from "../Components/PackageCard";
import packages from "../data/Packages";

const Packages = () => {
  return (
    <section className="py-5">
      <div className="container">

        <h1 className="text-center mb-5">
          Our Travel Packages
        </h1>

        <div className="row g-4">
          {packages.map((item) => (
            <div
              className="col-xl-4 col-md-6"
              key={item.id}
            >
              <PackageCard packageData={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;