import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </>
  );
}
