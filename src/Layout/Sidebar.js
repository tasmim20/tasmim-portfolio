import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Sidebar = () => {
  return (
    <div>
      <Navbar />
      <aside className=" col-span-4 lg:w-52 md:w-20 h-screen text-grayLight bg-black font-bold sticky top-0 left-0 overflow-auto -mt-5">
        <nav className="flex flex-col gap-2 pl-5 pt-5 uppercase">
          <Link to="/">
            <span className="truncate"> Home</span>
          </Link>

          <Link to="/dashboard/create-project">
            <span className="truncate">Add Project</span>
          </Link>
          <Link to="/dashboard/create-blog">
            <span className="truncate">Write New Blog</span>
          </Link>
          <Link to="/dashboard/create-skill">
            <span className="truncate">Add Skills</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
