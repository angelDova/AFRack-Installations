import React from "react";
import { CircularText } from "./Icons";
import Image from "next/image";
import Link from "next/link";

const GetAQuote = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 z-20 dark:text-light">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-28 dark:text-light">
        <Image
          src="/AFlogo-spin.png"
          alt="logo-spin"
          className="fill-dark z-10 animate-spin-slow dark:fill-light dark:text-light"
          height="100"
          width="180"
        />

        <Link
          href="mailto:angelfcb01@yahoo.com"
          className="flex items-center justify-center absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark 
          
          dark:bg-light dark:text-dark hover:dark:bg-dark/10 hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Contract Us
        </Link>
      </div>
    </div>
  );
};

export default GetAQuote;
