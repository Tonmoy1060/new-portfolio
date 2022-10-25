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
      <div class="navbar bg-cyan-50 px-14">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img className="w-16 py-2" src={coatch} alt="" />
          <Link className="px-4  font-semibold" to={'/'}><span className=" text-lg ">Sport's</span> <br ></br> <small>Coaching</small></Link>
        </div>
        <div class=" hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
          {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
