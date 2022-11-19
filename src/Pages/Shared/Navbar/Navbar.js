import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assets/img/logo.png";
import propic from "../../../Assets/img/user.png";
import { AuthContext } from "../../../Context/AuthProvider";


const Navbar = () => {
  const {user,logout,setTheme} = useContext(AuthContext)
const navigate =useNavigate()

const handleMode=(event)=>{
  const check = event.target.checked 
  if(check){

   return setTheme(true)
  }
  return setTheme(false)
}

const handleLogout =()=>{


  logout()
  .then(()=>{
    navigate('/')
  })
  .catch(e=>console.log(e))
}

  const menuItem = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/courses"}>Courses</Link>
      </li>

      <li>
      <Link to={'/faq'}>FAQ</Link>
      </li>
      <li>
        <Link to={'/blog'}>Blog</Link>
      </li>
      
    </>
  );

  const profileItem = (
    <>

    {
      user?.uid ? 
      <>
      <form onChange={handleMode} className="form-control mr-8">
          <label className="label cursor-pointer">
            <span className="label-text text-base">Remember me</span>
            <input type="checkbox" className="toggle toggle-sm ml-2" name="mode" />
          </label>
        </form>

        <button className="btn" onClick={handleLogout}>Sign out</button>
      <div data-tip={user.displayName} className="avatar tooltip  tooltip-left  ">
        <div  className="   w-10 ml-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

          <img alt=""  src={user?.photoURL=== null ? propic : user?.photoURL} />
        </div>
      </div>
      </>
      :
      <div className="btn-group">
        <Link to={'/register'} className="btn">
          Register
        </Link>
        <Link to={'/login'} className="btn">
          Login
        </Link>
      </div>
      
     
    }
      
    </>
  );

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>

        <Link to={'/'}  className="btn btn-ghost normal-case text-xl">
          <img className="w-10 mr-2" src={logo} alt="" /> Edukate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">{profileItem}</div>
    </div>
  );
};

export default Navbar;
