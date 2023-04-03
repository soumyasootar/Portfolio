import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y ,link="#"}) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-2xl font-semibold bg-dark dark:bg-light dark:text-dark text-light px-5 py-2 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.1}}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y,transition:1}}
      transition={{duration:1}}
      // viewport={{once:"false"}}
    >
      <a href={link}>{name}</a>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 mb-5 w-full text-center md:text-6xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkLg
      ">

      <motion.div
      className=" animate-spin-slow flex items-center justify-center rounded-full font-semibold bg-yellow-500 h-12 w-12 text-dark p-8 shadow-dark cursor-pointer absolute lg:p-4 md:p-4 xs:p-2 xs:text-xs"
      whileHover={{ scale: 1.1 }}
      initial={{x:0,y:0}}
    >
      WEB
    </motion.div>
        <Skill name="REACT" x="-13vw" y="0vw"/>
        <Skill name="TAILWIND CSS" x="-5vw" y="18vw"/>
        <Skill name="CHAKRA UI" x="24vw" y="-12vw"/>
        <Skill name="DSA" x="13vw" y="-12vw"/>
        <Skill name="REDUX" x="5vw" y="10vw"/>
        <Skill name="NODE.JS" x="-5vw" y="-18vw"/>
        <Skill name="JAVA" x="30vw" y="-6vw"/>
        <Skill name="EXPRESS.JS" x="30vw" y="5vw"/>
        <Skill name="MONGOOSE" x="17vw" y="-19vw"/>
        <Skill name="NEXT.JS" x="-5vw" y="-10vw"/>
        <Skill name="NETLIFY" x="-20vw" y="-19vw"/>
        <Skill name="GITHUB" x="-32vw" y="0vw"/>
        <Skill name="C++" x="29vw" y="14vw"/>
        <Skill name="VERCEL" x="-26vw" y="-10vw"/>
        <Skill name="MONGODB" x="-17vw" y="10vw"/>
        <Skill name="JAVASCRIPT" x="8vw" y="-5vw"/>
        <Skill name="HTML"x="19vw" y="0vw"/>
        <Skill name="CSS" x="17vw" y="10vw"/>
        <Skill name="NPM" x="-5vw" y="7vw"/>
      </div>
    </>
  );
};

export default Skills;
