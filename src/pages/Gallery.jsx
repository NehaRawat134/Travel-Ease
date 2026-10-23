import React, { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Goa Beach",
    category: "Beach",
    image:
      "https://i.pinimg.com/736x/b7/b5/d2/b7b5d223367a516696d17d3496d5a85b.jpg",
  },
  {
    id: 2,
    title: "Manali Mountains",
    category: "Mountains",
    image:
      "https://i.pinimg.com/1200x/d1/12/de/d112defb86a57dae787bfddd6223b424.jpg",
  },
  {
    id: 3,
    title: "Dubai Skyline",
    category: "City",
    image:
      "https://i.pinimg.com/1200x/e6/45/57/e64557dc736a16818349b81e895a8828.jpg",
  },
  {
    id: 4,
    title: "Paris",
    category: "City",
    image:
      "https://i.pinimg.com/736x/67/e8/78/67e878125da85412457d227a455d4789.jpg",
  },
  {
    id: 5,
    title: "Kerala Backwaters",
    category: "Nature",
    image:
      "https://i.pinimg.com/736x/6c/fd/dd/6cfdddf755f67cdc9a475a9a2c941613.jpg",
  },
  {
    id: 6,
    title: "Bali Beach",
    category: "Beach",
    image:
      "https://i.pinimg.com/1200x/4b/35/a8/4b35a865a116fc815f2995f5429ed8b5.jpg",
  },
  {
    id: 7,
    title: "Swiss Mountains",
    category: "Mountains",
    image:
      "https://i.pinimg.com/736x/72/b1/46/72b146e98671cddaf4e6b89575499ccb.jpg",
  },
  {
    id: 8,
    title: "Tropical Nature",
    category: "Nature",
    image:
      "https://i.pinimg.com/736x/1f/10/00/1f100091bb87c00b5bd64b77dc9f04bb.jpg",
  },
   {
    id: 9,
    title: "London",
    category: "City",
    image:
      "https://i.pinimg.com/736x/89/03/ee/8903ee4dd9fe86e48fbc4fb02a1e579d.jpg",
  },
  {
    id: 10,
    title: "New York City",
    category: "City",
    image:
      "https://i.pinimg.com/736x/72/40/0a/72400a7078fdef332d7081b89fdfc5c4.jpg",
  },
  {
  id: 11,
  title: "Santorini",
  category: "City",
  image:
    "https://i.pinimg.com/736x/74/a7/97/74a7979d5206f862b7e3ab1f5ec15f92.jpg",
},
{
  id: 12,
  title: "Kyoto",
  category: "City",
  image:
    "https://i.pinimg.com/736x/f8/1c/88/f81c88d13e16b5bb71e168680748fa9c.jpg",
},
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    "Beach",
    "Mountains",
    "City",
    "Nature",
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      {/* Page Header */}
      <section className="bg-light py-5">
        <div className="container text-center">

          <span className="text-primary fw-semibold">
            TRAVEL GALLERY
          </span>

          <h1 className="display-5 fw-bold mt-2">
            Explore Our Gallery
          </h1>

          <p className="text-muted mb-0">
            Take a look at beautiful destinations and unforgettable
            travel experiences.
          </p>

        </div>
      </section>

      {/* Gallery */}
      <section className="py-5">
        <div className="container">

          {/* Filter Buttons */}
          <div className="text-center mb-5">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn rounded-pill px-4 me-2 mb-2 ${
                  activeCategory === category
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* Images */}
          <div className="row g-4">

            {filteredItems.map((item) => (
              <div
                className="col-sm-6 col-lg-4"
                key={item.id}
              >
                <div
                  className="gallery-card position-relative overflow-hidden rounded-4 shadow-sm"
                  onClick={() => setSelectedImage(item)}
                  style={{ cursor: "pointer" }}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid w-100"
                    style={{
                      height: "280px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Overlay */}
                  <div
                    className="position-absolute bottom-0 start-0 end-0 p-4 text-white"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    }}
                  >
                    <h5 className="fw-bold mb-1">
                      {item.title}
                    </h5>

                    <small>
                      {item.category}
                    </small>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 1050,
          }}
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="position-relative"
            style={{ maxWidth: "900px", width: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle"
              onClick={() => setSelectedImage(null)}
              style={{
                width: "40px",
                height: "40px",
              }}
            >
              <i className="bi bi-x-lg"></i>
            </button>

            {/* Large Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="img-fluid rounded-4"
              style={{
                maxHeight: "80vh",
                width: "100%",
                objectFit: "contain",
              }}
            />

            <div className="text-white text-center mt-3">
              <h4 className="fw-bold">
                {selectedImage.title}
              </h4>

              <p className="mb-0">
                {selectedImage.category}
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;