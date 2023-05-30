// "use client";

// import { useRouter } from "next/navigation";
// import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

// function Footer() {
//   const router = useRouter();

//   return (
//     <>
//       <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 cursor-default">
//         <div className="p-5 ">
//           <ul>
//             <p className="text-gray-800 font-bold text-3xl pb-6">
//               AF Rack <span className="text-blue-600">Installations</span>
//             </p>
//             <div className="flex gap-6 pb-5">
//               <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
//               <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
//               <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
//               <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
//             </div>
//           </ul>
//         </div>
//         <div className="p-5">
//           <ul>
//             <p className="text-gray-800 font-bold text-2xl pb-4">Menu</p>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Works
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Services
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               About
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Contact
//             </li>
//           </ul>
//         </div>
//         <div className="p-5">
//           <ul>
//             <p className="text-gray-800 font-bold text-2xl pb-4">Contact</p>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               13925 Bora Dr
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               La Mirada, CA 90638
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Mon - Fri, 7:00am - 6:00pm
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Office: 562-447-7629
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Contact us for more!
//             </li>
//           </ul>
//         </div>
//         <div className="p-5">
//           <ul>
//             <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Contact
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Support Portals
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               List Of Charges
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Downloads & Resources
//             </li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
//               Videos
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
//         <h1 className=" text-gray-800 font-semibold">
//           © 2023 All rights reserved | Built with ❤ by{" "}
//           <span
//             onClick={() => router.push("https://github.com/angelDova")}
//             className="hover:text-blue-600 font-semibold cursor-pointer"
//           >
//             angelDova{" "}
//           </span>
//         </h1>
//       </div>
//     </>
//   );
// }

// export default Footer;

"use client";

import Layout from "@/components/Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg cursor-default">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built by&nbsp;
          <Link
            className="underline underline-offset-2"
            href="/https://github.com/angelDova"
          >
            angelDova
          </Link>
        </div>
        <Link className="underline underline-offset-2" href="/contact">
          Contact
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
