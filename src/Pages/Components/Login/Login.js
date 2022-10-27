import { GoogleAuthProvider } from "@firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle,FaGithub,FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider";
import "./Login.css";

const Login = () => {
  const { providerLogin, signIn } = useContext(AuthContext);

  const navigate = useNavigate()
  const googleProvider = new GoogleAuthProvider();

  const handelSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset()
        navigate('/')
      })
      .catch((error) => console.error(error));
  };

  const googleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        
      })
      .catch((error) => console.error(error));
  };
  return (
    <div >
      <form onSubmit={handelSignIn}>
        <section className="intro">
          <div
            className="bg-image h-100"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/new-templates/search-box/img4.jpg')",
            }}
          >
            <div
              className="mask d-flex align-items-center h-100"
              style={{ backgroundColor: "rgba(255,255,255,.6)" }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div
                      className="card gradient-custom"
                      style={{ borderRadius: "1rem" }}
                    >
                      <div className="card-body p-5 text-white">
                        <div className="my-md-5">
                          <div className="text-center pt-1">
                            <i className="fas fa-user-astronaut fa-3x"></i>
                            <h1 className="fw-bold my-5 text-uppercase">
                              log in
                            </h1>
                          </div>

                          <div className="form-outline form-white mb-4">
                            <label className="form-label" for="typeEmail">
                              Email
                            </label>
                            <input
                              type="email"
                              id="typeEmail"
                              name="email"
                              placeholder="Enter Your Email"
                              className="form-control form-control-lg"
                            />
                          </div>

                          <div className="form-outline form-white mb-4">
                            <label className="form-label" for="typePassword">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              id="typePassword"
                              placeholder="Enter Your Password"
                              className="form-control form-control-lg"
                            />
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="text-center py-5">
                            <button
                              className="btn btn-light btn-lg btn-rounded px-5"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                        </div>

                        <div >
                          <p className="mb-5">
                            <Link href="#!" className="text-white fw-bold">
                              Forgot password?
                            </Link>
                          </p>
                        </div>

                        <div className="text-center">
    <p>Not a member? <Link >Register</Link></p>
    <p>or sign up with:</p>
    <button type="button" className="btn mx-3 fs-5 text-white bg-black btn-floating mx-1">
    <FaFacebook></FaFacebook>
    </button>

    <button type="button" className="btn mx-3 fs-5 text-white bg-black btn-floating mx-1">
      <FaGithub></FaGithub>
    </button>

    <button type="button" onClick={googleSignIn} className="btn mx-3 fs-5 text-white bg-black btn-floating mx-1">
    <FaGoogle></FaGoogle>
    </button>

    
  </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Login;
