import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {img, title,id} = course
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <Link to={`/courses/${id}`} className="btn btn-primary">Buy Now</Link>
    </div>
  </div>
</div>
    );
};

export default Course;