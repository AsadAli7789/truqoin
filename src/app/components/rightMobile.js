"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function RightMobile({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [trans, settrans] = useState(1);
  return (
    <div
      id="M_bg"
      className={`border-white w-[100%] shadow-lg  max-w-[300px]  xsm1:max-w-[390px]  shadow-black h-[100%] p-4 sm:p-6   gap-3 flex rounded-[10px] flex-col ${className}`}
    >
      {/* Header Section */}
      <div className="  border-white w-[100%] h-[10%] py-4 px-2 flex justify-between">
        <div className="flex gap-3">
          <button
            id="sec4"
            className="px-2 py-4 h sm:p-0  lg:p-0 sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px]  flex justify-center items-center border border-[#343434] rounded-[5px]"
          >
            <Image
              width={24}
              height={24}
              src={"/Final.png"}
              // layout="responsive"
            />
            {/* <svg
              width="20"
              height="20"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3264 17.6595L15.4211 12.5089C16.3069 10.8013 16.5883 8.82024 16.2155 6.91609C15.8427 5.01194 14.8398 3.30736 13.384 2.10382C11.9283 0.900275 10.1136 0.27531 8.26081 0.33945C6.40803 0.403589 4.63657 1.1527 3.25971 2.4543C1.88285 3.7559 0.989316 5.52613 0.737118 7.45192C0.48492 9.37771 0.890313 11.335 1.8816 12.9776C2.87289 14.6202 4.3862 15.8423 6.15391 16.4277C7.92162 17.0132 9.82983 16.9243 11.5411 16.1768L12.7433 17.6595H19.3264ZM2.56078 8.57325C2.56078 7.33413 2.91119 6.12284 3.56771 5.09255C4.22423 4.06226 5.15736 3.25925 6.24911 2.78506C7.34086 2.31087 8.54219 2.1868 9.70119 2.42854C10.8602 2.67028 11.9248 3.26697 12.7604 4.14316C13.596 5.01935 14.165 6.13568 14.3955 7.35099C14.6261 8.5663 14.5078 9.826 14.0555 10.9708C13.6033 12.1156 12.8375 13.0941 11.855 13.7825C10.8724 14.4709 9.71727 14.8383 8.53556 14.8383C6.95095 14.8383 5.43124 14.1783 4.31075 13.0033C3.19026 11.8284 2.56078 10.2349 2.56078 8.57325Z"
                fill="#FF6300"
              />
              <path
                d="M12.6501 4.01855V5.9968H9.60479V14.6293H7.48283V5.9968H4.4375V4.01855H12.6501Z"
                fill="#FF6300"
              />
            </svg> */}
          </button>
        </div>

        <div className="flex gap-3">
          <button
            id="sec4"
            className="px-2 py-4 sm:p-0  lg:p-0 sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px]  flex justify-center items-center border border-[#343434] rounded-[5px]"
          >
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.85 14.825L10 12.925L13.15 14.85L12.325 11.25L15.1 8.85L11.45 8.525L10 5.125L8.55 8.5L4.9 8.825L7.675 11.25L6.85 14.825ZM3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#8C8C8C"
              />
            </svg>
          </button>
          <button
            id="sec4"
            className="px-3 py-4 sm:p-0  lg:p-0 sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px]  flex justify-center items-center border border-[#343434] rounded-[5px]"
          >
            <svg
              width="8"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z"
                fill="#8C8C8C"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="relative lg:h-10 h-20  ">
        <div className="absolute  lg:w-[104%] w-[100%]">
          <Image src={"/rt.png"} layout="responsive" width={0} height={0} />
        </div>
      </div> */}
      {/* Main Content */}
      <motion.div
        ref={ref}
        id="M_innerSection"
        className="flex flex-col overflow-scroll  scrollbar-hide border-white px-4 pt-4 w-[100%] h-[90%]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Ring Section */}
        <div className="w-[100%] h-[15%]  pt-4 mt-4  justify-between border-white  flex mx-auto">
          <div>
            <button
              onClick={() => settrans(2)}
              id="Right_M_btn"
              className={`sm:p-4 px-2 py-1 lg:p-0  sm:w-[80px] sm:h-[80px] xl:w-[2vw] xl:h-[2vw] md:w-[2vw] md:h-[2vw] flex justify-center items-center border ${
                trans == 1 ? "text-[#FFFFFF]" : "text-[#4B4B4B]"
              } border-[#343434] rounded-[5px]`}
            >
              <svg
                width="8"
                height="20"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="sm:text-[24px] md:text-[1.25vw]   xl:text-[.8vw] font-montserrat font-[600]  text-[#BABABA]">
              Transactions
            </div>
            <div className="  relative w-[90%]  overflow-hidden h-[50%] flex mx-auto text-[16px] text-center font-montserrat font-[400] leading-[19.5px] text-[#BABABA]">
              <div
                className={`absolute  left-0 transition-transform duration-300 ${
                  trans == 2 ? "translate-x-[100%]" : ""
                } right-0`}
              >
                Block 7
              </div>
              <div
                className={`absolute  left-0  transition-transform duration-300 ${
                  trans == 1 ? "translate-x-[-100%]" : ""
                }  right-0`}
              >
                Block *
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => settrans(1)}
              id="Right_M_btn"
              className={`sm:p-4 px-2 py-1 lg:p-0   sm:w-[80px] sm:h-[80px] xl:w-[2vw] xl:h-[2vw] md:w-[2vw] md:h-[2vw] flex justify-center items-center border ${
                trans == 2 ? "text-[#FFFFFF]" : "text-[#4B4B4B]"
              } border-[#343434] rounded-[5px]`}
            >
              <svg
                width="8"
                height="20"
                className="rotate-180"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Wallet List */}
        <div className="w-[100%] h-[90%]  pt-10 justify-between border-white  flex mx-auto">
          <div
            id="scroller"
            className=" border-white relative overflow-x-hidden    w-[100%]"
          >
            <div
              className={`absolute  left-0 transition-transform duration-300 ${
                trans == 2 ? "translate-x-[100%]" : ""
              } right-0`}
            >
              <Image
                width={0}
                height={0}
                src={"/RightMoblie.png"}
                layout="responsive"
              />
            </div>
            <div
              className={`absolute  left-0  transition-transform duration-300 ${
                trans == 1 ? "translate-x-[-101%]" : ""
              }  right-0`}
            >
              <Image
                width={0}
                height={0}
                src={"/wrapper.png"}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
