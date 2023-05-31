// import Footer from "./scenes/Footer";
// import Hero from "./scenes/Hero";

import AnimatedText from "@/components/AnimatedText";
import GetAQuote from "@/components/GetAQuote";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex items-center text-black w-full min-h-screen cursor-default dark:text-white">
      {/* <Hero /> */}
      {/* <Footer /> */}
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <Image
              src="/logo.jpg"
              alt="AFRackInstallations"
              className="w-full h-auto cursor-pointer"
              height="100"
              width="260"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Let us Handle the Hard Part. Allow us to Build your Warehouse."
              className="!text-6xl text-left"
            />
            <p className="my-4 text-base font-medium">
              {`
               With a collective experience of more than 15 years, our team
               possesses extensive expertise in installing various types of
               pallet racking systems. We eagerly anticipate the opportunity to
               assist you in elevating your business to the next level! For
              further details, please don't hesitate to reach out to us.`}
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/dummy.pdf"
                target={"_blank"}
                className="flex items-center bg-neutral-950 text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black"
                download={true}
              >
                Request a Quote <FaExternalLinkAlt className={"w-6 ml-1"} />
              </Link>
              <Link
                href="mailto:angelfcb01@yahoo.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-black underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <GetAQuote />
      {/* <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image
          src="/rack-animated.jpeg"
          alt="AFRackInstallations"
          className="w-full rounded-full"
          height="100"
          width="280"
        />
      </div> */}
    </main>
  );
}
