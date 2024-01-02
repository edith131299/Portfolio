import React from "react";

import email from "../../Assets/email.png";
import phone from "../../Assets/mobile.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h2 className="text-black text-4xl text-center capitalize font-extrabold max-[450px]:text-2xl">
        take a coffe & chat with me
      </h2>

      <div className="w-2/3 flex justify-evenly items-center flex-wrap mt-16 mr-8 ml-8 max-[450px]:gap-4">
        <div className="min-w-[310px] flex items-center justify-start my-1 mx-0 px-2 py-4 rounded-lg pointer transition-all duration-300 ease-in-out bg-pink-100 hover:shadow-md  text-gray-color">
          <img className="h-10 w-10 my-0 mx-3" src={email} />
          <p className="font-medium">sudakarvenkat023@gmail.com</p>
        </div>
        <div className="min-w-[310px] flex items-center justify-start my-1 mx-0 px-2 py-4 rounded-lg pointer transition-all duration-300 ease-in-out bg-blue-100 hover:shadow-md  text-gray-color">
          <img className="h-10 w-10 my-0 mx-3" src={phone} />
          <p className="font-medium">9941711138</p>
        </div>
      </div>

      <form className="flex flex-col justify-center items-center w-3/5 my-4 mx-8">
        <input
          className="w-full my-3 mx-0 rounded-xl cursor transistion-all duration-300 ease-in-out p-3.5 outline-none hover:shadow-md "
          type="text"
          placeholder="Your Name"
          name="Name"
          id=""
        />
        <input
          className="w-full my-3 mx-0 rounded-xl cursor transistion-all duration-300 ease-in-out p-3.5 outline-none hover:shadow-md "
          type="email"
          placeholder="Your Email"
          name="Email"
          id=""
        />
        <textarea
          className="w-full h-44 my-3 mx-0 rounded-xl cursor transistion-all duration-300 ease-in-out p-3.5 outline-none hover:shadow-md "
          placeholder="Your Message"
          name="Message"
          id=""
        />
      </form>

      <button className="my-10 px-7 py-4 text-white bg-blue-700 rounded-lg">
        Send Message
      </button>
    </div>
  );
};

export default Contact;
