// "use client";

// import Link from "next/link";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { RxHamburgerMenu } from "react-icons/rx";
// import Button from "../buttons/Button";
// import { useEffect, useRef, useState } from "react";
// import DropMenu from "./DropMenu";
// import { GrFormClose } from "react-icons/gr";
// import { motion, useCycle } from "framer-motion";
// import { slideIn } from "@/app/utils/motion";
// import { AnimatePresence } from "framer-motion";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function Navbar() {
//   const [drop, setDrop] = useState(false);
//   const containerRef = useRef(null);
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const router = useRouter();

//   return (
//     <header>
//       <div className="flex items-center justify-between px-6 py-6 cursor-default border-b border-transparent-white">
//         <Link className="uppercase text-[1.5rem] z-50 ml-4" href="/">
//           {/* AF Rack<span className="text-gray-400"> Installations</span> */}
//           <Image src="/logo.jpg" alt="logo" height="140" width="140" />
//         </Link>

//         <div className="flex items-center gap-4">
//           {/*
//                 <div className="flex justify-between px-2 items-center gap-4 py-1 bg-gray-200 rounded-full">
//                     <Button
//                     btnName="Contact"
//                     />
//                     <BsFillArrowRightCircleFill className="text-[2rem]"/>
//                 </div> */}

//           <Button
//             icon={BsFillArrowRightCircleFill}
//             label="Contact"
//             onClick={() => router.push("/contact")}
//           />

//           {/* <button className="flex justify-between px-2 items-center gap-4 py-2 bg-gray-200 rounded-full">
//                     <span className="pl-2">Contact</span>
//                 </button> */}

//           <div className="rounded-full bg-gray-300 p-2 z-[999999]">
//             {drop ? (
//               <GrFormClose
//                 className="text-[1.5rem] cursor-pointer"
//                 onClick={() => setDrop(!drop)}
//               />
//             ) : (
//               <RxHamburgerMenu
//                 className="text-[1.5rem] cursor-pointer"
//                 onClick={() => setDrop(!drop)}
//               />
//             )}
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {drop && <DropMenu drop={drop} setDrop={setDrop} />}
//       </AnimatePresence>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
}) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${""} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className: string;
  toggle: any;
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
  href,
  title,
  className = "",
  toggle,
}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}

      <span
        className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${""} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="cursor-auto w-full px-32 py-8 font-medium flex items-end justify-between text-dark bg-light dark:bg-dark dark:text-light relative z-20 lg:px-16 md:px-12 sm:px-8">
        <button
          className="flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="/services" title="Services" className="mx-4" />
            <CustomLink href="/projects" title="Projects" className="mx-4" />
            <CustomLink href="/contact" title="Contact" className="ml-4" />
          </nav>
          <nav className="flex items-center justify-between flex-wrap">
            <motion.a
              href="https://google.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mr-6"
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram size={32} />
            </motion.a>
            <motion.a
              href="https://google.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-6"
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter size={32} />
            </motion.a>
            <motion.a
              href="https://google.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-6"
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href="https://google.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-6"
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube size={32} />
            </motion.a>
            <motion.a
              href="https://google.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 ml-6"
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={32} />
            </motion.a>

            <button
              className={`ml-8 flex items-center justify-center rounded-full p-1 `}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "dark" ? (
                <FaSun className={"fill-light"} size={28} />
              ) : (
                <FaMoon className={"fill-dark"} size={28} />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-w-[70vw] flex flex-col justify-between text-xl z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          >
            <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/services"
                title="Services"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/contact"
                title="Contact"
                className=""
                toggle={handleClick}
              />
            </nav>
            <nav className="flex  items-center justify-center flex-wrap mt-2 text-light dark:text-dark rounded-full">
              <motion.a
                href="https://github.com/angelDova"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mr-6 sm:mx-6"
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={32} />
              </motion.a>
              <motion.a
                href="https://github.com/angelDova"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mx-6 sm:mx-6"
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter size={32} />
              </motion.a>
              <motion.a
                href="https://github.com/angelDova"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mx-6 sm:mx-6"
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                href="https://github.com/angelDova"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mx-6 sm:my-2 sm:mx-6"
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube size={32} />
              </motion.a>
              <motion.a
                href="https://github.com/angelDova"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 ml-6 sm:my-2 sm:mx-6"
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={32} />
              </motion.a>

              <button
                className="ml-8 sm:ml-2 flex items-center justify-center rounded-full p-1"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                {mode === "dark" ? (
                  <FaSun className={"fill-dark"} size={28} />
                ) : (
                  <FaMoon className={"fill-light"} size={28} />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;
