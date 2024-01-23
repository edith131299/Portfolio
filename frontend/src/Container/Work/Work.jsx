import React from "react";

import { motion } from "framer-motion";

import amazon from "../../Assets/Amazon-copy.png";
import shopify from "../../Assets/Shopify.png";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Work = () => {
  const myWork = [
    {
      title: "MERN STACK",
      description: "Amazon Clone",
      img: amazon,
      deployLink: "http://16.171.160.72:8001",
      gitLink: "https://github.com/edith131299/Copy-Amazon-Website.git",
    },
    {
      title: "MERN STACK",
      description: "Shofify Clone",
      img: shopify,
      deployLink: "http://13.51.169.22:8000",
      gitLink: "https://github.com/edith131299/BuyZone.git",
    },
  ];

  return (
    <section
      id="Work"
      className="h-screen flex flex-col justify-center items-center max-[450px]:h-full "
    >
      <h2 className="mt-8  mb-8 text-5xl font-extrabold text-center text-stone-950 capitalize  max-[450px]:text-2xl  max-[450px]:mt-8 max-[450px]:h-full ">
        My Creative <span className="text-secondary">Portofolio </span>Section
      </h2>

      <motion.div
        className="flex flex-wrap justify-center items-center  "
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {myWork.map((item, index) => {
          return (
            <div
              className="w-72 flex-col m-8 p-4 rounded-2xl bg-white decoration-black cursor-pointer transition-all duration-300 ease-in hover:shadow-md min-[2000px]:w-[470px] min-[2000px]:p-5 min-[2000px]:rounded-xl max-[300px]:w-full max-[300px]:m-4 "
              key={item + index}
            >
              <div className="w-full h-56 relative">
                <img
                  className="w-full h-full rounded-lg object-fit min-[2000px]:h-80"
                  src={item.img}
                  alt={item.title}
                />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="flex justify-center items-center absolute top-0 l-0 r-0 l-0 w-full h-full bg-black bg-opacity-50 rounded-lg transition-all duration-300 ease-in opacity-0"
                >
                  <a href={item?.deployLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="flex justify-center items-center w-12 h-12 rounded-full  bg-black bg-opacity-50 text-black m-1   font-extrabold transition-all duration-300 ease-in decoration-white"
                    >
                      <AiFillEye className="w-3/6 h-3/6 text-white " />
                    </motion.div>
                  </a>
                  <a href={item?.gitLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="flex justify-center items-center w-12 h-12 rounded-full  bg-black bg-opacity-50 text-black m-1   font-extrabold transition-all duration-300 ease-in decoration-white"
                    >
                      <AiFillGithub className="w-3/6 h-3/6 text-white " />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="p-2 w-full relative flex-col flex  justify-center items-center ">
                <div className=" absoulte text-gray-color px-2 py-4 bg-white top-[-25px] border-xl top-neg-25">
                  <h4>{item.title}</h4>
                </div>
                <p className="flex justify-center items-center text-base font-extrabold text-black text-left mt-1 min-[2000px]:mt-12">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Work;
