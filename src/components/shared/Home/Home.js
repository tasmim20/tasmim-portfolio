import React from "react";
import Header from "../../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className=" max-w-8xl p-6 mx-auto space-y-6 sm:space-y-12 bg-blackdeep pt-15 pb-10">
      <div className="max-w-8xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Header></Header>
      </div>
      <div className="max-w-8xl p-6 mx-auto space-y-6 sm:space-y-12">
        <AboutMe></AboutMe>
      </div>
      <div className="max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
       <Services></Services>
      </div>
      <div className="">
        <ContactMe></ContactMe>
      </div>
    </div>
  );
};

export default Home;
