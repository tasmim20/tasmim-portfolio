import React from "react";

const Services = () => {
  return (
    <div className="text-grayLight">
      <div className="text-center s">
        <h2 className="font-bold text-5xl">Services</h2>
        <p className="text-xl text-darkpink my-3">What I Offer</p>
      </div>
      <div>
        <div className="card card-side bg-blackdeep shadow-2xl  rounded-lg">
          <figure className="rounded-lg">
            <img
              className="w-60 h-56 p-10 rounded-lg"
              src="https://inizsoft.com/wp-content/uploads/2021/02/webdev.gif"
              alt="Frontend Development"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Frontend Development</h2>
            <p>
              {" "}
              I made so many website. My main focus is on creating visually
              appealing and user-friendly interfaces that provide a great user
              experience using React, TailwindCss, Bootstrap, Material UI
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink ">
                Contact me
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-blackdeep shadow-2xl  rounded-lg my-10">
          <figure className="rounded-lg">
            <img
              className="w-60 h-56 p-10 rounded-lg"
              src="https://dresma.ai/wp-content/uploads/2022/02/Backend-Developer-NodeJS.gif"
              alt="BackEnd Development"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">BackEnd Development</h2>
            <p>
              {" "}
              I made so many website. My main focus is on creating visually
              appealing and user-friendly interfaces that provide a great user
              experience using React, TailwindCss, Bootstrap, Material UI
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink ">
                Contact me
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-blackdeep shadow-2xl  rounded-lg">
          <figure className="rounded-lg">
            <img
              className="w-60 h-56 p-10 rounded-lg"
              src="https://www.cmarix.com/blog/wp-content/uploads/2019/05/backend-development.gif"
              alt="MERN Stack development"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MERN Stack Development</h2>
            <p>
              {" "}
              I made so many website. My main focus is on creating visually
              appealing and user-friendly interfaces that provide a great user
              experience using React, TailwindCss, Bootstrap, Material UI
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink ">
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
