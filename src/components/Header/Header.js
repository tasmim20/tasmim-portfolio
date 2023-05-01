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
    <div>
      {/* <section className=" text-white font-sans mt-20 grid justify-center  align-center">
        <div className="container grid  mx-auto  lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
            <div className="shadow-2xl shadow-gray-900 rounded-lg py-10 px-5 font-sans">
              <h2 className="text-5xl font-extrabold font-sans">
                Hi, I'm <span className="text-darkpink">Tasmim</span>
              </h2>
              <p className="my-5">MERN Stack Developer from Bangladesh</p>
              <div className="pt-10">
                <div className="flex">
                  <HiOutlineDocument className="text-darkpink w-7 h-7 " />
                  <p className="pl-2"> MERN Stack Developer</p>
                </div>
                <div className="flex py-3">
                  <HiOutlineMail className="text-darkpink w-7 h-7 " />
                  <p className="pl-2"> tasmimrahman2000@gmail.com</p>
                </div>
                <div className="flex">
                  <HiOutlineLocationMarker className="text-darkpink w-7 h-7 " />
                  <p className="pl-2">Rangpur, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="shadow-2xl shadow-gray-900 rounded-lg py-14 px-5 font-sans">
              <p className="py-5">Download My Resume:</p>
              <button className="btn btn-outline border-sm mr-5 shadow-2xl sm:mb-5 lg:mb-0  text-darkpink rounded-none bg-blackdeep">
                Download Resume
              </button>
              <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink ">
                Contact me
              </button>
            </div>
          </div>
          <img
               
              className="object-cover w-3/4 shadow-2xl shadow-gray-900 rounded-lg xl:col-span-3 p-10"
            src={girl}
            alt=""
          />
        </div>
      </section> */}

      <div className="mt-20">
        <div className="hero  text-grayLight rounded-lg  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={girl}
              style={{ width: 620, height: 560 }}
              className="rounded-lg shadow-2xl lg:ml-28 w-full"
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
