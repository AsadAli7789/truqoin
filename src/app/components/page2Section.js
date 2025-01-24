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
      className="w-[90vw] p-4 lg:w-[106.8vw] mx-auto flex flex-col rounded-[20px] justify-center items-center text-center max-w-[1459px] h-[70vh] max-h-[373px] lg:h-[61.44vh] border border-white"
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="text-[8vw] lg:text-[3.513vw] leading-[8vw] lg:leading-[4vw] text-[#ffff] font-montserrat font-[700]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Be Part of the Future
      </motion.div>
      <motion.div
        className="text-[12px] lg:text-[14px] w-[80vw] lg:w-[45.5vw] my-4 lg:my-8 leading-[16px] lg:leading-[17.5px] text-[#ffff] font-montserrat font-[600]"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        TrūQoin isn’t just a cryptocurrency—it’s your key to a new way of
        earning and thriving. Join us today and take the first step towards
        financial freedom.
      </motion.div>
      <motion.div
        className="w-[60vw] lg:w-[22.98vw] bg-white border py-3 my-2 text-[10px] lg:text-[12px] rounded-[8px] cursor-pointer hover:bg-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        Join us
      </motion.div>
    </motion.div>
  );
}
