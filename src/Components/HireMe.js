import Link from "next/link";
import React from "react";
import { CircularTextFullStack } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-6 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-48 flex items-center justify-center relative">
        <CircularTextFullStack className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href={"mailto:soumyaswaroopsootar@gmail.com"}
          className="dark:bg-light dark:text-dark flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-yellow-400 hover:dark:bg-yellow-400 hover:text-dark hover:border-none" 
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
