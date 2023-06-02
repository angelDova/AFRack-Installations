"use client";

import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface AnimatedNumbersProps {
  value: any;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const page = () => {
  return (
    <>
      <Head>
        <title>AF Rack Installation | About Us</title>
        <meta name="Warehouse Racks" content="AF Rack Installation" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center cursor-default text-dark dark:text-light">
        <Layout className="pt-16 xs:p-4 xs:pt-12">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!4xl sm:mb-8"
            text="A Little About Us"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 xs:px-4 lg:flex lg:flex-col ">
            <div className="col-span-3 flex flex-col items-start xs:items-center justify-start xl:col-span-4 md:order-2 md:col-span-8 mr-16 xs:mr-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Us
              </h2>
              <p className="font-medium">
                Since our establishment in 2008, our primary goal has been to
                offer cost-effective and efficient storage solutions for
                warehouse operations. Throughout our journey, we have
                consistently prioritized our customers by emphasizing
                reliability, responsiveness, and unmatched support. At AF Rack
                Installations, our team takes immense pride in embodying core
                values such as dedication to customers, service, teamwork,
                quality, safety, and responsibility.
              </p>
              <p className="font-medium my-4">
                As we expand our capabilities, broaden our product offerings,
                and extend our reach across the nation, our vision remains
                focused on becoming the foremost leader in comprehensive
                material handling solutions. We aspire to be the premier
                provider of new and used warehouse racking, delivering turn-key
                solutions that cater to the diverse needs of our customers, all
                conveniently available under one roof.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark/90 dark:border-light xl:col-span-4 md:col-span-8 md:order-1 mr-16 xs:mx-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src="/rack-animated.jpeg"
                alt="AFRackInstallation"
                className="w-full h-auto rounded-2xl"
                height="100"
                width="280"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>

          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default page;
