"use client";

import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../buttons/Button";
import { useEffect, useRef, useState } from "react";
import DropMenu from "./DropMenu";
import { GrFormClose } from "react-icons/gr";
import { motion, useCycle } from "framer-motion";
import { slideIn } from "@/app/utils/motion";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [drop, setDrop] = useState(false);
  const containerRef = useRef(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const router = useRouter();

  return (
    <header>
      <div className="flex items-center justify-between px-6 py-6 cursor-default border-b border-transparent-white">
        <Link className="uppercase text-[1.5rem] z-50 ml-4" href="/">
          {/* AF Rack<span className="text-gray-400"> Installations</span> */}
          <Image src="/logo.jpg" alt="logo" height="140" width="140" />
        </Link>

        <div className="flex items-center gap-4">
          {/* 
                <div className="flex justify-between px-2 items-center gap-4 py-1 bg-gray-200 rounded-full">
                    <Button
                    btnName="Contact"
                    />
                    <BsFillArrowRightCircleFill className="text-[2rem]"/>
                </div> */}

          <Button
            icon={BsFillArrowRightCircleFill}
            label="Contact"
            onClick={() => router.push("/contact")}
          />

          {/* <button className="flex justify-between px-2 items-center gap-4 py-2 bg-gray-200 rounded-full">
                    <span className="pl-2">Contact</span>
                </button> */}

          <div className="rounded-full bg-gray-300 p-2 z-[999999]">
            {drop ? (
              <GrFormClose
                className="text-[1.5rem] cursor-pointer"
                onClick={() => setDrop(!drop)}
              />
            ) : (
              <RxHamburgerMenu
                className="text-[1.5rem] cursor-pointer"
                onClick={() => setDrop(!drop)}
              />
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {drop && <DropMenu drop={drop} setDrop={setDrop} />}
      </AnimatePresence>
    </header>
  );
}
