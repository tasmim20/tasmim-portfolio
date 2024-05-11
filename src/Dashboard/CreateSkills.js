import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateSkills = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const date = new Date().toDateString();
    const newSkill = {
      date,

      ...data,
    };
    console.log(newSkill);

    axios.post("http://localhost:5000/api/skills", newSkill).then((res) => {
      if (res.data.success) {
        toast.success("Skill added Successfully!");
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
            Add New Skill
          </h2>

          <div className="mb-4">
            <label htmlFor="Name" className="block font-bold">
              Skill Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              className="input w-full input-bordered rounded-md border-gray-500 bg-transparent pr-10 "
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pictureUrl" className="block font-bold">
              Image or Icon of the Skill
            </label>
            <input
              {...register("image")}
              type="text"
              id="image"
              name="image"
              className="input w-full input-bordered rounded-md border-gray-500 bg-transparent pr-10 "
              required
            />
          </div>

          <div className="form-control mt-6">
            <input
              className="btn  rounded-md w-3/4 mx-auto  btn-outline border-black mr-5 shadow-2xl sm:mb-5 lg:mb-0  text-white  bg-blackdeep"
              type="submit"
              value="Add Skill"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSkills;
