import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Layouts/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Tracker from "./Pages/Tracker";
import Login from "./Pages/Login";
import Portal from "./Pages/Portal";


import PageLoader from "./Components/PageLoader"; 

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);

    
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
