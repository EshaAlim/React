import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide red">
            <h3>Eesha</h3>
          </div>
          <div className="slide blue">
            <h3>Alam</h3>
          </div>
          <div className="slide green">
            <h3>Ihtesham</h3>
          </div>
          <div className="slide yellow">
            <h3>QuilCoder</h3>
          </div>
          <div className="slide purple">
            <h3>WebDeveloper</h3>
          </div>
          <div className="slide orange">
            <h3>React</h3>
          </div>
        </Slider>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-section">
        <h1>Build Your Dreams With<br />Eesha</h1>
        <p>Studied at UAF</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>

  );
}


export default App;
