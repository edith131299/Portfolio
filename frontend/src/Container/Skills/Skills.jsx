import React from "react";
import { motion } from "framer-motion";

import html from "../../Assets/html.png";
import css from "../../Assets/css.png";
import javascript from "../../Assets/javascript.png";
import react from "../../Assets/react.png";
import redux from "../../Assets/redux.png";
import node from "../../Assets/node.png";
import git from "../../Assets/git.png";

const Skills = () => {
  const skills = [
    { name: "Html", img: html },
    { name: "Css", img: css },
    { name: "Javascript", img: javascript },
    { name: "React", img: react },
    { name: "Redux", img: redux },
    { name: "Node JS", img: node },
    { name: "Git", img: git },
  ];

  return (
    <section
      className="bg-white 
    w-full h-screen flex flex-col items-center justify-center max-[450px]:h-full "
    >
      <h2 className=" text-4xl font-extrabold text-center text-stone-950 capitalize max-[2000px]:text-5xl max-[450px]:text-2xl max-[450px]:mt-14">
        Skills & Experience
      </h2>

      <div className="w-3/5 mt-20 flex justify-center items-start max-[900px]:w-full max-[900px]:flex-col  max-[450px]:mr-0  max-[450px]:mb-18 ">
        <div className="flex flex-wrap justify-start items-start max-[400px]:items-center max-[400px]:justify-center ">
          {skills.map((item, index) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center  text-center m-4  transition-all duration-300 ease-in-out"
                key={item.name}
              >
                <div className="flex justify-center  items-center w-24 h-24 rounded-full bg-slate-100 hover:shadow-md hover:bg-slate-100 ">
                  <img className="w-1/2 h-1/2" src={item.img} alt="" />
                </div>
                <p className="text-gray-color mt-2">{item.name}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="w-3/5 flex justify-evenly mt-8 mb-12 max-[400px]:w-full ">
          <h4 className="text-secondary font-sans font-extrabold text-lg ">
            2023
          </h4>
          <div>
            <p>Senior Product Desingner</p>
            <p>Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
