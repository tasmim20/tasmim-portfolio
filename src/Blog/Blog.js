import axios from "axios";
import React, { useState } from "react";

const Blog = () => {
  const [viewBlogs, setViewBlogs] = useState([]);

  axios
    .get("https://portfolio-server-khaki.vercel.app/api/blogs")
    .then((res) => {
      setViewBlogs(res.data.result);
    });
  return (
    <div className="bg-blackdeep">
      <div className="max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
        {viewBlogs?.length !== 0 &&
          viewBlogs?.map((row) => (
            <div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card shadow-2xl shadow-red-800/40 border   border-reddark lg:card-side text-grayLight bg-blackdeep   rounded-lg"
              >
                <figure className="rounded-lg">
                  <img
                    className="  lg:w-60 lg:h-56 lg:p-10 rounded-lg"
                    src={row.image}
                    alt="Frontend Development"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{row.name}</h2>
                  <p> {row.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink ">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
