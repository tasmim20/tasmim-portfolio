import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        className="uppercase navbar fixed z-20 bg-blackdeep lg:text-grayLight sm:text-black font-sans font-sm "
        style={{ height: 93 }}
      >
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
              <li>
                <Link className="">Home</Link>
              </li>
              <li>
                <Link className="">About Me</Link>
              </li>
              <li>
                <Link className="">Education</Link>
              </li>
              <li>
                <Link className="">Resume</Link>
              </li>
              <li>
                <Link className="">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img
                className="bg-redlight"
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Tasmim</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="">Home</Link>
            </li>
            <li>
              <Link className="">About Me</Link>
            </li>
            <li>
              <Link className="">Education</Link>
            </li>
            <li>
              <Link className="">Resume</Link>
            </li>
            <li>
              <Link className="">Contact</Link>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
    <a className="btn">Get started</a>
  </div> */}
      </div>
    </div>
  );
};

export default Navbar;
