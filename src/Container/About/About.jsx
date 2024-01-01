import React from "react";

import about1 from "../../Assets/about01.png";
import about2 from "../../Assets/about02.png";
import about3 from "../../Assets/about03.png";
import about4 from "../../Assets/about04.png";

import { motion } from "framer-motion";

const About = () => {
  const about = [
    {
      title: "Web Development",
      description: "Iam a good web developer",
      img: about1,
    },
    {
      title: "Web Development",
      description: "Iam a good web developer",
      img: about2,
    },
    {
      title: "Web Development",
      description: "Iam a good web developer",
      img: about3,
    },
    {
      title: "Web Development",
      description: "Iam a good web developer",
      img: about4,
    },
  ];

  return (
    <div className="py-16 w-full flex flex-col flex-1 h-full px-8 bg-white">
      <h2 className="text-5xl font-sans  font-extrabold text-center text-stone-950 capitalize min-[2000px]:text-5xl max-[450px]:text-2xl">
        I know that <span className="text-secondary">Good App</span> <br />
        means <span className="text-secondary">Good Business</span>
      </h2>
      <div className="flex  justify-center items-start flex-wrap mt-16 mb-32 max-[400px]:mb-0">
        {about.map((item, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="w-48 flex justify-start items-start flex-col m-8 min-[2000px]:w-96 min-[2000px]:my-8 min-[2000px]:mx-16"
              key={index}
            >
              <img
                className="w-full h-44 rounded-2xl object-cover min-[2000px]:h-80 "
                src={item.img}
                alt-={item.title}
              />
              <h2
                className="text-base font-extrabold text-stone-950 text-left min-[2000px]:text-4xl max-[450px]:text-sm"
                style={{ marginTop: "20px" }}
              >
                {item.title}
              </h2>
              <p className="text-sm text-left text-gray-color min-[2000px]:text-3xl mt-2">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
