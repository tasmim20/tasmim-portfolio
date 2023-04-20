import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer grid justify-between items-center p-4 px-10 bg-blackdeep text-grayLight">
        <div className="">
          <p>Developed by Tasmim</p>
        </div>
        <div className="">
          <h2>Copyright © 2023 TASMIM</h2>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-xl">
          <a href="https://www.linkedin.com/in/tasmim-rahman-2a7a71259/">
            {" "}
            <FaLinkedin></FaLinkedin>
          </a>
          <a href="https://github.com/tasmim20">
            <FaGithub></FaGithub>
          </a>
          <a href="">
            <FaFacebookSquare></FaFacebookSquare>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
