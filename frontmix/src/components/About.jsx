import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">  
            <p>KNOW MORE ABOUT US</p>
            <h1 className="heading">ABOUT US</h1>
          </div>
          <div className="mid">
            Welcome to Master Restaurant, where culinary excellence meets warm hospitality. Since our establishment, we've been dedicated to creating exceptional dining experiences through innovative cuisine and impeccable service. Our passionate team of chefs combines traditional techniques with modern creativity to bring you unforgettable flavors.
          </div>
          <Link to="/">
            Explore Menu <span><HiOutlineArrowNarrowRight /></span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default About;