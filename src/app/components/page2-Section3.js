"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Pge2() {
  const ref = useRef(null);
  // const isInView = useInView(ref, { triggerOnce: true, threshold: 0 });

  return (
    <>
      <div className="border-white mt-20">
        <div className="md:w-[83.162vw] xl:max-w-[1071px] w-[90vw] font-montserrat border-white mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[70vw] xl:max-w-[1071px] border-white mx-auto text-center"
          >
            <div className=" text-[28px] md:text-[48px] font-montserrat  font-[700] text-white">
              About Us
            </div>

            <div className="text-[13px] md:text-[30px] md:leading-[36.57px] mx-auto  text-[#8E8E8E]  font-montserrat  font-[400] ">
              TrūQoin is a groundbreaking cryptocurrency designed to make
              financial freedom accessible to everyone. Built on the TRON
              blockchain, we’ve created a unique system where your activities
              within the TrūIQ Global ecosystem translate directly into rewards.
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-[102.4vw] xl:max-w-[1400px] place-content-center mx-auto"
      >
        <Image width={0} height={0} layout="responsive" src={"/tab.png"} />
      </motion.div>
    </>
  );
}
