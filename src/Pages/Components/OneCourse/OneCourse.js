import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './OneCourse.css'

const OneCourse = ({course}) => {
    const {url,title} = course;
  return (
    <div>
      <div className="card" >
        <div
          className="bg-image hover-overlay ripple "
          data-mdb-ripple-color="light"
        >
          <Image
            src={url}
            className="img-fluid"
          />
          <Link href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link href="#!" className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OneCourse;
