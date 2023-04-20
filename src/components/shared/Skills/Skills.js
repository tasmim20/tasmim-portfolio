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
    <div className="grid justify-center">
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
        className="grid lg:grid-cols-5 grid-cols-2 gap-10"
      >
        <DiJavascript1 className="text-grayLight hover:bg-lightpink hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border   border-reddark" />
        <DiReact className="text-grayLight font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" />
        <DiNodejs className="text-grayLight font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" />
        {/* <DiNodejs className="text-grayLight font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" /> */}
        <DiMongodb className="text-grayLight font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" />
        <DiCss3 className="text-grayLight font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-800/40 border border-reddark" />
      </div>
      <div className="my-10">
        <Tools></Tools>
      </div>
    </div>
  );
};

export default Skills;
