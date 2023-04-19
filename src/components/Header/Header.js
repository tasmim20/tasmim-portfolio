import React from "react";
import "./Header.css";
import {
  HiOutlineDocument,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <section className=" text-white font-sans">
        <div className="container grid  mx-auto  lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
            <div className="shadow-2xl rounded-lg py-10 px-5 font-sans">
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
            <div className="shadow-2xl rounded-lg py-14 px-5 font-sans">
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
            className="object-cover shadow-2xl  w-full rounded-lg xl:col-span-3  p-10"
            src="https://inbio-react.netlify.app/static/3824f31a4f42d1cce321240d0503e667/d0f18/banner-02.webp"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
