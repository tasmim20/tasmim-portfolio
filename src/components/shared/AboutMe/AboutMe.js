import React from "react";

const AboutMe = () => {
  return (
    <div className="my-16" id="aboutMe">
      <div className="hero  text-grayLight rounded-lg  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            src="https://miro.medium.com/max/1400/1*qdAW1TjCN57h1lbuuzvchg.gif"
            style={{ height: 400, width: 600 }}
            className="rounded-lg shadow-2xl bg-black w-full"
          />
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="p-3"
          >
            <h1 className="text-5xl font-bold mb-6 text-grayLight">
              Let me <span className="text-darkpink">introduce😍 </span> myself
            </h1>
            <ul className="list-disc">
              <li className="">
                Hi there🌹  .. Myself Tasmim Rahman, Who loves💓 developing. Web Developer using MERN Stack
                Technology. I specialize in both front-end and back-end web
                development.
              </li>
              <li className="my-3">
                I am doing my bachelors in Technology specialization in ECE👩‍💻 from
                Hajee Mohammad Danesh Science & Technology University. And I
                have completed Web Development course from Programming
                hero(CEO-Jhankar Mahbub).
              </li>
              <li>
                Please take a look👀  at my portfolio and feel free to get in touch
                if you have any query  or would like to work together👫  .
              </li>
            </ul>

            <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink mt-4">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
