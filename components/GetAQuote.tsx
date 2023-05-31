import React from "react";
import { CircularText } from "./Icons";
import Image from "next/image";
import Link from "next/link";

const GetAQuote = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          src="/AFlogo-spin.png"
          alt="logo-spin"
          className="fill-black animate-spin-slow dark:fill-white"
          height="100"
          width="180"
        />

        <Link
          href="mailto:angelfcb01@yahoo.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold hover:bg-white hover:text-black 
          
          dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white hover:dark:border-white"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default GetAQuote;
