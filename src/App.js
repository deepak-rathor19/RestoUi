import React from "react";
import "./assests/css/style.css";
import Navbar from "./componnets/Navbar";
import Home from "./componnets/Home";
import About from "./componnets/About";
import Menu from "./componnets/Menu";
import Products from "./componnets/Product";
import Review from "./componnets/Review";
import Contact from "./componnets/Contact";
import Blog from "./componnets/Blog";
import Footer from "./componnets/Footer";
import Signup from "./componnets/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
      <Signup />
    </>
  );
}

export default App;
