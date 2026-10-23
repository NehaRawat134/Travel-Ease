import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const closeMobileMenu = () => {
    const menu = document.getElementById("mainNavbar");
    if (menu?.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active fw-semibold" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg travel-navbar sticky-top shadow-sm">
      <div className="container">

        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold fs-3">
          <span className="text-primary">Travel</span>
          <span className="logo-dark">Ease</span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink to="/" className={navLinkClass} onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/destinations" className={navLinkClass} onClick={closeMobileMenu}>
                Destinations
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/packages" className={navLinkClass} onClick={closeMobileMenu}>
                Packages
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/hotels" className={navLinkClass} onClick={closeMobileMenu}>
                Hotels
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/gallery" className={navLinkClass} onClick={closeMobileMenu}>
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className={navLinkClass} onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className={navLinkClass} onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>

            {/* Theme Button */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <i
                  className={
                    darkMode
                      ? "bi bi-sun-fill"
                      : "bi bi-moon-fill"
                  }
                ></i>
              </button>
            </li>

            {/* Booking */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <NavLink
                to="/booking"
                className="btn btn-primary rounded-pill px-4"
                onClick={closeMobileMenu}
              >
                Book Now
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;