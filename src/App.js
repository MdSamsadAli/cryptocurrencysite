import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./common/Footer";
import Services from "./components/Services";
import Team from "./components/Team";
import Customer from "./components/Customer";
import Hero from "./common/Hero";

const App = () => {
  return (
    <div>
      <Router>
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
