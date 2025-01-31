"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionThree() {
  return (
    <div className="w-[80vw] mx-auto mt-10 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row xl:gap-20 xl:w-[68.75vw] mx-auto">
        {/* Image Section with Motion */}
        <motion.div
          className="w-full  flex items-center lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full ">
            <Image
              src="/Dashboard.png"
              alt="Dashboard"
              width={0}
              height={0}
              layout="responsive"
              // objectFit="contain"
              // priority
            />
          </div>
        </motion.div>

        {/* Text Section with Motion */}
        <motion.div
          className="w-full lg:w-1/2 py-6 px-4  xl:px-8 xl:mt-8  xl:pr-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="mt-4  lg:mt-0 ">
            <motion.h2
              className="text-3xl lg:text-[2.5vw] lg:leading-[3vw] xl:text-[2.5vw]  text-white font-[700] font-montserrat   xl:leading-[3.047vw] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </motion.h2>
            <motion.p
              className="text-sm xl:text-[0.729vw]  lg:text-[0.729vwvw] lg:leading-[1.4vw] font-montserrat text-[#8E8E8E] font-[500]  mb-6 xl:pr-32 leading-relaxed xl:leading-[0.911vw] tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </motion.p>

            {/* Button with Hover Animation */}
            <motion.button
              className="w-full lg:w-[16.354vw] py-4 text-xs text-white font-montserrat rounded-[10px] border border-[#EE5A02] font-medium hover:bg-[#EE5A02] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              Start earning
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
