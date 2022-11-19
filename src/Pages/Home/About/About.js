import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://stylemixthemes.com/masterstudy/wp-content/themes/landing/assets/images/cert_builder/elementor-image.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">COURSE CREATION</h1>
          <p className="py-6">
          It has never been easier! No need to type any line of code. Building courses is as easy as breathing if you have a magic Front-end course builder. Super convenient and transparent builder, visual composer plugin and functional drag and drop tools - everything at hand to make it as easy as possible.
          </p>
          <Link to={'/courses'} className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
