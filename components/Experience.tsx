"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        className=""
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-blue-700 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75 dark:text-white/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Owner"
            company="AF Rack Installation"
            companyLink="https://af-rack.vercel.app"
            time="2008-2023"
            address="13925 Bora Dr. La Mirada, CA. 90638"
            work="Warehouse Racking"
          />
          <Details
            position="Owner"
            company="AF Rack Installation"
            companyLink="https://af-rack.vercel.app"
            time="2008-2023"
            address="13925 Bora Dr. La Mirada, CA. 90638"
            work="Warehouse Racking"
          />
          <Details
            position="Owner"
            company="AF Rack Installation"
            companyLink="https://af-rack.vercel.app"
            time="2008-2023"
            address="13925 Bora Dr. La Mirada, CA. 90638"
            work="Warehouse Racking"
          />
          <Details
            position="Owner"
            company="AF Rack Installation"
            companyLink="https://af-rack.vercel.app"
            time="2008-2023"
            address="13925 Bora Dr. La Mirada, CA. 90638"
            work="Warehouse Racking"
          />
          <Details
            position="Owner"
            company="AF Rack Installation"
            companyLink="https://af-rack.vercel.app"
            time="2008-2023"
            address="13925 Bora Dr. La Mirada, CA. 90638"
            work="Warehouse Racking"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
