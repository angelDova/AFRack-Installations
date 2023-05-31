"use client";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

interface FeaturedProjectsProps {
  type: string;
  title: string;
  summary: string;
  img: any;
  link: string;
  github: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-black bg-white shadow-2xl p-12 relative rounded-br-2xl dark:bg-black/90 dark:border-white">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl dark:bg-white " />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-blue-700 font-medium text-xl dark:text-blue-700">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-white">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-white">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-12">
            <FaGithub size={46} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold dark:bg-white dark:text-black"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

interface ProjectProps {
  title: string;
  type: string;
  img: any;
  link: string;
  github: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  type,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-black bg-white shadow-2xl p-6 relative dark:bg-black/90 dark:border-white">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl dark:bg-white" />

      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <div className="full flex flex-col items-start justify-between mt-4">
        <span className="text-blue-700 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-10">
            <FaGithub size={46} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold hover:underline underline-offset-2"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>AF Rack Installation | Previous Projects</title>
        <meta name="description" content="AF Rack Installation" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center cursor-default dark:text-white">
        <Layout className="pt-16">
          <AnimatedText text="Previous Projects Done" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProjects
                title="The Title of the Project Goes Here"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="The Title of the Project Goes Here"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="The Title of the Project Goes Here"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProjects
                title="The Title of the Project Goes Here"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="The Title of the Project Goes Here"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="The Title of the Project Goes Here"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
