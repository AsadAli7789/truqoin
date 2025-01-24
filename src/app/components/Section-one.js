"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const arr = [
  { title: "Buy on: Moonpay", scr: "/Moonpay.png" },
  { title: "Exchange on Uniswap", scr: "/Uniswap.png" },
  { title: "Trade on GMX", scr: "/GMX.png" },
  { title: "Hold on MetaMask", scr: "/MetaMask.png" },
  { title: "Spend via Crypto.com", scr: "/Crypto.com.png" },
  { title: "Earn on Yearn", scr: "/Yearn.png" },
];

export default function SectionOne() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className=" sm:w-[80vw] mx-auto px-4 py-8 xsm:[90vw]  md:py-16">
      {/* Animated Heading */}
      <motion.h2
        className="text-2xl lg:w-[50vw] lg:mx-auto  md:text-4xl lg:text-[48px] lg:px-14 font-bold text-white text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        ref={sectionRef}
      >
        Lorem ipsum dolor sit amet
      </motion.h2>

      <div className="flex flex-col lg:flex-row  items-center">
        {/* Left Section */}
        <motion.div
          className="  bg-black xl:w-[36vw] xl:h-[20.6vh] xsm:w-[70vw] sm:min-w-[538px] h-fit  rounded-lg  mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid xsm:grid-cols-1  sm:grid-cols-2   ">
            {arr.map((data, ind) => (
              <motion.div
                key={ind}
                id="sec1"
                className="flex items-center font-montserrat xl:w-[17.521vw] xl:h-full  border-white rounded-lg p-4 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={data.scr || "/placeholder.svg"}
                  width={30}
                  height={30}
                  alt="Icon"
                  className="mr-3"
                />
                <span className=" xsm:text-[10px]  lg:text-[1.024vw]  font-montserrat font-[500]">
                  {data.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full  lg:w-1/2 mt-10"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/Frame 2.png"
            width={500}
            height={500}
            alt="Frame"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
