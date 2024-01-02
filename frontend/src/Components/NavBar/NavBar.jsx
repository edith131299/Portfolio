import React, { useState } from "react";

import { HiMenuAlt4 } from "react-icons/hi";

import { MdOutlineCancel } from "react-icons/md";

import { easeOut, motion } from "framer-motion";

import logo from "../../Assets/logo.png";
import { headerElements } from "../../Constants";

const NavBar = () => {
  const [Toogle, setToogle] = useState(false);

  return (
    <nav className="backdrop-blur-sm flex justify-between w-full items-center py-4  px-8   border-2 border-primary z-30 fixed bg-white bg-opacity-50">
      <div className="app__navbar-logo flex justify-start items-center w-24 h-5 ">
        <img src={logo} alt="" />
      </div>

      <ul className=" uppercase items-center justify-center hidden md:flex  flex-1">
        {headerElements.map((item, index) => {
          return (
            <li
              className="my-0 mx-4 cursor-pointer hover:border-b-2  pb-2  hover:border-b-black "
              key={index}
            >
              <a className="" href={`#${item}`}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      <div className=" md:hidden  w-8 h-8 rounded-full flex items-center justify-center bg-secondary">
        <HiMenuAlt4
          className="w-3/4 h-3/4 text-white-color"
          onClick={() => setToogle(true)}
        />

        {Toogle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className=" fixed top-0 bottom-0 right-0 z-20 p-1 w-4/5 h-screen  flex flex-col content-end items-end list-none bg-white bg-repeat bg-cover menu shadow-sm"
          >
            <MdOutlineCancel
              className="w-8 h-8 text-[#313bac] mx-1 my-4 "
              onClick={() => setToogle(false)}
            />
            <ul className="uppercase  items-start flex flex-col m-0 p-0 content-start item-start w-full h-full   ">
              {headerElements.map((item, index) => {
                return (
                  <li
                    className="m-4 uppercase text-base font-medium hover:border-b-2 hover:border-b-black  "
                    key={item + index}
                  >
                    <a
                      className=""
                      href={`#${item}`}
                      onClick={() => setToogle(false)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
