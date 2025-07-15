import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeWrapper from "./components/HomeWrapper"; // Import HomeWrapper
import Barat from "./components/Barat";
import India from "./components/India";
import Indonesia from "./components/Indonesia";
import Korea from "./components/Korea";
import Kartun from "./components/Kartun";
import Malaysia from "./components/Malaysia";

function App() {
  return (
    <Router> {/* Only one Router here */}
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/barat" element={<Barat />} />
        <Route path="/india" element={<India />} />
        <Route path="/indonesia" element={<Indonesia />} />
        <Route path="/korea" element={<Korea />} />
        <Route path="/kartun" element={<Kartun />} />
        <Route path="/malaysia" element={<Malaysia />} />
      </Routes>
    </Router>
  );
}

export default App;
