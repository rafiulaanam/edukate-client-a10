import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import background from "../../../asset/images/header.jpg";
import OneCourse from '../../Components/OneCourse/OneCourse';
import './Course.css'

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
          <div  style={{ backgroundImage: `url(${background})`, marginBottom: "90px" }}>
      <div
        className="jumbotron jumbotron-fluid position-relative overlay-bottom"
        style={{backgroundColor:' rgba(0, 0, 0, 0.7)'}}
      >
        <div
          className="container text-center  py-5"
          
        >
         
          <h1 className="text-white display-1 mb-5"> Courses</h1>
          <div
            className="mx-auto mb-5"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  className=" border-light bg-white text-body px-4 py-4 dropdown-toggle rounded-start"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Courses
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Courses 1{" "}
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Courses 2{" "}
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Courses 3{" "}
                  </Link>
                </div>
              </div>
              <input
                type="text"
                className="form-control border-light "
                style={{ padding: "0px 25px"}}
                placeholder="Keyword"
              />
              <div className="input-group-append">
                <button className="rounded-end border-light px-4 py-4 px-lg-5">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  

    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row mx-0 justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center position-relative mb-5">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Our Courses</h6>
                        <h1 className="display-4">Checkout New Releases Of Our Courses</h1>
                    </div>
                </div>
            </div>
            <div className="grid">
               
               {
                    courses.map(course=><OneCourse course={course}></OneCourse>)
               }
            </div>
        </div>
    </div>
        </div>
    );
};

export default Courses;