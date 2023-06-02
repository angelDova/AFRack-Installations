import AnimatedText from "@/components/AnimatedText";
import GetAQuote from "@/components/ContractUs";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "../public/images/articles/logo.jpg";
import profile1 from "../public/profile.jpg";
import Logo2 from "../public/rack-animated.jpeg";

import { FaExternalLinkAlt } from "react-icons/fa";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen cursor-default bg-light dark:text-light dark:bg-dark/10">
        {/* <Hero /> */}
        {/* <Footer /> */}
        <Layout className="pt-0 dark:bg-transparent md:pt-16 sm:pt-8 xs:p-4 xs:py-6">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full xs:pb-8">
              <Image
                src={Logo2}
                alt="AFRackInstallations"
                className="w-full h-auto md:inline-block md:w-full pr-4 rounded-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className=" flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
              <AnimatedText
                text="Let's Build Your Warehouse"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className=" my-4 text-base font-medium md:text-sm sm:text-xs xs:m-4">
                {`
               With a collective experience of more than 15 years, our team
               possesses extensive expertise in installing various types of
               pallet racking systems. We eagerly anticipate the opportunity to
               assist you in elevating your business to the next level! For
              further details, please don't hesitate to reach out to us.`}
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Request a Quote <FaExternalLinkAlt className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:angelfcb01@yahoo.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <GetAQuote />
        {/* <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
        <Image
          src="/rack-animated.jpeg"
          alt="AFRackInstallations"
          className="w-full rounded-full"
          height="100"
          width="280"
        />
      </div> */}
      </main>
    </>
  );
}
