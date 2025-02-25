"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const footerVariants = {
    hidden: { y: "50%", opacity: 0, scale: 0.8 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of the footer visible before triggering
  });
  return (
    <motion.footer
      id="Footer-bg"
      className="body-font    relative  "
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={footerVariants}
    >
      <div className="lg:w-[68.75vw] md:w-fit   py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="text-xl mb-4">
              <Link href={"/"}>
                <Image
                  src={"/footerlogo.png"}
                  width={140}
                  height={140}
                  alt="not found"
                />
              </Link>
            </span>
          </a>

          <p className="mt-2  text-[13px] md:text-[14px]  text-[#8E8E8E]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2
              id="h2"
              className="font-[700] font-montserrat text-[16px] mb-6 md:mb-10"
            >
              TruQoin
            </h2>
            <nav className="list-none mb-10 text-[13px] md:text-[14px] font-montserrat font-[600]">
              <li className="my-3" onClick={() => redirect("/")}>
                <a className="text-[#8E8E8E] hover:text-white  cursor-default">
                  Earn
                </a>
              </li>
              <li className="my-3" onClick={() => redirect("/")}>
                <a className="text-[#8E8E8E] hover:text-white  cursor-default">
                  Trade
                </a>
              </li>
              <li className="my-3" onClick={() => redirect("/")}>
                <a className="text-[#8E8E8E] hover:text-white  cursor-default">
                  Spend
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2
              id="h2"
              className="font-[700] font-montserrat text-[16px] md:text-[14px]  mb-6 md:mb-10"
            >
              Company
            </h2>
            <nav className="list-none mb-10 text-[13px] md:text-[14px] font-montserrat font-[600]">
              <li className="my-3" onClick={() => redirect("/")}>
                <a className="text-[#8E8E8E] hover:text-white cursor-default">
                  Doc
                </a>
              </li>
              <li className="my-3">
                <a
                  href="/about"
                  className="text-[#8E8E8E] hover:text-white cursor-default"
                >
                  About
                </a>
              </li>
              <li className="my-3" onClick={() => redirect("/contact")}>
                <a className="text-[#8E8E8E] hover:text-white cursor-default">
                  Contact
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-2/4 md:w-1/2 w-full px-4">
            <h2
              id="h2"
              className="font-[700] font-montserrat text-[16px]  mb-10"
            >
              Web
            </h2>
            <nav className="list-none mb-10 flex justify-center md:justify-start ">
              <div className="w-[20vw]   hover:scale-[1.1] duration-300 h-[7vw] flex justify-center items-center relative">
                <div className="absolute lg:w-[19vw] md:w-[28vw] xsm:w-[65vw] w-[80vw]">
                  <Image
                    src={"/Frame 5.png"}
                    width={120}
                    height={120}
                    layout="responsive"
                    alt="not found"
                  />
                </div>
                <button
                  id="glass-container"
                  className="z-1 flex text-[14px] font-[700] font-montserrat text-white border px-12 py-3 absolute"
                >
                  <svg
                    className="mr-3"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.92261 0.943359C1.46968 0.943359 1.0353 1.12328 0.715036 1.44355C0.394768 1.76382 0.214844 2.1982 0.214844 2.65112L0.214844 11.7592C0.214844 12.2121 0.394768 12.6465 0.715036 12.9668C1.0353 13.287 1.46968 13.467 1.92261 13.467H5.90739V16.8825H2.49186V18.021H15.0155V16.8825H11.5999V13.467H15.5847C16.0376 13.467 16.472 13.287 16.7923 12.9668C17.1126 12.6465 17.2925 12.2121 17.2925 11.7592V2.65112C17.2925 2.1982 17.1126 1.76382 16.7923 1.44355C16.472 1.12328 16.0376 0.943359 15.5847 0.943359L1.92261 0.943359ZM7.0459 16.8825V13.467H10.4614V16.8825H7.0459Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.92261 0.943359C1.46968 0.943359 1.0353 1.12328 0.715036 1.44355C0.394768 1.76382 0.214844 2.1982 0.214844 2.65112L0.214844 11.7592C0.214844 12.2121 0.394768 12.6465 0.715036 12.9668C1.0353 13.287 1.46968 13.467 1.92261 13.467H5.90739V16.8825H2.49186V18.021H15.0155V16.8825H11.5999V13.467H15.5847C16.0376 13.467 16.472 13.287 16.7923 12.9668C17.1126 12.6465 17.2925 12.2121 17.2925 11.7592V2.65112C17.2925 2.1982 17.1126 1.76382 16.7923 1.44355C16.472 1.12328 16.0376 0.943359 15.5847 0.943359L1.92261 0.943359ZM7.0459 16.8825V13.467H10.4614V16.8825H7.0459Z"
                      fill="url(#paint0_linear_84_304)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_84_304"
                        x1="37.501"
                        y1="-16.6549"
                        x2="-9.86551"
                        y2="-11.6186"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop />
                        <stop offset="0.325" stopColor="#A80601" />
                        <stop offset="0.785" stopColor="#EE5A02" />
                        <stop offset="1" stopColor="#DDB28F" />
                      </linearGradient>
                    </defs>
                  </svg>
                  WebApp
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="lg:w-[68.75vw] mx-auto">
        <div className="border-t mt-2 border-[#343434]"></div>
        <div className="text-[#8E8E8E] font-montserrat font-[500] text-[12px] flex justify-between">
          <h2>©2023 - TruQoin - All rights reserved.</h2>
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </motion.footer>
  );
}
