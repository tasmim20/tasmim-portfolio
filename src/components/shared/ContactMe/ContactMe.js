import img from "../../../assets/5.jpg";

const ContactMe = () => {
  return (
    <div>
      <div
        className="hero text-white "
        style={{ backgroundImage: `url(${img})`, height: 600, opacity: 2 }}
      >
        <div className=" lg:flex-row-reverse">
          <div className="text-center  w-full">
            <h1 className="text-4xl   font-bold pb-10">Contact Me</h1>
          </div>
          <div className=" ">
            <div className=" text-white">
              <form>
                
             <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 pb-5 text-white">
             <input
                    type="text"
                    placeholder=" Your Name"
                    name="user_name"
                    className="input input-ghost sm:max-w-full bg-transparent rounded-none border-gray focus:bg-lightpink focus:text-white "
                  />
                
                
                  <input
                    type="text"
                    placeholder=" Your Email"
                    name="user_email"
                    className="input input-ghost bg-transparent w-full rounded-none border border-gray focus:bg-lightpink focus:text-white"
                  />
                
                
                  <input
                    type="number"
                    placeholder=" Your Phone"
                    name="user_phone"
                    className="input input-ghost bg-transparent w-full rounded-none border-gray focus:bg-lightpink focus:text-white"
                  />
             </div>
               
                
                  <textarea
                    name="message"
                    className="textarea rounded-none textarea-ghost bg-transparent focus:bg-lightpink w-full focus:text-white border-gray"
                    placeholder="Your Message"
                  ></textarea>
                

              <div className="grid justify-center">
              <input
                  className="btn btn-active  rounded-none bg-reddark  text-white mt-8 px-10"
                  type="submit"
                  value="Send Message"
                />
              </div>
              </form>

              <div className="grid  text-center lg:grid-cols-3 sm:grid-cols-1 mt-12">
               <div>
                <h2>Email Me</h2>
                <p className="text-lightBlack">tasmimrahman2000@gmail.com</p>
               </div>
               <div>
                  <h2>Call me</h2>
                  <p className="text-lightBlack">+8801701954548</p>
               </div>
               <div>
                   <h2>LinkedIn</h2>
                   <p className="text-lightBlack">https://www.linkedin.com/in/tasmim-rahman-2a7a71259</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
