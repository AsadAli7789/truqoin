"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MiddleMobile from "./Middlemobile";
import LeftMobile from "./LeftMobile";
import RightMobile from "./rightMobile";

const MobileSection = () => {
  const leftRef = useRef(null);
  const middleRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { once: true });
  const isMiddleInView = useInView(middleRef, { once: true });
  const isRightInView = useInView(rightRef, { once: true });

  return (
    <div className=" border-white hidden  mx-auto lg:w-fit place-content-center relative md:w-[70vw]  gap-6  items-center  justify-between lg:flex">
      {/* Left Image */}
      <div
        id="M_sec"
        className="absolute  w-[769px] h-[742px] rounded-full left-[10%] "
      ></div>
      <motion.div
        className="w-[293px] border-white h-[636px]"
        ref={leftRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <LeftMobile />
      </motion.div>

      {/* Middle Image */}
      <motion.div
        className="w-[390px] border-white h-[800px]"
        ref={middleRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isMiddleInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <MiddleMobile />
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-[293px] border-white h-[636px]"
        ref={rightRef}
        initial={{ opacity: 0, x: 50 }}
        animate={isRightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <RightMobile />
      </motion.div>
    </div>
  );
};

export default MobileSection;
