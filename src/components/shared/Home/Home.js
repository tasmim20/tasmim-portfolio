import React from "react";
import Header from "../../Header/Header";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
  return (
    <div className=" max-w-8xl p-6 mx-auto space-y-6 sm:space-y-12 bg-blackdeep py-20">
      <div className="max-w-8xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Header></Header>
      </div>
      <div className="max-w-8xl p-6 mx-auto space-y-6 sm:space-y-12">
        <AboutMe></AboutMe>
      </div>
    </div>
  );
};

export default Home;
