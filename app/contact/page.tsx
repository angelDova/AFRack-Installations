import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Head>
        <title>AF Rack Installation | Services Offered</title>
        <meta name="Warehouse Racks" content="AF Rack Installation" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden cursor-default text-dark dark:text-light">
        <Layout className="pt-16 xs:p-1">
          <div className="bg-light inset-0 h-screen flex items-center px-16 cursor-auto dark:bg-dark">
            <div className="text-dark dark:text-light font-mono">
              <h1 className="text-[11rem] xs:text-4xl">Hello,</h1>

              <p className="py-4">
                Please contact me directly for discussing your future project.
              </p>
              <p>Email: Angelfcb01@yahoo.com.com</p>
              <p className="flex gap-4 cursor-pointer mt-2 text-dark dark:text-light">
                On the web:{" "}
                <a
                  href="https://linkedin.com"
                  className=" border-b-2 border-dark "
                >
                  Linkedin
                </a>
                <a
                  href="https://instagram.com"
                  className="border-b-2 border-dark"
                >
                  Twitter
                </a>
                <a
                  href="https://youtube.com"
                  className="border-b-2 border-dark"
                >
                  Youtube
                </a>
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
