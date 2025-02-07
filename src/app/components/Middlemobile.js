"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const arry = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

export default function MiddleMobile({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="M_bg"
      className={`border-white w-[100%]  rounded-[14px] max-w-[300px]  xsm1:max-w-[390px] h-[100%] p-4 sm:p-6 gap-3 flex flex-col ${className}`}
    >
      {/* Header Section */}
      <div className="  border-white w-[100%] h-[10%] py-4 px-2 flex justify-between">
        <div className="flex gap-3">
          <button
            id="sec4"
            className="px-2 py-4 sm:p-0  lg:p-0 sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px]  flex justify-center items-center border border-[#343434] rounded-[5px]"
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
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.3 15.9C17.4833 16.0833 17.575 16.3167 17.575 16.6C17.575 16.8833 17.4833 17.1167 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                fill="#BABABA"
              />
            </svg>
          </button>
          <button
            id="sec4"
            className="px-2 py-4 sm:p-0  lg:p-0 sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px]  flex justify-center items-center border border-[#343434] rounded-[5px]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C6.7 18 4.69583 17.2375 2.9875 15.7125C1.27917 14.1875 0.3 12.2833 0.05 10H2.1C2.33333 11.7333 3.10417 13.1667 4.4125 14.3C5.72083 15.4333 7.25 16 9 16C10.95 16 12.6042 15.3208 13.9625 13.9625C15.3208 12.6042 16 10.95 16 9C16 7.05 15.3208 5.39583 13.9625 4.0375C12.6042 2.67917 10.95 2 9 2C7.85 2 6.775 2.26667 5.775 2.8C4.775 3.33333 3.93333 4.06667 3.25 5H6V7H0V1H2V3.35C2.85 2.28333 3.8875 1.45833 5.1125 0.875C6.3375 0.291667 7.63333 0 9 0C10.25 0 11.4208 0.2375 12.5125 0.7125C13.6042 1.1875 14.5542 1.82917 15.3625 2.6375C16.1708 3.44583 16.8125 4.39583 17.2875 5.4875C17.7625 6.57917 18 7.75 18 9C18 10.25 17.7625 11.4208 17.2875 12.5125C16.8125 13.6042 16.1708 14.5542 15.3625 15.3625C14.5542 16.1708 13.6042 16.8125 12.5125 17.2875C11.4208 17.7625 10.25 18 9 18ZM11.8 13.2L8 9.4V4H10V8.6L13.2 11.8L11.8 13.2Z"
                fill="#BABABA"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        ref={ref}
        id="M_innerSection"
        className="flex flex-col overflow-y-scroll overflow-x-hidden scrollbar-hide border-white p-4 w-[100%] h-[90%]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Ring Section */}
        <div
          id="M_ring"
          className="w-[100%] border-white text-center   items-center p-28 flex-col justify-center flex mx-auto"
        >
          <motion.h1
            className="xsm1:text-[24px] text-[20px] xsm1:leading-[24px] leading-[20px] font-montserrat font-[700]  text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            $14,892.32
          </motion.h1>
          <motion.h1
            className="xsm1:text-[14px] text-[8px] xsm1:leading-[18px] leading-[10px] font-montserrat font-[600] text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            5 wallets
          </motion.h1>
        </div>

        {/* Wallet List */}
        <div>
          {arry.map((data, index) => (
            <motion.div
              key={data.id}
              id="M_btc"
              className="border flex py-4 px-2 my-2 border-[#2B2B2B] items-center justify-between"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex gap-2">
                {/* Bitcoin Icon */}
                <div className=" ">
                  {" "}
                  <svg
                    width="0"
                    height="0"
                    className="w-[20px] h-[20px] xsm1:w-[40px] xsm1:h-[40px]"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.4165 23.6057C34.8825 33.7949 24.5613 39.9717 14.3986 37.4376C4.23587 34.9035 -1.96735 24.5824 0.566733 14.4197C3.10082 4.23055 13.4219 -1.94628 23.5847 0.587806C33.7738 3.09549 39.9506 13.4166 37.4165 23.6057Z"
                      fill="#F7931A"
                    />
                    <path
                      d="M27.3591 16.2941C27.7286 13.76 25.8017 12.4138 23.1884 11.4899L24.0331 8.05829L21.9478 7.53036L21.1295 10.8563C20.5751 10.7244 20.0208 10.5924 19.4665 10.4604L20.3112 7.10801L18.2258 6.58008L17.3811 10.0117C16.9324 9.90606 16.4836 9.80048 16.0613 9.69489L13.1841 8.98218L12.6297 11.1995C12.6297 11.1995 14.1871 11.5427 14.1343 11.5691C14.979 11.7802 15.1374 12.3346 15.111 12.7833L14.1343 16.69C14.1871 16.7164 14.2663 16.7164 14.3455 16.7692C14.2663 16.7428 14.2135 16.7428 14.1343 16.7164L12.7617 22.1805C12.6561 22.4445 12.3922 22.8141 11.8114 22.6821C11.8378 22.7085 10.3068 22.3125 10.3068 22.3125L9.27734 24.6882L11.9962 25.3745C12.4977 25.5065 12.9993 25.6385 13.4744 25.7705L12.6033 29.2285L14.6887 29.7564L15.5334 26.3248C16.1141 26.4832 16.642 26.6152 17.1964 26.7472L16.3517 30.1523L18.437 30.6803L19.3081 27.2223C22.8716 27.8822 25.5377 27.6183 26.6728 24.3979C27.5703 21.811 26.62 20.3064 24.7458 19.3297C26.0657 19.0393 27.0951 18.1418 27.3591 16.2941ZM22.6077 22.9724C21.9742 25.5593 17.5923 24.1603 16.1933 23.8171L17.3283 19.2241C18.7538 19.5673 23.2676 20.28 22.6077 22.9724ZM23.2412 16.2677C22.6605 18.617 19.0177 17.4291 17.8563 17.1388L18.8857 12.9681C20.0736 13.2584 23.8747 13.8128 23.2412 16.2677Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h2 className="xsm1:text-[14px] text-[8px] font-montserrat font-[600] xsm1:leading-[18px] leading-[10px]   text-white">
                    Bitcoin
                  </h2>
                  <h2 className="flex mt-1 gap-1">
                    <span className="xsm1:text-[14px] text-[8px]  font-montserrat font-[500] leading-[10px] text-[#8C8C8C]">
                      $20,000
                    </span>
                    <span className="xsm1:text-[14px] text-[8px]  font-montserrat font-[500] leading-[10px] text-[#3CC750]">
                      +4.12%
                    </span>
                  </h2>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="xsm1:text-[14px] text-[8px] font-montserrat font-[600] xsm1:leading-[18px] leading-[10px]  text-white">
                  0.09882 BTC
                </h2>
                <h2 className="flex gap-1">
                  <span className="xsm1:text-[14px] text-[8px] mt-1 font-montserrat font-[500] xsm1:leading-[18px] leading-[10px]  text-[#EE5A02]">
                    $2,110.67{" "}
                  </span>
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
