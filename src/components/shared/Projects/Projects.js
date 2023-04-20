import React from "react";
import harmic from "../../../assets/harmic2.png";
import sellcell from "../../../assets/sellcell.png";
import codeplanner from "../../../assets/code2.png";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="text-grayLight grid justify-center align-center my-10 mb-20">
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-center mb-10 "
      >
        <h2 className="text-5xl font-bold">Projects</h2>
        <p className="text-darkpink mt-3">My Recent Works</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div className="card rounded-sm shadow-2xl shadow-red-800/40">
          <figure>
            <img className="h-52 p-6 " src={harmic} alt="Shoes" />
          </figure>
          <div className="card-body -mt-5">
            <h2 className="card-title text-grayLight">HARMIC</h2>
            <p>MERN Stack Projects</p>
            <div className="card-actions justify-between mt-2 -mb-2">
              <div className="flex">
                <a
                  className="no-underline text-reddark"
                  href="https://harmic-client.firebaseapp.com/"
                >
                  Live-link
                </a>
              </div>
              <div className="flex">
                <BiLinkExternal className="text-reddark mt-1 " />
                <a
                  className="no-underline text-reddark"
                  href="https://github.com/tasmim20/harmic-client"
                >
                  Front-End
                </a>
              </div>
              <div className="flex">
                <BiLinkExternal className="text-reddark mt-1 " />
                <a
                  className="no-underline text-reddark"
                  href="https://github.com/tasmim20/harmic-server"
                >
                  Back-End
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card rounded-sm  shadow-2xl  shadow-red-800/40">
            <figure>
              <img className="h-52 p-6 " src={codeplanner} alt="Shoes" />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-grayLight">SELLCELL</h2>
              <p>MERN Stack Projects</p>
              <div className="card-actions justify-between mt-2 -mb-2">
                <div className="flex">
                  <BiLinkExternal className="text-reddark mt-1 " />
                  <a
                    className="no-underline text-reddark"
                    href="https://sellcell-f5de6.web.app"
                  >
                    Live-link
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-reddark mt-1 " />
                  <a
                    className="no-underline text-reddark"
                    href="https://github.com/tasmim20/sellcell-client-side"
                  >
                    Front-End
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-reddark mt-1 " />
                  <a
                    className="no-underline text-reddark"
                    href="https://github.com/tasmim20/sellcell-server"
                  >
                    Back-End
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card rounded-sm shadow-2xl  shadow-red-800/40">
            <figure>
              <img className="h-52 p-6 " src={sellcell} alt="Shoes" />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-grayLight">CODE-PLANNER</h2>
              <p>MERN Stack Projects</p>

              <div className="card-actions justify-between mt-2 -mb-2">
                <div className="flex">
                  <BiLinkExternal className="text-reddark mt-1 " />
                  <a
                    className="no-underline text-reddark"
                    href="https://code-planner-f4fc4.web.app"
                  >
                    Live-link
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-reddark mt-1 " />
                  <a
                    className="no-underline text-reddark"
                    href="https://github.com/tasmim20/code-planner-client"
                  >
                    Front-End
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-reddark mt-1 " />
                  <a
                    className="no-underline text-reddark"
                    href="https://github.com/tasmim20/code-planner-server"
                  >
                    Back-End
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
