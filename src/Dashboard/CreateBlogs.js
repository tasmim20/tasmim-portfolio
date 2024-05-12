import axios from "axios";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import JoditEditor from "jodit-react";

const CreateBlogs = () => {
  const editor = useRef(null);
  //   const [content, setContent] = useState("");

  const { register, handleSubmit, reset, control } = useForm();
  const onSubmit = (data) => {
    const date = new Date().toDateString();
    const descriptionWithoutHTML = stripHTMLTags(data.description);
    const newBlog = {
      date,
      ...data,
      description: descriptionWithoutHTML,
    };
    console.log(newBlog);

    axios
      .post("https://portfolio-server-khaki.vercel.app/api/blogs", newBlog)
      .then((res) => {
        if (res.data.success) {
          toast.success("Blog created Successfully!");
          reset();
        } else {
          alert(res.data.message);
        }
      });
  };
  const stripHTMLTags = (html) => {
    return html.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <div className="grid justify-center items-center mx-auto lg:ml-20">
      <div className="flex py-20 justify-center  font-semibold mx-auto text-black max-h-full">
        <form
          className="  p-10 my-10 card shadow-blue-900 shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="md:text-4xl font-semibold text-black md:mb-6 text-center text-3xl p-6">
            Create New Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mb-4">
              <label htmlFor="Name" className="block font-bold">
                Blog Title
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
              <label htmlFor="category" className="block font-bold">
                Blog Category
              </label>
              <input
                {...register("category")}
                type="text"
                id="category"
                name="category"
                className="input w-full input-bordered rounded-md border-gray-500 bg-transparent pr-10 "
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block font-bold">
              Blog Image
            </label>
            <input
              {...register("image")}
              type="text"
              id="image"
              name="image"
              className="input input-bordered w-full rounded-md border-gray-500 bg-transparent pr-10 "
              required
            />
          </div>

          <div className="mb-4 text-center">
            <label htmlFor="description" className="block font-bold">
              Blog Content
            </label>

            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <JoditEditor
                  value={field.value}
                  onChange={(content) => field.onChange(content)}
                  onBlur={field.onBlur}
                  ref={editor}
                  config={{ readonly: false }}
                />
              )}
            />
          </div>
          <div className="form-control mt-6 flex  justify-center items-center">
            <input
              className="btn  rounded-md w-1/2    btn-outline border-black mr-5 shadow-2xl sm:mb-5 lg:mb-0  text-white  bg-blackdeep"
              type="submit"
              value="Create Blog"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogs;
