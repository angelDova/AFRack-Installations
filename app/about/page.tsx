"use client";

import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
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
        <meta name="description" content="AF Rack Installation" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center cursor-default">
        <Layout className="pt-16">
          <AnimatedText className="mb-16" text="A Little About Us" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-black/75">
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

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black" />
              <Image
                src="/rack-animated.jpeg"
                alt="AFRackInstallation"
                className="w-full h-auto rounded-2xl"
                height="100"
                width="280"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75">
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
