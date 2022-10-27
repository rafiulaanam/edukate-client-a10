import React from "react";
import { Link } from "react-router-dom";
import background from "../../../asset/images/header.jpg";

const Header = () => {
  return (
    <div  style={{ backgroundImage: `url(${background})`, marginBottom: "90px" }}>
    <div
      class="jumbotron jumbotron-fluid position-relative overlay-bottom"
      style={{backgroundColor:' rgba(0, 0, 0, 0.7)'}}
    >
      <div
        class="container text-center  py-5"
        
      >
        <h1 class="text-white mt-4 mb-4">Learn From Home</h1>
        <h1 class="text-white display-1 mb-5">Education Courses</h1>
        <div
          class="mx-auto mb-5"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <div class="input-group">
            <div class="input-group-prepend">
              <button
                class=" border-light bg-white text-body px-4 py-4 dropdown-toggle rounded-start"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Courses
              </button>
              <div class="dropdown-menu">
                <Link class="dropdown-item" href="#">
                  Courses 1{" "}
                </Link>
                <Link class="dropdown-item" href="#">
                  Courses 2{" "}
                </Link>
                <Link class="dropdown-item" href="#">
                  Courses 3{" "}
                </Link>
              </div>
            </div>
            <input
              type="text"
              class="form-control border-light "
              style={{ padding: "0px 25px"}}
              placeholder="Keyword"
            />
            <div class="input-group-append">
              <button class="rounded-end border-light px-4 py-4 px-lg-5">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  );
};

export default Header;
