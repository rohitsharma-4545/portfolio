import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a software engineer with strong expertise in Data Structures and Algorithms, backed by solving 600+ competitive programming problems across platforms. Alongside my problem-solving skills, I specialize in full-stack web development, cloud technologies, and data-driven solutions. Skilled in Java, Python, JavaScript, and TypeScript, I work with modern frameworks such as React, Next.js, and Node.js, and databases like Oracle SQL and MySQL. I enjoy designing efficient systems, building scalable applications, and creating intuitive user experiences. Passionate about applying my technical knowledge to solve real-world problems, I thrive in collaborative, agile environments and continuously strive to improve my skills.
      </motion.p>

      {/* Download Resume Button */}
      <div className="mt-6">
        <a
          href="/Nikhil_SDE_Resume.pdf"
          download="Nikhil_Sde_Resume.pdf"
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition duration-300"
        >
          Download Resume
        </a>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
