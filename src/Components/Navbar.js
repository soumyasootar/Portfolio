import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {GithubIcon, LinkedInIcon, TwitterIcon} from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className }) => {
  const router =useRouter()
  // console.log("router: ", router);
  // console.log(router.asPath === href);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease-in-out duration-300
      ${router.asPath === href?'w-full':'w-0'}
      `} 
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 font-medium py-8 flex items-center justify-between">
      <nav>
        <CustomLink href="/" title={"Home"} className={"mr-4"}></CustomLink>
        <CustomLink
          href="/about"
          title={"About"}
          className={"mx-4"}
        ></CustomLink>
        <CustomLink
          href="/projects"
          title={"Projects"}
          className={"ml-4"}
        ></CustomLink>
      </nav>
      <nav className="flex item-center justify-center flex-wrap">
        <motion.a href={"https://github.com/soumyasootar"} target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-8 mr-3">
          <GithubIcon/>
        </motion.a>
        <motion.a href={"https://www.linkedin.com/in/soumya-swaroop-sootar-a4b708118/"} target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-8 ml-3">
          <LinkedInIcon/>
        </motion.a>
      </nav>
      <div className="absolute top-2 left-[50%] translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
