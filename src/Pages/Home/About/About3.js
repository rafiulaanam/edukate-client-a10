import React from "react";
import { Link } from "react-router-dom";

const About3 = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://seotrafficguide.com/wp-content/uploads/2020/03/illustration-6-2.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">LESSONS LIVE STREAMING</h1>
          <p className="py-6">
          The more is yet to come! Think there is a lack of live communication and interaction? We have considered it and launched a Live Stream, so you can conduct lectures in real-time. Communicate with the students, stream lessons, allow learners to follow the content and ask questions straight away via the comment section.
          </p>
          <Link to={'/courses'} className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default About3;
