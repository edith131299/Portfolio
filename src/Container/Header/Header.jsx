import React from "react";

import { easeInOut, easeOut, motion } from "framer-motion";

import profile from "../../Assets/profile.png";

import cricle from "../../Assets/circle.svg";

import sass from "../../Assets/node.png";

import flutter from "../../Assets/html.png";

import redux from "../../Assets/redux.png";

import bg from "../../Assets/bgWhite.png";

const Header = () => {
  const scale = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  };

  return (
    <div
      className="w-full h-full pt-24 px-8 pb-0 // flex flex- items-start justify-center // releative bg-repeat bg-cover bg-center //
     min-[2000px]:pt-32  max-[1200px]:items-center max-[1200px]:flex-col max-[450px]:pt-24 max-[450px]:pr-4 max-[450px]:pb-8  "
      style={{ backgroundImage: `url(${bg})`, flex: "1" }}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-col my-0 mx-8  // h-full // max-[1200px]:w-full max-[1200px]:mr-0"
        style={{ flex: "0.65" }}
      >
        <div className=" flex flex-col justify-end items-end // w-full max-[1200px]:justify-start max-[1200px]:items-start  ">
          <div className="flex items-center justify-center // py-4 px-8 //  rounded-2xl bg-white-color shadow-[0px_0px_20px_rgba(0,0,0,0.1)] ">
            <span className="mx-3 text-4xl max-[2000px]:text-6xl">👋</span>

            <div className="py-2">
              <p>Hello I am</p>
              <h1 className="font-bold text-lg">Sudakar V</h1>
            </div>
          </div>

          <div className=" mt-12 w-auto // py-4 px-8 // // flex flex-col items-end justify-end  // rounded-2xl bg-white-color shadow-[0px_0px_20px_rgba(0,0,0,0.1)] ">
            <p className="w-full uppercase text-right">Web Developer</p>
            <p className="w-full uppercase text-right">SAP </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex justify-end items-end relative h-full max-[1200px]:my-8  "
        style={{ flex: "1" }}
      >
        <img
          src={profile}
          alt="profile-img"
          className="w-full object-contain z-10 "
        />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: easeOut }}
          src={cricle}
          alt="profile_circle"
          className="absolute left-0 right-0 bottom-0 z-0 w-full h-5/6 "
        />
      </motion.div>

      <motion.div
        className="h-screen flex flex-col justify-evenly  max-[1200px]:w-full max-[1200px]:flex-wrap max-[1200px]:flex-row"
        style={{ flex: "0.75" }}
        variants={scale}
        whileInView={scale.whileInView}
      >
        <div className="flex items-center justify-center  w-24 h-24 rounded-full bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] min-[2000px]:w-52 min-[2000px]:h-52 max-[1200px]:m-4 ">
          <img className="w-3/5 h-3/5" src={flutter} alt="logos" />
        </div>
        <div className="flex items-center justify-center m-7 w-36 h-36 rounded-full bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] min-[2000px]:w-96 min-[2000px]:h-96 max-[1200px]:m-4">
          <img className="w-3/5 h-3/5" src={redux} alt="logos" />
        </div>
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)]min-[2000]:w-40 min-[2000]:h-40 max-[1200px]:m-4 ">
          <img className="w-3/5 h-3/5" src={sass} alt="logos" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
