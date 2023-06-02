// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import WorksComponent from "./WorksCardComponent.tsx";

// const card = [
//   {
//     image: "/Mezzanine.jpeg",
//     ImgTitle: "no title",
//     name: "Mezzanine",
//     description:
//       "Description goes in here for the customer to see and learn more about our services",
//     onClick: "/github/....",
//   },
//   {
//     image: "/Stairways.jpeg",
//     ImgTitle: "no title",
//     name: "Stairways",
//     description:
//       "Description goes in here for the customer to see and learn more about our services",
//     onClick: "/github/....",
//   },
//   {
//     image: "/Teardown.jpeg",
//     ImgTitle: "no title",
//     name: "Teardown & Dismantle Service",
//     description:
//       "Description goes in here for the customer to see and learn more about our services",
//     onClick: "/github/....",
//   },
//   {
//     image: "/Structural-Racking.jpeg",
//     ImgTitle: "no title",
//     name: "Structual Racking",
//     description:
//       "Description goes in here for the customer to see and learn more about our services",
//     onClick: "/github/....",
//   },

//   {
//     image: "/Selective.webp",
//     ImgTitle: "no title",
//     name: "Selective Racking",
//     description:
//       "Description goes in here for the customer to see and learn more about our services",
//     onClick: "/github/....",
//   },

//   {
//     image: "Maintenance.jpeg",
//     ImgTitle: "no title",
//     name: "All Types of Storage Systems",
//     description:
//       "Description goes in here for the customer to see and learn more about our services",
//     onClick: "/github/....",
//   },

//   {
//     image: "/Push-Back.jpeg",
//     ImgTitle: "no title",
//     name: "Push Back Racking",
//     description:
//       "Description goes in here for the customer to see and learn more about our services",
//     onClick: "/github/....",
//   },

//   {
//     image: "/Shelving.webp",
//     ImgTitle: "no title",
//     name: "Shelving",
//     description:
//       "Description goes in here for the customer to see and learn more about our services",
//     onClick: "/github/....",
//   },
// ];

// export default function Page() {
//   const router = useRouter();

//   return (
//     <div>
//       <div className="flex gap-3 justify-center py-12 flex-wrap cursor-default">
//         {card.map((item) => (
//           <WorksComponent
//             key="item"
//             image={item.image}
//             ImgTitle={item.ImgTitle}
//             name={item.name}
//             description={item.description}
//             onClick={() => router.push(item.onClick)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import service1 from "../../public/images/articles/Structural-Racking.jpeg";
import service2 from "../../public/images/articles/Mezzanine.jpeg";
import service3 from "../../public/images/articles/Stairways.jpeg";
import service4 from "../../public/images/articles/Shelving.webp";
import service5 from "../../public/images/articles/Push-Back.jpeg";
import service6 from "../../public/images/articles/Teardown.jpeg";
import service7 from "../../public/images/articles/Selective.webp";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

interface MovingImgProps {
  title: string;
  img: any;
  link: string;
}

const MovingImg: React.FC<MovingImgProps> = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement>(null);

  function handleMouse(event: { pageX: number }) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
    }
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event: { pageX: number }) {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
    }
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
        <FramerImage
          style={{ x: x, y: y }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
          initial={{ opacity: 0 }}
          src={img}
          alt={title}
          ref={imgRef}
          className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
        />
      </h2>
    </Link>
  );
};

interface ServiceProps {
  img: any;
  title: string;
  date: string;
  link: string;
}

const Service: React.FC<ServiceProps> = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark/10 dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-blue-700 font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

interface FeaturedServiceProps {
  img: any;
  title: string;
  summary: string;
  time: any;
  link: string;
}

const FeaturedService: React.FC<FeaturedServiceProps> = ({
  img,
  title,
  time,
  summary,
  link,
}) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark/10 dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-dark/10" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-full w-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 ">{summary}</p>
      <span className="text-blue-700 font-semibold dark:text-blue-700">
        {time}
      </span>
    </li>
  );
};

const services = () => {
  return (
    <>
      <Head>
        <title>AF Rack Installation | Services Offered</title>
        <meta name="Warehouse Racks" content="AF Rack Installation" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden cursor-default text-dark dark:text-light">
        <Layout className="pt-16 xs:p-4">
          <AnimatedText
            text="Services Offered"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-6 md:grid-cols-1 md:gap-y-16">
            <FeaturedService
              title="Structural Racking"
              summary=" Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time=" 9 min read"
              link="/"
              img={service1}
            />

            <FeaturedService
              title="Mezzanine"
              summary=" Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time=" 9 min read"
              link="/"
              img={service2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Services Included, but not Limited to...
          </h2>
          <ul className="">
            <Service
              title="Stairways"
              img={service3}
              date="March 30, 2023"
              link="/"
            />
            <Service
              title="Shelving"
              img={service4}
              date="March 30, 2023"
              link="/"
            />
            <Service
              title="Pushback"
              img={service5}
              date="March 30, 2023"
              link="/"
            />
            <Service
              title="Teardown"
              img={service6}
              date="March 30, 2023"
              link="/"
            />
            <Service
              title="Selective"
              img={service7}
              date="March 30, 2023"
              link="/"
            />
            <Service
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={service5}
              date="March 30, 2023"
              link="/"
            />
            <Service
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={service3}
              date="March 30, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default services;
