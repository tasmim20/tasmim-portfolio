import React from "react";
import { HashLink as Link} from "react-router-hash-link";


const Navbar = () => {
  return (
    <div>
      <div
        className="uppercase navbar fixed z-20 bg-blackdeep text-grayLight sm:text-black font-sans font-sm "
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blackdeep text-grayLight rounded-box w-52"
            >
               <li>
              <Link smooth to='#'   className="">Home</Link>
            </li>
            <li>
              <Link smooth to="#aboutMe" className="">About Me</Link>
            </li>
            <li>
              <Link smooth to="#skills"   className="">Skills</Link>
            </li>
            <li>
              <Link smooth to="#services"  className="">Services</Link>
            </li>
            <li>
              <Link smooth to="#projects"   className="">Projects</Link>
            </li>
            <li>
              <Link smooth to="#contactMe"  className="">Contact</Link>
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
          <a className="btn btn-ghost normal-case text-xl text-grayLight">Tasmim</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-grayLight" >
            <li>
              <Link smooth to='#'   className="">Home</Link>
            </li>
            <li>
              <Link smooth to="#aboutMe" className="">About Me</Link>
            </li>
            <li>
              <Link smooth to="#skills"   className="">Skills</Link>
            </li>
            <li>
              <Link smooth to="#services"  className="">Services</Link>
            </li>
            <li>
              <Link smooth to="#projects"   className="">Projects</Link>
            </li>
            <li>
              <Link smooth to="#contactMe"  className="">Contact</Link>
            </li>
          </ul>
        </div>
    
      </div>
    </div>
  );
};

export default Navbar;