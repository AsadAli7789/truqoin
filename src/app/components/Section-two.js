"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionTwo() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div
      ref={sectionRef} // Attach ref to detect visibility
      className="mx-auto flex flex-col items-center w-[90vw] max-w-[60.741vw]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Image Section */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={isInView ? { scale: 1 } : { scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={"/Macbook Pro 2.png"}
          className="mx-auto"
          width={700}
          height={700}
          alt="Macbook"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full text-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-white text-[1.5rem] sm:text-[2rem] font-[700] my-4 font-montserrat leading-[1.8rem] sm:leading-[2rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <p className="text-[#8E8E8E] font-montserrat font-[600] my-4 tracking-tighter text-[12px] sm:text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>

        {/* Button with Motion */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          id="btn"
          className="text-[12px] sm:text-[14px] my-4 text-white w-[90%] sm:w-[31.234vw] py-2 rounded-[8px] bg-[#FF8A00]"
        >
          Start Earning
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
