import Link from "next/link";
import React from "react";
import { CircularTextFullStack } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 z-10 bottom-6 flex items-center justify-center overflow-hidden pointer-events-none lg:right-[-75vw] lg:top-[-83vh] ">
      <div className="w-48 h-48 flex items-center justify-center relative md:w-24">
        <CircularTextFullStack className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href={"mailto:soumyaswaroopsootar@gmail.com"}
          className="dark:bg-light dark:text-dark flex items-center pointer-events-auto justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-yellow-400 hover:dark:bg-yellow-400 hover:text-dark hover:border-none md:w-12 md:h-12 md:text-[10px]" 
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
