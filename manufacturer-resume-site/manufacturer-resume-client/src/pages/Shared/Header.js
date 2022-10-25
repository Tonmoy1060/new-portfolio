import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import coatch from '../../assets/coach.png';
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  const menuItems = (
    <>
      <li>
        <Link className="hover:text-red-500  transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-700 ..." to={"/home"}>Home</Link>
      </li>
      <li>
      <Link className="hover:text-red-500  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-700 ..." to={"/allservices"}>All Services</Link>
      </li>
      <li>
      <Link className="hover:text-red-500  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-700 ..." to={"/ourportfolio"}>Our Portfolio</Link>
      </li>
      <li>
        <Link className="hover:text-red-500 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-700 ..." to={"/contactus"}>Contact Us</Link>
      </li>
      <li>
        {user && <Link  className="hover:text-red-500  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-700 ..." to={"/dashboard"}>Dashboard</Link>}
      </li>
      <li>
        {user ? <Link onClick={logout} className="hover:text-red-500  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-700 ..." to={"/"}>Sign Out</Link> : <Link  className="hover:text-red-500  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-700 ..." to={"/login"}>Login</Link>}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-cyan-50 px-14">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img className="w-16 py-2" src={coatch} alt="" />
          <Link className="px-4  font-semibold" to={'/'}><span className=" text-lg ">Sport's</span> <br ></br> <small>Coaching</small></Link>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
