import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateProjects = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const date = new Date().toDateString();
    const newProject = {
      date,

      ...data,
    };
    console.log(newProject);

    axios
      .post(
        "https://portfolio-server-khaki.vercel.app/api/projects",
        newProject
      )
      .then((res) => {
        if (res.data.success) {
          toast.success("Project added Successfully!");
          reset();
        } else {
          alert(res.data.message);
        }
      });
  };
  return (
    <div>
      <div className="flex py-20 justify-center  font-semibold mx-auto text-black max-h-full">
        <form
          className="border  p-10 my-10 card shadow-blue-900 shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="md:text-4xl font-semibold text-black md:mb-6 text-center text-3xl p-6">
            Add New Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mb-4">
              <label htmlFor="Name" className="block font-bold">
                Name of the Project
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                name="name"
                className="input input-bordered rounded-md border-gray-500 bg-transparent pr-10 "
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="pictureUrl" className="block font-bold">
                Image of the Project
              </label>
              <input
                {...register("image")}
                type="text"
                id="image"
                name="image"
                className="input input-bordered rounded-md border-gray-500 bg-transparent pr-10 "
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="clientLink" className="block font-bold">
                Client-site Repository
              </label>
              <input
                {...register("clientLink")}
                type="text"
                id="clientLink"
                name="clientLink"
                className="input input-bordered rounded-md border-gray-500 bg-transparent pr-10 "
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="serverLink" className="block font-bold">
                Server-site Repository
              </label>
              <input
                {...register("serverLink")}
                type="text"
                id="serverLink"
                name="serverLink"
                className="input input-bordered rounded-md border-gray-500 bg-transparent pr-10 "
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="liveLink" className="block font-bold">
                Live-link
              </label>
              <input
                {...register("liveLink")}
                type="text"
                id="liveLink"
                name="liveLink"
                className="input input-bordered rounded-md border-gray-500 bg-transparent pr-10 "
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="stack" className="block font-bold">
                Type of Stack
              </label>
              <input
                {...register("stack")}
                type="text"
                id="stack"
                name="stack"
                className="input input-bordered rounded-md border-gray-500 bg-transparent pr-10 "
                required
              />
            </div>
          </div>

          <div className="mb-4 text-center">
            <label htmlFor="description" className="block font-bold">
              Short Description of Project
            </label>
            <textarea
              {...register("description")}
              id="description"
              name="description"
              className="input input-bordered rounded-md border-gray-500 bg-transparent pr-10 w-full h-20"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn  rounded-md w-3/4 mx-auto  btn-outline border-black mr-5 shadow-2xl sm:mb-5 lg:mb-0  text-white  bg-blackdeep"
              type="submit"
              value="Add Project"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjects;
