import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import ContactInfo from "./ContactInfo";
import AnimatedText from "@/components/AnimatedText";

export default function page() {
  return (
    <>
      <Head>
        <title>AF Rack Installation | Services Offered</title>
        <meta name="Warehouse Racks" content="AF Rack Installation" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden cursor-default text-dark dark:text-light">
        <Layout className="pt-16 xs:p-4 xs:pt-12">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!4xl sm:mb-8"
            text="Contact Us"
          />

          <p className="py-4 text-xl text-center">
            Please contact us directly to discuss your future project
          </p>
          <ContactInfo />
        </Layout>
      </main>
    </>
  );
}

// export default function page() {
//   return (
//     <>
//       <Head>
//         <title>AF Rack Installation | Services Offered</title>
//         <meta name="Warehouse Racks" content="AF Rack Installation" />
//       </Head>
//       <TransitionEffect />
//       <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden cursor-default text-dark dark:text-light">
//         <Layout className="sm:px-4 xs:p-1">
//           <div className="bg-light inset-0 pt-16 flex items-center px-16 sm:px-4 xs:px-4\ cursor-auto dark:bg-dark text-center">
//             <div className="text-dark dark:text-light font-mono">
//               <h1 className="text-8xl sm:text-5xl xs:text-4xl text-center">
//                 Contact Us
//               </h1>

//               <p className="py-4 text-xl">
//                 Please contact us directly to discuss your future project.
//               </p>
//               <ContactInfo />
//             </div>
//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// }
