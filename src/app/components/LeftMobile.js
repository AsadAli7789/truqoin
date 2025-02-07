"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function LeftMobile({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [trans, settrans] = useState(1);
  const [state, setstate] = useState(1);

  return (
    <>
      <div
        id="M_bg"
        className={`border-white   ${
          state == 1 ? "flex  animate-fade-in " : "hidden"
        } w-[100%] h-[100%] max-w-[300px]  xsm1:max-w-[390px] p-4 sm:p-6  gap-3 flex flex-col rounded-[10px] ${className}`}
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

        {/* Main Content */}
        <motion.div
          ref={ref}
          id="M_innerSection"
          className={` flex-col overflow-scroll scrollbar-hide border-white p-4 w-[100%] h-[90%]`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Wallet List */}
          <div
            className={`w-[100%] h-[90%]   flex-col sm:pt-8 xl:pt-2 text-white  border-white  flex mx-auto`}
          >
            <div className="flex  justify-center items-center py-1 gap-2 sm:text-[24px] md:text-[24px] lg:text-[20px] xl:text-[24px] font-montserrat font-[500]">
              <h1 className="w-[24px] h-[24px]">
                <Image
                  width={0}
                  height={0}
                  src={"/leftMobileLogo.png"}
                  layout="responsive"
                />
              </h1>

              <h1>Miner’s Wallet</h1>
            </div>
            <div className="flex  mt-1 sm:text-[24px] md:text-[24px] xl:text-[18px] lg:text-[16px] justify-center items-center gap-4 text-center p-2 font-montserrat font-[500]">
              <h1>
                16,356
                <span className="xl:text-[16px] xl:leading-[16px] text-[#8C8C8C]">
                  TRQ
                </span>
              </h1>{" "}
              <h1>
                $8,745.{" "}
                <span className="xl:text-[16px]   xl:leading-[16px]  sm:leading-[16px] sm:text-[14px] text-[#8C8C8C]">
                  35
                </span>
              </h1>{" "}
            </div>
            <div className=" text-center mt-3  w-full sm:py-2 xl:py-1 xl:text-[14px] text-[14px] text-white rounded-[8px] border border-[#EE5A02] font-montserrat font-medium hover:bg-[#EE5A02] transition-colors duration-300">
              Send
            </div>
            <div className=" text-center mt-3  w-full sm:py-2 xl:py-1 xl:text-[14px] text-white rounded-[8px] border border-[#EE5A02] font-montserrat font-medium hover:bg-[#EE5A02] transition-colors duration-300">
              Receive
            </div>
            <div className=" text-center mt-3  w-full py-3 text-[14px] text-white rounded-[8px]  justify-center flex font-montserrat font-medium bg-[#EE5A02] transition-colors duration-300">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.66732 12L0.333984 8.66667L3.66732 5.33333L4.61732 6.26667L2.88398 8H13.0007V9.33333H2.88398L4.61732 11.0667L3.66732 12ZM10.334 6.66667L9.38398 5.73333L11.1173 4H1.00065V2.66667H11.1173L9.38398 0.933333L10.334 0L13.6673 3.33333L10.334 6.66667Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" border-white mt-1  flex  gap-2 text-[#8C8C8C]  xl:text-[0.459vw] items-center justify-center xsm1:text-[10px] text-[8px]  font-montserrat font-[600] ">
              <button className=" border border-[#343434] my-2 rounded-[8px]  px-3 xsm1:px-0 flex sm:gap-2 gap-2 py-2 sm:px-4 lg:px-2 justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16602 17.3327V13.8743L5.45768 16.541L4.29102 15.3743L8.16602 11.4993V9.83268H6.49935L2.62435 13.7077L1.45768 12.541L4.12435 9.83268H0.666016V8.16602H4.12435L1.45768 5.45768L2.62435 4.29102L6.49935 8.16602H8.16602V6.49935L4.29102 2.62435L5.45768 1.45768L8.16602 4.12435V0.666016H9.83268V4.12435L12.541 1.45768L13.7077 2.62435L9.83268 6.49935V8.16602H11.4993L15.3743 4.29102L16.541 5.45768L13.8743 8.16602H17.3327V9.83268H13.8743L16.541 12.541L15.3743 13.7077L11.4993 9.83268H9.83268V11.4993L13.7077 15.3743L12.541 16.541L9.83268 13.8743V17.3327H8.16602Z"
                    fill="#8C8C8C"
                  />
                </svg>
                Freeze TRQ
              </button>
              <button
                onClick={() => setstate(2)}
                className="my-2 border rounded-[8px] sm:gap-2 py-2 px-3 xsm1:px-0 gap-2 sm:px-4 lg:px-2 flex justify-center items-center 
  transition-all duration-300 ease-in-out 
  hover:shadow-lg shadow-blue-500/50 text-white border-blue-500 
  ring-[1px] ring-blue-500 ring-offset-[1px]
  active:scale-95"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83398 17.3327C5.37565 17.3327 4.98329 17.1695 4.6569 16.8431C4.33051 16.5167 4.16732 16.1243 4.16732 15.666C4.16732 15.2077 4.33051 14.8153 4.6569 14.4889C4.98329 14.1625 5.37565 13.9993 5.83398 13.9993C6.29232 13.9993 6.68468 14.1625 7.01107 14.4889C7.33746 14.8153 7.50065 15.2077 7.50065 15.666C7.50065 16.1243 7.33746 16.5167 7.01107 16.8431C6.68468 17.1695 6.29232 17.3327 5.83398 17.3327ZM14.1673 17.3327C13.709 17.3327 13.3166 17.1695 12.9902 16.8431C12.6638 16.5167 12.5007 16.1243 12.5007 15.666C12.5007 15.2077 12.6638 14.8153 12.9902 14.4889C13.3166 14.1625 13.709 13.9993 14.1673 13.9993C14.6257 13.9993 15.018 14.1625 15.3444 14.4889C15.6708 14.8153 15.834 15.2077 15.834 15.666C15.834 16.1243 15.6708 16.5167 15.3444 16.8431C15.018 17.1695 14.6257 17.3327 14.1673 17.3327ZM5.12565 3.99935L7.12565 8.16602H12.959L15.2507 3.99935H5.12565ZM4.33398 2.33268H16.6257C16.9451 2.33268 17.1882 2.47504 17.3548 2.75977C17.5215 3.04449 17.5284 3.33268 17.3757 3.62435L14.4173 8.95768C14.2645 9.23546 14.0597 9.45074 13.8027 9.60352C13.5458 9.75629 13.2645 9.83268 12.959 9.83268H6.75065L5.83398 11.4993H15.834V13.166H5.83398C5.20898 13.166 4.73676 12.8917 4.41732 12.3431C4.09787 11.7945 4.08398 11.2493 4.37565 10.7077L5.50065 8.66602L2.50065 2.33268H0.833984V0.666016H3.54232L4.33398 2.33268Z"
                    fill="currentColor"
                  />
                </svg>
                Shop TruIQ
              </button>
            </div>
            <Image
              width={0}
              height={0}
              alt="not found"
              layout="responsive"
              src={"/leftMobileSec2.png"}
            />
            <Image
              width={0}
              height={0}
              layout="responsive"
              alt="not found"
              src={"/leftMobileSec3.png"}
            />
          </div>
        </motion.div>
      </div>
      <div
        id="scroller"
        className={`border-white w-[100%] h-[100%] duration-500  transition-all relative max-w-[300px] border   ${
          state == 2 ? "flex   animate-fade-in" : "hidden"
        }  xsm1:max-w-[390px]  overflow-x-hidden rounded-[10px] ${className}`}
      >
        <button
          onClick={() => setstate(1)}
          id="Right_M_btn"
          className={`sm:p-4 px-2 py-1 lg:p-0  w-[25px]  h-[25px] sm:w-[40px] lg:max-w-[20px] lg:max-h-[20px] sm:h-[40px] lg:w-[2vw] lg:h-[2vw] md:w-[20px] md:h-[20px] absolute md:top-3 top-3 left-3  md:left-3 flex justify-center items-center border text-black border-[#343434] rounded-[5px]`}
        >
          <div className="bg-black w-[100%] absolute z-[-1] h-[100%]"></div>
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
        <div className="absolute w-[100%] z-[-2]">
          <Image
            src={"/multi.png"}
            width={0}
            height={0}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
