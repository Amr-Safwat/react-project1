// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./home";
import "./home.css";
import Header from "./components/Header";
import "./components/Header.css";
import Footer from "./components/Footer";
import "./components/Footer.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Home />
    <Footer/>
  </div>
);
