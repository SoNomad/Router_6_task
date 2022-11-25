import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contacts from "./pages/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="wrapper mx-auto d-flex flex-column align-items-center justify-content-sm-between">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
