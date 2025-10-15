import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Layouts/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
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
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
