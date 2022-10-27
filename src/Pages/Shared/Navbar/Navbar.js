import React, { useContext } from "react";
import {Image } from "react-bootstrap";
import { FaBookReader } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
const Navbar = () => {
  const { user,providerLogout } = useContext(AuthContext);



  const handelLogout= ()=>{
    providerLogout()
    .then((result)=>{
        const user = result.user;
        console.log(user)
    })
    .catch(error=>console.error(error))
    

  }

  return (
    <div>
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <Link to={"/"} class="navbar-brand ml-lg-3">
            <h1 class="m-0 text-uppercase text-primary">
              <FaBookReader></FaBookReader>Edukate
            </h1>
          </Link>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div class="navbar-nav mx-auto py-0">
              <Link to={"/"} class="nav-item nav-link active">
                Home
              </Link>
              <Link to={"/about"} class="nav-item nav-link">
                About
              </Link>
              <Link to={"/courses"} class="nav-item nav-link">
                Courses
              </Link>
              <Link to={"/faq"} class="nav-item nav-link">
                FAQ
              </Link>
              <Link to={"/blog"} class="nav-item nav-link">
                Blog
              </Link>
              <Link to={"/contact"} class="nav-item nav-link">
                Contact
              </Link>
            </div>
            {user ? (
              <>
                {user?.displayName}

                <Image
                  className="rounded-circle px-4"
                  style={{ height: "40px" }}
                  src={user?.photoURL}
                ></Image>

<button onClick={handelLogout} className="btn btn-warning">Logout <HiLogout></HiLogout></button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  class="btn btn-primary py-2 px-4 d-none d-lg-block"
                >
                  Join Us
                </Link>

                <Link
                  to={"/login"}
                  class="btn btn-secondary py-2 px-4 d-none d-lg-block ms-4"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
