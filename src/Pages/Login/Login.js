import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from 'react-hot-toast';

const Login = () => {
  const { emailSignIn, googleProvider, githubProvider } =
    useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleLogin = (data, event) => {
    const form = event.target;
    console.log(data);

    emailSignIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        toast.success("User Login Successfully")
      })
      .catch((e) => console.log(e));
  };

  const handleGoogle = () => {
    googleProvider()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };
  const handleGithub = () => {
    githubProvider()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card card-body flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#!" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="form-control mt-6">
            <button onClick={handleGoogle} className="btn btn-outline-primary">
              Continue with Google
            </button>
          </div>
          <div className="form-control mt-6">
            <button onClick={handleGithub} className="btn btn-outline-primary">
              Continue with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
