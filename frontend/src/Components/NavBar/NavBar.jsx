import React, { useState } from "react";

import { HiMenuAlt4 } from "react-icons/hi";

import { MdOutlineCancel } from "react-icons/md";

import { motion } from "framer-motion";

import logo from "../../Assets/onepiece-1.png";
import tom from "../../Assets/tomjerry.png";
import naruto from "../../Assets/hat.png";
import micky from "../../Assets/micky.png";
import batman from "../../Assets/batman.png";
import joker from "../../Assets/joker.png";
import boy from "../../Assets/boy.png";
import got from "../../Assets/GOT.png";
import breakingBad from "../../Assets/Breaking-Bad.png";
import wakanda from "../../Assets/wakanda.png";

import { headerElements } from "../../Constants";

const NavBar = () => {
  const [Toogle, setToogle] = useState(false);

  return (
    <nav className="backdrop-blur-sm px-4 h-20 flex justify-center w-full items-center    border-2 border-primary z-30 fixed bg-white bg-opacity-50  ">

      <div className="flex  items-center justify-between gap-8  max-sm:gap-6 max-[370px]:gap-2  max-sm:-ml-5 ">

        <div className="max-sm:w-20 w-16 ">
          <img src={logo} className=" object-contain" alt="" />
        </div>

        <p className="text-3xl font-extrabold hidden max-sm:block   ">
          Portfolio
        </p>
        
        <div className=" max-sm:hidden w-20">
          <img src={naruto} className=" " alt="" />
        </div>

        <div className="   max-sm:hidden w-20 ">
          <img src={got} className=" " alt="" />
        </div>

        <div className="  max-sm:hidden w-16 ">
          <img src={breakingBad} className=" " alt="" />
        </div>

        <div className="max-sm:w-20  w-16 ">
          <img src={micky} className=" " alt="" />
        </div>

      </div>

      <ul className=" text-[#0c0a09] font-bold uppercase flex items-center justify-center max-sm:hidden flex-1">
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

      <div className="flex items-center justify-center">
        <div className="max-sm:hidden flex justify-start items-center  mr-5   ">
          <img src={wakanda} className=" w-20" alt="" />
        </div>
        <div className="max-sm:hidden flex justify-start items-center  h-5 mr-1   ">
          <img src={boy} className=" w-20" alt="" />
        </div>
        <div className="max-sm:hidden flex justify-start items-center  h-5 mr-5   ">
          <img src={joker} className=" w-20" alt="" />
        </div>
        <div className="max-sm:hidden flex justify-start items-center  h-5 mr-8   ">
          <img src={batman} className=" w-20" alt="" />
        </div>
        <div className="max-sm:hidden flex justify-start items-center  h-5 scale-x-[-1]  ">
          <img src={tom} className=" w-20" alt="" />
        </div>
      </div>

      <div className=" md:hidden  w-9 h-9 rounded-full flex items-center justify-center bg-secondary max-sm:-mr-2 max-sm:">
        <HiMenuAlt4
          className="w-6 h-6 text-white-color"
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
