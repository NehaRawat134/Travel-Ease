import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/Mainlayout";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetails />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<div className="container section-padding text-center"><h1>Page not found</h1><p>The page you are looking for does not exist.</p><a className="btn btn-primary rounded-pill px-4" href="/">Back to Home</a></div>} />
         

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;