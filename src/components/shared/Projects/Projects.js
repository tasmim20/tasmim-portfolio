import React, { useState } from "react";
import harmic from "../../../assets/harmic2.png";
import chutti from "../../../assets/chutti1.png";
import nolan from "../../../assets/directRelief.png";
import { BiLinkExternal } from "react-icons/bi";
import axios from "axios";

const Projects = () => {
  const [viewProjects, setViewProjects] = useState([]);

  axios
    .get("https://portfolio-server-khaki.vercel.app/api/projects")
    .then((res) => {
      setViewProjects(res.data.result);
    });
  return (
    <div
      id="projects"
      className="text-grayLight grid justify-center align-center my-10 mb-20"
    >
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
        <div className="transition duration-700 hover:scale-105    card rounded-sm shadow-2xl shadow-red-800/40 ">
          <figure>
            <img className=" " src={harmic} alt="Shoes" />
          </figure>
          <div className="card-body  -mt-5">
            <h2 className="card-title ">HARMIC</h2>
            <p>
              Harmic is a e-commerce website of different types of fruits and
              vegatables.Here user can add blog and manage their blog
            </p>
            <div className="card-actions justify-between mt-2 -mb-2">
              <div className="flex">
                <a
                  className="no-underline text-darkpink"
                  href="https://harmic-client.firebaseapp.com/"
                >
                  Live-link
                </a>
              </div>
              <div className="flex">
                <BiLinkExternal className="text-darkpink mt-1 " />
                <a
                  className="no-underline text-darkpink"
                  href="https://github.com/tasmim20/harmic-client"
                >
                  Front-End
                </a>
              </div>
              <div className="flex">
                <BiLinkExternal className="text-darkpink mt-1 " />
                <a
                  className="no-underline text-darkpink"
                  href="https://github.com/tasmim20/harmic-server"
                >
                  Back-End
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="transition duration-700 hover:scale-105   card rounded-sm card-shadow shadow-2xl  shadow-red-800/40">
            <figure>
              <img className="" src={nolan} alt="Shoes" />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title ">Direct-Relief</h2>
              <p>
                Direct relief is a project for donation.Manage application state
                centrally with redux and data fetching with RTQ Query.
              </p>
              <div className="card-actions justify-between mt-2 -mb-2">
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://direct-relief-client1.vercel.app/"
                  >
                    Live-link
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/direct-relief-server"
                  >
                    Back-End
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/direct-relief-client"
                  >
                    Front-End
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="transition duration-700 hover:scale-105   card rounded-sm card-shadow shadow-2xl  shadow-red-800/40">
            <figure>
              <img className="" src={chutti} alt="Shoes" />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title ">Chutti </h2>
              <p>
                Chutti is website for a online clothing store. Implementing
                server-side rendering(SSR) for increasing performance and SEO
                friendly.
              </p>
              <div className="card-actions justify-between mt-2 -mb-2">
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://chutti-clothing-store.vercel.app/"
                  >
                    Live-link
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/clothing-store-client"
                  >
                    Front-End
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/clothing-store-server"
                  >
                    Back-End
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {viewProjects?.length !== 0 &&
          viewProjects?.map((row) => (
            <div className="transition duration-700 hover:scale-105    card rounded-sm shadow-2xl shadow-red-800/40 ">
              <figure>
                <img className=" " src={row.image} alt="Shoes" />
              </figure>
              <div className="card-body  -mt-5">
                <h2 className="card-title ">{row.name}</h2>
                <p>{row.description}</p>
                <div className="card-actions justify-between mt-2 -mb-2">
                  <div className="flex">
                    <a
                      className="no-underline text-darkpink"
                      href={row.liveLink}
                    >
                      Live-link
                    </a>
                  </div>
                  <div className="flex">
                    <BiLinkExternal className="text-darkpink mt-1 " />
                    <a
                      className="no-underline text-darkpink"
                      href={row.clientLink}
                    >
                      Front-End
                    </a>
                  </div>
                  <div className="flex">
                    <BiLinkExternal className="text-darkpink mt-1 " />
                    <a
                      className="no-underline text-darkpink"
                      href={row.serverLink}
                    >
                      Back-End
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* <div className="transition duration-700 hover:scale-105    card rounded-sm shadow-2xl shadow-red-800/40 ">
          <figure>
            <img className=" " src={harmic} alt="Shoes" />
          </figure>
          <div className="card-body  -mt-5">
            <h2 className="card-title ">HARMIC</h2>
            <p>
              Harmic is a e-commerce website of different types of fruits and
              vegatables.Here user can add blog and manage their blog
            </p>
            <div className="card-actions justify-between mt-2 -mb-2">
              <div className="flex">
                <a
                  className="no-underline text-darkpink"
                  href="https://harmic-client.firebaseapp.com/"
                >
                  Live-link
                </a>
              </div>
              <div className="flex">
                <BiLinkExternal className="text-darkpink mt-1 " />
                <a
                  className="no-underline text-darkpink"
                  href="https://github.com/tasmim20/harmic-client"
                >
                  Front-End
                </a>
              </div>
              <div className="flex">
                <BiLinkExternal className="text-darkpink mt-1 " />
                <a
                  className="no-underline text-darkpink"
                  href="https://github.com/tasmim20/harmic-server"
                >
                  Back-End
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="transition duration-700 hover:scale-105   card rounded-sm card-shadow shadow-2xl  shadow-red-800/40">
            <figure>
              <img className="" src={nolan} alt="Shoes" />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title ">Direct-Relief</h2>
              <p>
                Direct relief is a project for donation.Manage application state
                centrally with redux and data fetching with RTQ Query.
              </p>
              <div className="card-actions justify-between mt-2 -mb-2">
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://direct-relief-client1.vercel.app/"
                  >
                    Live-link
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/direct-relief-server"
                  >
                    Back-End
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/direct-relief-client"
                  >
                    Front-End
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="transition duration-700 hover:scale-105   card rounded-sm card-shadow shadow-2xl  shadow-red-800/40">
            <figure>
              <img className="" src={chutti} alt="Shoes" />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title ">Chutti </h2>
              <p>
                Chutti is website for a online clothing store. Implementing
                server-side rendering(SSR) for increasing performance and SEO
                friendly.
              </p>
              <div className="card-actions justify-between mt-2 -mb-2">
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://chutti-clothing-store.vercel.app/"
                  >
                    Live-link
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/clothing-store-client"
                  >
                    Front-End
                  </a>
                </div>
                <div className="flex">
                  <BiLinkExternal className="text-darkpink mt-1 " />
                  <a
                    className="no-underline text-darkpink"
                    href="https://github.com/tasmim20/clothing-store-server"
                  >
                    Back-End
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
