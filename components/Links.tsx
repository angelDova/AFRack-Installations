"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowUpRight } from "react-icons/bs";

interface LinkProps {
  path: string;
  name: string;
  last?: boolean;
}

export default function Links({ path, name, last }: LinkProps) {
  return (
    <Link
      href={path}
      className={`pseudo cursor-pointer pb-4 min-h-[100%] w-full justify-center flex relative items-end hover:text-gray-500 ${
        last ? " before:w-0 before:hidden" : ""
      }`}
    >
      <div className="flex items-center gap-6 last hover:last-of-type:-rotate-12">
        <div className="">{name}</div>
        <BsArrowUpRight className="" />
      </div>
    </Link>
  );
}
