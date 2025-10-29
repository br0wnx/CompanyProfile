import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Layouts/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Tracker from "./Pages/Tracker";
import Login from "./Pages/Login";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Portal from "./Pages/Portal";

function App() {
  return (
    <>
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
