"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section() {
  const ref = useRef(null); // Reference for the observer
  const inView = useInView(ref, { once: true, threshold: 0.1 }); // Trigger animation when 10% of the component is visible

  // Animation Variants
  const titleVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="border-white w-[90%] sm:w-[75%] lg:w-[59.167vw] mx-auto text-pretty text-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate when in view
    >
      <div className="xl:max-w-[650px] my-2 mx-auto  ">
        {/* Title */}
        <motion.div
          className="text-white font-montserrat  font-[700] my-3 text-[2rem] sm:text-[2.5rem] lg:text-[3.7rem] leading-[2.5rem] sm:leading-[3rem] lg:leading-[4.5rem]"
          variants={titleVariants}
        >
          Welcome to our Ecosystem!
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-[#8E8E8E] w-[90%] sm:w-[80%] lg:text-[14px] xl:font-[500] xl:text-[18px] lg:w-[60%] xl:w-[90%] mx-auto font-montserrat my-6 font-[500] text-[12px] sm:text-[12px] leading-[14px] sm:leading-[14px]"
          variants={descriptionVariants}
        >
          TrūQoin™ – A Decentralized Autonomous Organization
        </motion.div>
      </div>
      {/* Avatar and Text */}
      <div className="xl:max-w-[1320px] mx-auto">
        <Image
          src={"/main.png"}
          height={0}
          className="mx-auto"
          width={0}
          layout="responsive"
        />
      </div>
      <motion.div
        className="flex items-center justify-center gap-4 w-[90%] sm:w-[75%] lg:w-[50%] mt-8 mx-auto"
        variants={bottomVariants}
      >
        <Image
          src={"/avater.png"}
          alt="Avatar"
          width={100}
          height={100}
          className="sm:w-[100px] sm:h-[30px] lg:w-[120px] lg:h-[25px] md:h-[30px]"
        />
        <div className="text-white font-montserrat font-[700] text-[14px] sm:text-[18px] lg:text-[16px] xl:text-[20px] leading-[16px] sm:leading-[22px]">
          20k Verified Users
        </div>
      </motion.div>
      <div className="mb-6 mt-2 text-[#8E8E8E] font-montserrat font-[500] xl:font-[500] xl:text-[18px]  text-[12px] sm:text-[12px] leading-[14px] sm:leading-[14px] ">
        Rewarding activities – that build sustainable growth.
      </div>
      {/* Button */}
      <motion.div variants={bottomVariants}>
        <button className="w-full sm:w-[50%] lg:w-[19.5vw] py-3 text-[10px] font-montserrat text-white rounded-[8px] border border-[#EE5A02] font-medium hover:bg-[#EE5A02] transition-colors duration-300">
          Get Started
        </button>
      </motion.div>
    </motion.div>
  );
}
