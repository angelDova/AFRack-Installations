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
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
        className={`h-[1px] inline-block w-0 bg-neutral-950 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${""}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <>
      <header className="cursor-auto w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/services" title="Services" className="mx-4" />
          <CustomLink href="/" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-between flex-wrap">
          <motion.a
            href="https://github.com/angelDova"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-6"
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/angelDova"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-6"
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/angelDova"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-6"
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/angelDova"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-6"
            whileTap={{ scale: 0.9 }}
          >
            <FaYoutube size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/angelDova"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 ml-6"
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={32} />
          </motion.a>
        </nav>

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;
