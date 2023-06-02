// "use client";

// import Button from "@/components/buttons/Button";
// import { useEffect, useState } from "react";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { motion } from "framer-motion";
// import { slideIn, staggerContainer, textVariant } from "../utils/motion";

// interface Hero {
//   textEnter: () => void;
//   textLeave: () => void;
//   variants: any;
//   cursorVariant: any;
// }

// export default function Hero() {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });
//   const [cursorVariant, setCursorVariant] = useState("default");

//   useEffect(() => {
//     const mouseMove = (e: any) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   const variant: any = {
//     default: {
//       x: mousePosition.x - 16,
//       y: mousePosition.y - 16,
//     },
//     text: {
//       height: 150,
//       width: 150,
//       x: mousePosition.x - 75,
//       y: mousePosition.y - 75,
//       backgroundColor: "rgb(244, 244, 244)",
//       mixBlendMode: "difference",
//     },
//     textwhite: {
//       height: 150,
//       width: 150,
//       x: mousePosition.x - 75,
//       y: mousePosition.y - 75,
//       backgroundColor: "rgb(255, 255, 255)",
//       mixBlendMode: "difference",
//     },
//   };

//   const textEnter = () => setCursorVariant("text");
//   const textLeave = () => setCursorVariant("default");

//   return (
//     <div className="my-10">
//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.25 }}
//         className="flex flex-col items-center justify-center h-[88vh] px-[5%] select-none"
//       >
//         <div>
//           <motion.div
//             className="cursor"
//             variants={variant}
//             animate={cursorVariant}
//           />
//           <motion.h1
//             variants={textVariant(1.1)}
//             onMouseEnter={textEnter}
//             onMouseLeave={textLeave}
//             className="md:text-[6.1rem] text-[3rem] uppercase leading-[1.2]"
//           >
//             <span className="text-gray-500">Family Owned</span> & Operated{" "}
//             <span className="text-gray-500">For More Than</span> 15 Years!
//           </motion.h1>
//         </div>

//         <motion.div
//           variants={textVariant(1.2)}
//           className="flex md:flex-row flex-col justify-between w-full pt-16"
//         >
//           <div
//             className="w-[330px]"
//             onMouseEnter={textEnter}
//             onMouseLeave={textLeave}
//           >
//             <h3 className="text-2xl font-medium">
//               Let us build your warehouse
//             </h3>
//             <p className="mt-4">
//               {`
//               With a collective experience of more than 15 years, our team
//               possesses extensive expertise in installing various types of
//               pallet racking systems. We eagerly anticipate the opportunity to
//               assist you in elevating your business to the next level! For
//               further details, please don't hesitate to reach out to us.`}
//             </p>
//           </div>

//           <div className="md:w-[500px] w-[370px] flex flex-col gap-6 items-start">
//             <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
//               I create successful digital presences for innovative startups and
//               established businesses with cutting-edge UI/UX design and Webflow
//               development.
//             </p>
//             <Button
//               onClick={() => {}}
//               label="Contact us for a free quote"
//               icon={BsFillArrowRightCircleFill}
//               dark
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
