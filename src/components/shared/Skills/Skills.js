import React from "react";
import {
  DiCss3,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import Tools from "./Tools/Tools";

const Skills = () => {
  return (
    <div className="grid justify-center" id="skills">
      <h2
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-center text-grayLight text-5xl font-bold mb-14"
      >
        Professional <span className="text-darkpink">SKillset</span>
      </h2>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="grid lg:grid-cols-5  md:grid-cols-3 grid-cols-2 gap-10"
      >
        <DiJavascript1 className=" transition duration-700 hover:scale-110 text-grayLight hover:bg-lightpink hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border   border-reddark" />
        <DiReact className= "transition duration-700 hover:scale-110 text-grayLight hover:bg-lightpink hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" />
        <DiNodejs className="transition duration-700 hover:scale-110 hover:bg-lightpink hover:text-white text-grayLight font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" />
        {/* <DiNodejs className="text-grayLight font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" /> */}
        <DiMongodb className="transition duration-700 hover:scale-110 hover:bg-lightpink hover:text-white text-grayLight font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" />
        <DiCss3 className="transition duration-700 hover:scale-110 hover:bg-lightpink hover:text-white text-grayLight font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" />
      </div>
      <div className="my-10">
        <Tools></Tools>
      </div>
    </div>
  );
};

export default Skills;
