import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="hero  h-96" style={{ backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-cartoon-education-training-cram-school-image_9149.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-neutral-content">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold">ENGAGING COURSES WITH EDUKATE</h1>
      <p className="mb-5">Create and use interactive content on your website thanks to the H5P integration. Try new ways to engage your students and explore multiple options to make your course more interesting. Gamify the site with video tours, presentations, charts, and unlimited types of quizzes. </p>
      <Link to={'/courses'} className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default Header;