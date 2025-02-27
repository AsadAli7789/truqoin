"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Future() {
  const ref = useRef(null); // Ref for observation
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <motion.div
      id="page2"
      ref={ref}
      className="w-[90vw] p-4 xl:w-[90vw] lg:w-[90vw] mx-auto flex flex-col rounded-[50px] justify-center items-center text-center max-w-[1459px] h-[70vh] max-h-[373px] lg:h-[61.44vh]  border-white"
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className=" text-[28px] leading-[28px] md:text-[48px] md:leading-[48px] max-w-[690px]  text-[#ffff] font-montserrat font-[700]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Our People
      </motion.div>
      <motion.div
        className="text-[13px] md:text-[14px] w-[80vw] lg:w-[45.5vw] max-w-[690px] my-4 lg:my-8 leading-[16px] lg:leading-[17.5px] text-[#ffff] font-montserrat font-[400]"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        The real power of cryptocurrency and digital assets is the activity of
        the people engaged in its creation and use. From miners to users,
        product creators to markers, TrūQoin harnesses the energy from everyone
        involved and creates a stronger, more stable and valuable project.
      </motion.div>
      <motion.div
        className="w-[60vw] lg:w-[22.98vw] bg-white duration-500 py-3 my-2 text-[10px] lg:text-[12px] rounded-[8px] cursor-pointer hover:bg-black hover:text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        Join us
      </motion.div>
    </motion.div>
  );
}
