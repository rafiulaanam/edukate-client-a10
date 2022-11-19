import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="hero  h-96" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=826&t=st=1668855176~exp=1668855776~hmac=f30355488e48ba6f00b17713b16109f5df738818900e37009ee5f6bf40847f31")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-5xl font-bold">ENGAGING COURSES WITH EDUKATE</h1>
      <p className="mb-5">Create and use interactive content on your website thanks to the H5P integration. Try new ways to engage your students and explore multiple options to make your course more interesting. Gamify the site with video tours, presentations, charts, and unlimited types of quizzes. </p>
      <Link to={'/courses'} className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default Header;