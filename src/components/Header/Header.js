import React from "react";
import "./Header.css";
import {
  HiOutlineDocument,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import girl from "../../assets/girlicon2.png";
import resume from "../../assets/TAS-Resume.pdf";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="pt-12">

      <div className="-mt-16 md:-mt-12">
        <div className="hero  text-grayLight rounded-lg  ">
          <div className="flex flex-col lg:flex-row-reverse">
            <img
              src={girl}
              style={{ width: 620, height: 560 }}
              className="rounded-lg shadow-xl lg:ml-28 w-full"
              alt=""
            />
            <div>
              <div className="shadow-2xl shadow-gray-900 rounded-lg p-10 font-sans">
                <h2 className="text-5xl font-extrabold font-sans">
                  Hi, I'm <span className="text-darkpink">Tasmim</span>
                </h2>
                <p className="my-5">MERN Stack Developer from Bangladesh</p>
                <div className="pt-10">
                  <div className="flex">
                    <HiOutlineDocument className="text-darkpink w-7 h-7 " />
                    <p className="p"> MERN Stack Developer</p>
                  </div>
                  <div className="flex py-3">
                    <HiOutlineMail className="text-darkpink w-7 h-7 " />
                    <p className=""> tasmimrahman2000@gmail.com</p>
                  </div>
                  <div className="flex">
                    <HiOutlineLocationMarker className="text-darkpink w-7 h-7 " />
                    <p className="">Rangpur, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="shadow-2xl shadow-gray-900 rounded-lg p-10 mt-8 font-sans">
                <p className="py-5">Download My Resume:</p>
              <a href={resume} download='Tasmim Rahman'>  <button className="btn btn-outline border-sm mr-5 shadow-2xl sm:mb-5 lg:mb-0  text-darkpink rounded-none bg-blackdeep" >
                  Download Resume
                </button></a>
               <Link  smooth to="#contactMe" > <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink ">
                  Contact me
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
