"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Gsap({ color }) {
  const divv = useRef(null);
  const divv2 = useRef(null);
  const [img, setimg] = useState(false);
  const [img2, setimg2] = useState(false);
  const [img3, setimg3] = useState(false);

  const main_div = useRef(null);
  // useEffect(() => {
  //   var tll;

  //   tll = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: main_div.current,
  //       start: "top top",
  //       end: "+=200%",
  //       scrub: 1,
  //       markers: false,
  //       pin: true,
  //     },
  //   });
  //   tll.to(
  //     divv.current,
  //     {
  //       y: 0,
  //     },
  //     0
  //   );
  //   tll.to(
  //     divv2.current,
  //     {
  //       y: "-70%",
  //     },
  //     0
  //   );
  //   // return () => {
  //   //   tll.kill();
  //   //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   // };
  // }, []);
  return (
    <>
      <div
        ref={main_div}
        className="  h-fit relative  xl:max-w-[1330px]   mx-auto  w-[90vw]  xl:w-[95vw]  flex justify-between "
      >
        <div className="w-[50%] relative  ">
          <div
            ref={divv}
            className={`w-[100%] pt-[5vw] sticky    top-0  h-fit `}
          >
            <h2 className=" lg:text-[40px] xl:text-[48px]    font-[700] font-montserrat text-white">
              Why Choose <b id="h2">TrūQoin?</b>
            </h2>
            <h2
              className={` transition-all ease-in-out pointer-events-none  duration-500 ${
                img || img2 || img3
                  ? "h-0 opacity-0 scale-50 "
                  : "h-[200px] opacity-100 scale-100"
              } text-[0.71vw]  font-[400]   overflow-hidden font-montserrat text-[#8E8E8E] px-2`}
            >
              <ul className="flex flex-col gap-y-3 mt-4">
                <li className="flex gap-x-2 items- text-[14px] leading-[17.07px]">
                  <div
                    id="dot"
                    className=" sm:w-[12px] sm:h-[10px] mt-1 w-[10px] h-[8px] rounded-full "
                  ></div>
                  Acquire cryptocurrency without any hardware of software costs.
                </li>
                <li className="flex gap-x-2 items- text-[14px] leading-[17.07px]">
                  {" "}
                  <div
                    id="dot"
                    className=" sm:w-[12px] sm:h-[10px] mt-1 w-[10px] h-[8px] rounded-full "
                  ></div>
                  Mine cryptocurrency through yours and other’s activities.{" "}
                </li>
                <li className="flex gap-x-2 items- text-[14px] leading-[17.07px]">
                  <div
                    id="dot"
                    className=" sm:w-[12px] sm:h-[10px] mt-1 w-[10px] h-[8px] rounded-full "
                  ></div>
                  Build a digital-assets business – without any boarders.{" "}
                </li>
                <li className="flex gap-x-2 items- text-[14px] leading-[17.07px]">
                  <div
                    id="dot"
                    className=" sm:w-[12px] sm:h-[10px] mt-1 w-[10px] h-[8px] rounded-full "
                  ></div>
                  Achieve success and rewards, for developing a like-minded
                  team.{" "}
                </li>
                <li className="flex gap-x-2 items- text-[14px] leading-[17.07px]">
                  <div
                    id="dot"
                    className=" sm:w-[12px] sm:h-[10px] mt-1 w-[10px] h-[8px] rounded-full "
                  ></div>
                  Earn fiat currency (USD) for help to build the TruQoin/TruIQ
                  ecosystem.{" "}
                </li>
                <li className="flex gap-x-2 items- text-[14px] leading-[17.07px]">
                  <div
                    id="dot"
                    className=" sm:w-[12px] sm:h-[10px] mt-1 w-[10px] h-[8px] rounded-full "
                  ></div>
                  Use TruQoin to buy products and services in the real world.{" "}
                </li>
              </ul>
            </h2>
            <div
              className={` transition-all ease-in-out pointer-events-none w-[80%]  border-black   duration-500 ${
                img ? "block h-[200px] xl:h-[300px] " : "h-0 "
              }`}
            >
              <div
                className={`transition-all abs  pointer-events-none duration-500 ease-in-out transform ${
                  img ? "opacity-100 scale-100 " : " opacity-0 scale-50"
                }`}
              >
                <Image
                  className="  pointer-events-none"
                  src={"/man.png"}
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </div>
            <div
              className={` transition-all ease-in-out w-[80%] duration-500 ${
                img2 ? "blockh-[200px] xl:h-[300px]" : "h-0  "
              }`}
            >
              <div
                className={`transition-all abs duration-500 ease-in-out transform ${
                  img2 ? "opacity-100 scale-100 " : " opacity-0 scale-50"
                }`}
              >
                <Image
                  src={"/man.png"}
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </div>
            <div
              className={` transition-all ease-in-out w-[80%] duration-500 ${
                img3 ? "blockh-[200px] xl:h-[300px]" : "h-0  "
              }`}
            >
              <div
                className={`transition-all abs duration-500 ease-in-out transform ${
                  img3 ? "opacity-100 scale-100 " : " opacity-0 scale-50"
                }`}
              >
                <video
                  src="/WhatsApp Video 2025-02-10 at 16.55.13_48ceca58.mp4"
                  className="w-[100%] "
                  muted
                  loop
                  autoPlay
                />
                {/* <Image
                src={"/man.png"}
                width={0}
                height={0}
                layout="responsive"
              /> */}
              </div>
            </div>
          </div>
        </div>
        <div
          ref={divv2}
          className=" gap-y-16 w-[50%] flex flex-col h-fit  pt-[5vw]  items-end xl:items-none"
        >
          <div
            id="Gsap"
            onClick={() => {
              setimg(!img);
              setimg2(false);
              setimg3(false);
            }}
            className="  xl:p-4 xl:h-[326px] h-[276px]   flex-col p-8 flex xl:justify-center  cursor-pointer xl:items-center lg:w-[450px] xl:w-[650px] border-[#343434] rounded-[10px] "
          >
            <div className=" lg:w-[343px] xl:w-[543px] h-[179px]  my-3 ">
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_85_2151)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.2669 13.3333C27.2669 14.8 26.0669 16 24.6002 16H7.26684C5.80017 16 4.60017 14.8 4.60017 13.3333V3.82699L15.4265 10.1954C15.7394 10.3795 16.1275 10.3795 16.4406 10.1954L27.2669 3.82703V13.3333ZM7.26684 0C6.16711 0 5.21729 0.674681 4.81088 1.63057L15.9335 8.17331L27.0562 1.6306C26.6497 0.674693 25.6999 0 24.6002 0H7.26684ZM14.6667 20.6V18H17.3334V20.6H25.0001C27.2314 20.6 29.0001 22.4531 29.0001 24.6611V24.9167C30.3658 25.45 31.3334 26.7787 31.3334 28.3333C31.3334 30.3584 29.6918 32 27.6667 32C25.6417 32 24.0001 30.3584 24.0001 28.3333C24.0001 26.7787 24.9677 25.45 26.3334 24.9167V24.6611C26.3334 23.8685 25.7021 23.2667 25.0001 23.2667H17.3334V24.9167C18.6991 25.45 19.6667 26.7787 19.6667 28.3333C19.6667 30.3584 18.0251 32 16.0001 32C13.975 32 12.3334 30.3584 12.3334 28.3333C12.3334 26.7787 13.301 25.45 14.6667 24.9167V23.2667H7.00008C6.29812 23.2667 5.66675 23.8685 5.66675 24.6611V24.9167C7.03254 25.45 8.00008 26.7787 8.00008 28.3333C8.00008 30.3584 6.35845 32 4.33341 32C2.30837 32 0.666748 30.3584 0.666748 28.3333C0.666748 26.7787 1.63429 25.45 3.00008 24.9167V24.6611C3.00008 22.4531 4.76871 20.6 7.00008 20.6H14.6667Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.2669 13.3333C27.2669 14.8 26.0669 16 24.6002 16H7.26684C5.80017 16 4.60017 14.8 4.60017 13.3333V3.82699L15.4265 10.1954C15.7394 10.3795 16.1275 10.3795 16.4406 10.1954L27.2669 3.82703V13.3333ZM7.26684 0C6.16711 0 5.21729 0.674681 4.81088 1.63057L15.9335 8.17331L27.0562 1.6306C26.6497 0.674693 25.6999 0 24.6002 0H7.26684ZM14.6667 20.6V18H17.3334V20.6H25.0001C27.2314 20.6 29.0001 22.4531 29.0001 24.6611V24.9167C30.3658 25.45 31.3334 26.7787 31.3334 28.3333C31.3334 30.3584 29.6918 32 27.6667 32C25.6417 32 24.0001 30.3584 24.0001 28.3333C24.0001 26.7787 24.9677 25.45 26.3334 24.9167V24.6611C26.3334 23.8685 25.7021 23.2667 25.0001 23.2667H17.3334V24.9167C18.6991 25.45 19.6667 26.7787 19.6667 28.3333C19.6667 30.3584 18.0251 32 16.0001 32C13.975 32 12.3334 30.3584 12.3334 28.3333C12.3334 26.7787 13.301 25.45 14.6667 24.9167V23.2667H7.00008C6.29812 23.2667 5.66675 23.8685 5.66675 24.6611V24.9167C7.03254 25.45 8.00008 26.7787 8.00008 28.3333C8.00008 30.3584 6.35845 32 4.33341 32C2.30837 32 0.666748 30.3584 0.666748 28.3333C0.666748 26.7787 1.63429 25.45 3.00008 24.9167V24.6611C3.00008 22.4531 4.76871 20.6 7.00008 20.6H14.6667Z"
                      fill="url(#paint0_linear_85_2151)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_85_2151"
                      x1="67.6223"
                      y1="-32.9756"
                      x2="-17.5124"
                      y2="-24.3007"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="0.325" stopColor="#A80601" />
                      <stop offset="0.785" stopColor="#EE5A02" />
                      <stop offset="1" stopColor="#DDB28F" />
                    </linearGradient>
                    <clipPath id="clip0_85_2151">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="xl:text-[36px]  text-[2.1vw] leading-[2.4vw] xl:leading-[43.88px] font-[700] font-montserrat my-3 text-[#ffff] ">
                Earn by Engaging:
              </div>
              <div className=" text-[14px] leading-[17.07px]  font-[400] font-montserrat text-[#8E8E8E] w-[98%] my-3 ">
                TrūQoin™ is the first cryptocurrency to integrate
                Proof-of-Transaction & Activity™ mining technologies into a
                cryptocurrency, empowering miners to acquire tokens without the
                costs typically associated with traditional cryptocurrency
                mining.
              </div>
            </div>
          </div>
          <div
            id="Gsap"
            onClick={() => {
              setimg2(!img2);
              setimg(false);
              setimg3(false);
            }}
            className="  xl:p-4  flex-col p-8  xl:h-[326px] h-[276px]  flex xl:justify-center xl:items-center cursor-pointer   lg:w-[450px] xl:w-[650px] border-[#343434] rounded-[10px]"
          >
            <div className="lg:w-[343px] xl:w-[543px] h-[179px]  my-3  ">
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_85_2161)">
                    <path
                      d="M32 16C32 12.8355 31.0616 9.74207 29.3035 7.11088C27.5454 4.4797 25.0466 2.42894 22.1229 1.21793C19.1993 0.00693258 15.9823 -0.309921 12.8786 0.307443C9.77487 0.924806 6.92394 2.44866 4.6863 4.6863C2.44866 6.92394 0.924806 9.77487 0.307443 12.8786C-0.309921 15.9823 0.00693258 19.1993 1.21793 22.1229C2.42894 25.0466 4.4797 27.5454 7.11088 29.3035C9.74207 31.0616 12.8355 32 16 32H16.16C20.36 31.9965 24.3869 30.3265 27.3567 27.3567C30.3265 24.3869 31.9965 20.36 32 16.16V16ZM29.3333 16C29.3308 17.1851 29.1694 18.3645 28.8533 19.5067C28.83 19.5987 28.7869 19.6846 28.7271 19.7582C28.6672 19.8319 28.592 19.8917 28.5067 19.9333C28.3529 20.0206 28.1711 20.0445 28 20C27.1743 19.6445 26.47 19.056 25.9733 18.3067L23.0133 13.8667C22.7085 13.4109 22.2959 13.0374 21.8121 12.7792C21.3283 12.5211 20.7883 12.3862 20.24 12.3867H19.6667C18.6942 12.3867 17.7616 12.0004 17.0739 11.3127C16.3863 10.6251 16 9.69247 16 8.72001C16 7.74755 16.3863 6.81492 17.0739 6.12728C17.7616 5.43965 18.6942 5.05334 19.6667 5.05334H23.36C23.4985 5.05045 23.6342 5.09255 23.7467 5.17334C25.4711 6.4043 26.8773 8.02847 27.8489 9.91128C28.8204 11.7941 29.3293 13.8813 29.3333 16ZM2.90667 13.5467C2.93218 13.3925 3.01212 13.2525 3.13199 13.1522C3.25186 13.0519 3.40372 12.9979 3.56001 13H9.33334C9.94337 12.9921 10.5489 13.1059 11.1144 13.3348C11.6799 13.5638 12.194 13.9032 12.6267 14.3333L14.1333 15.8667C14.9747 16.7085 15.4627 17.8399 15.4974 19.0296C15.5321 20.2193 15.1109 21.3773 14.32 22.2667L12.5067 24.3067C11.9642 24.9162 11.6652 25.7041 11.6667 26.52V27.6267C11.6677 27.7385 11.6401 27.8486 11.5864 27.9467C11.5327 28.0447 11.4548 28.1274 11.36 28.1867C11.2629 28.2359 11.1555 28.2615 11.0467 28.2615C10.9378 28.2615 10.8305 28.2359 10.7333 28.1867C8.34832 27.1612 6.31454 25.4618 4.88159 23.297C3.44863 21.1322 2.67884 18.5961 2.66667 16C2.66463 15.1763 2.74503 14.3544 2.90667 13.5467Z"
                      fill="black"
                    />
                    <path
                      d="M32 16C32 12.8355 31.0616 9.74207 29.3035 7.11088C27.5454 4.4797 25.0466 2.42894 22.1229 1.21793C19.1993 0.00693258 15.9823 -0.309921 12.8786 0.307443C9.77487 0.924806 6.92394 2.44866 4.6863 4.6863C2.44866 6.92394 0.924806 9.77487 0.307443 12.8786C-0.309921 15.9823 0.00693258 19.1993 1.21793 22.1229C2.42894 25.0466 4.4797 27.5454 7.11088 29.3035C9.74207 31.0616 12.8355 32 16 32H16.16C20.36 31.9965 24.3869 30.3265 27.3567 27.3567C30.3265 24.3869 31.9965 20.36 32 16.16V16ZM29.3333 16C29.3308 17.1851 29.1694 18.3645 28.8533 19.5067C28.83 19.5987 28.7869 19.6846 28.7271 19.7582C28.6672 19.8319 28.592 19.8917 28.5067 19.9333C28.3529 20.0206 28.1711 20.0445 28 20C27.1743 19.6445 26.47 19.056 25.9733 18.3067L23.0133 13.8667C22.7085 13.4109 22.2959 13.0374 21.8121 12.7792C21.3283 12.5211 20.7883 12.3862 20.24 12.3867H19.6667C18.6942 12.3867 17.7616 12.0004 17.0739 11.3127C16.3863 10.6251 16 9.69247 16 8.72001C16 7.74755 16.3863 6.81492 17.0739 6.12728C17.7616 5.43965 18.6942 5.05334 19.6667 5.05334H23.36C23.4985 5.05045 23.6342 5.09255 23.7467 5.17334C25.4711 6.4043 26.8773 8.02847 27.8489 9.91128C28.8204 11.7941 29.3293 13.8813 29.3333 16ZM2.90667 13.5467C2.93218 13.3925 3.01212 13.2525 3.13199 13.1522C3.25186 13.0519 3.40372 12.9979 3.56001 13H9.33334C9.94337 12.9921 10.5489 13.1059 11.1144 13.3348C11.6799 13.5638 12.194 13.9032 12.6267 14.3333L14.1333 15.8667C14.9747 16.7085 15.4627 17.8399 15.4974 19.0296C15.5321 20.2193 15.1109 21.3773 14.32 22.2667L12.5067 24.3067C11.9642 24.9162 11.6652 25.7041 11.6667 26.52V27.6267C11.6677 27.7385 11.6401 27.8486 11.5864 27.9467C11.5327 28.0447 11.4548 28.1274 11.36 28.1867C11.2629 28.2359 11.1555 28.2615 11.0467 28.2615C10.9378 28.2615 10.8305 28.2359 10.7333 28.1867C8.34832 27.1612 6.31454 25.4618 4.88159 23.297C3.44863 21.1322 2.67884 18.5961 2.66667 16C2.66463 15.1763 2.74503 14.3544 2.90667 13.5467Z"
                      fill="url(#paint0_linear_85_2161)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_85_2161"
                      x1="69.8667"
                      y1="-32.9756"
                      x2="-18.8885"
                      y2="-23.5385"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="0.325" stopColor="#A80601" />
                      <stop offset="0.785" stopColor="#EE5A02" />
                      <stop offset="1" stopColor="#DDB28F" />
                    </linearGradient>
                    <clipPath id="clip0_85_2161">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="xl:text-[36px] text-[2.1vw] leading-[2.4vw] xl:leading-[43.88px] font-[700] font-montserrat my-3 text-[#ffff] ">
                Seamless Ecosystem:{" "}
              </div>
              <div className=" text-[14px] leading-[17.07px] font-[400] font-montserrat text-[#8E8E8E] w-[98%] my-3 ">
                Using the latest in blockchain and smart contract technology,
                Web 3 infrastructure and infused with Responsible AI™ (R-AI),
                the TrūQoin ecosystem is positioning itself and its members to
                benefit from the coming integrated economy.
              </div>
            </div>
          </div>
          <div
            id="Gsap"
            onClick={() => {
              setimg3(!img3);
              setimg(false);
              setimg2(false);
            }}
            className=" xl:p-4  flex-col p-8 xl:h-[326px] h-[276px] flex xl:justify-center xl:items-center cursor-pointer lg:w-[450px] xl:w-[650px] border-[#343434] rounded-[10px] "
          >
            <div className="lg:w-[343px] xl:w-[543px] h-[179px]  my-3 ">
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_85_2171)">
                    <path
                      d="M14.4934 28.6666C14.5818 28.6666 14.6666 28.6315 14.7291 28.569C14.7916 28.5065 14.8268 28.4217 14.8268 28.3333V24.3333C14.8286 24.289 14.8213 24.2448 14.8052 24.2035C14.7892 24.1622 14.7647 24.1247 14.7333 24.0934C14.702 24.062 14.6645 24.0375 14.6232 24.0215C14.5819 24.0054 14.5377 23.998 14.4934 23.9999C8.7201 23.9999 4.4801 22.4666 2.37343 20.7866C2.32239 20.7516 2.26197 20.7329 2.2001 20.7329C2.13823 20.7329 2.0778 20.7516 2.02676 20.7866C1.97069 20.8123 1.92323 20.8537 1.89012 20.9057C1.857 20.9577 1.83963 21.0182 1.8401 21.0799V23.3333C1.8401 26.4266 7.85343 28.6666 14.4934 28.6666Z"
                      fill="black"
                    />
                    <path
                      d="M14.4934 28.6666C14.5818 28.6666 14.6666 28.6315 14.7291 28.569C14.7916 28.5065 14.8268 28.4217 14.8268 28.3333V24.3333C14.8286 24.289 14.8213 24.2448 14.8052 24.2035C14.7892 24.1622 14.7647 24.1247 14.7333 24.0934C14.702 24.062 14.6645 24.0375 14.6232 24.0215C14.5819 24.0054 14.5377 23.998 14.4934 23.9999C8.7201 23.9999 4.4801 22.4666 2.37343 20.7866C2.32239 20.7516 2.26197 20.7329 2.2001 20.7329C2.13823 20.7329 2.0778 20.7516 2.02676 20.7866C1.97069 20.8123 1.92323 20.8537 1.89012 20.9057C1.857 20.9577 1.83963 21.0182 1.8401 21.0799V23.3333C1.8401 26.4266 7.85343 28.6666 14.4934 28.6666Z"
                      fill="url(#paint0_linear_85_2171)"
                    />
                    <path
                      d="M16.5068 17.9333C15.8401 17.9333 15.1734 17.9999 14.5068 17.9999C9.82676 17.9999 4.9601 16.8933 2.37343 14.7866C2.32175 14.7533 2.26158 14.7356 2.2001 14.7356C2.13862 14.7356 2.07844 14.7533 2.02676 14.7866C1.97069 14.8123 1.92323 14.8537 1.89012 14.9057C1.857 14.9578 1.83963 15.0183 1.8401 15.0799V17.3333C1.8401 20.4266 7.85343 22.6666 14.4934 22.6666C14.5818 22.6666 14.6666 22.6315 14.7291 22.569C14.7916 22.5065 14.8268 22.4217 14.8268 22.3333V21.3333C14.829 20.782 15.0019 20.245 15.3219 19.7961C15.6418 19.3472 16.0931 19.0085 16.6134 18.8266C16.676 18.8056 16.731 18.7666 16.7713 18.7144C16.8117 18.6621 16.8356 18.5991 16.8401 18.5333C16.8342 18.4578 16.8342 18.382 16.8401 18.3066C16.8487 18.259 16.846 18.21 16.8321 18.1637C16.8182 18.1173 16.7935 18.0749 16.7601 18.0399C16.7284 18.0045 16.6893 17.9765 16.6455 17.958C16.6016 17.9396 16.5543 17.9311 16.5068 17.9333Z"
                      fill="black"
                    />
                    <path
                      d="M16.5068 17.9333C15.8401 17.9333 15.1734 17.9999 14.5068 17.9999C9.82676 17.9999 4.9601 16.8933 2.37343 14.7866C2.32175 14.7533 2.26158 14.7356 2.2001 14.7356C2.13862 14.7356 2.07844 14.7533 2.02676 14.7866C1.97069 14.8123 1.92323 14.8537 1.89012 14.9057C1.857 14.9578 1.83963 15.0183 1.8401 15.0799V17.3333C1.8401 20.4266 7.85343 22.6666 14.4934 22.6666C14.5818 22.6666 14.6666 22.6315 14.7291 22.569C14.7916 22.5065 14.8268 22.4217 14.8268 22.3333V21.3333C14.829 20.782 15.0019 20.245 15.3219 19.7961C15.6418 19.3472 16.0931 19.0085 16.6134 18.8266C16.676 18.8056 16.731 18.7666 16.7713 18.7144C16.8117 18.6621 16.8356 18.5991 16.8401 18.5333C16.8342 18.4578 16.8342 18.382 16.8401 18.3066C16.8487 18.259 16.846 18.21 16.8321 18.1637C16.8182 18.1173 16.7935 18.0749 16.7601 18.0399C16.7284 18.0045 16.6893 17.9765 16.6455 17.958C16.6016 17.9396 16.5543 17.9311 16.5068 17.9333Z"
                      fill="url(#paint1_linear_85_2171)"
                    />
                    <path
                      d="M26.3868 12.6933C26.4637 12.7286 26.551 12.7346 26.632 12.71C26.7131 12.6855 26.7824 12.6321 26.8268 12.5599C27.0428 12.1864 27.162 11.7647 27.1734 11.3333V9.05328C27.1737 8.98822 27.1548 8.92452 27.1193 8.87003C27.0838 8.81553 27.0331 8.77263 26.9734 8.74661C26.9212 8.71482 26.8612 8.698 26.8001 8.698C26.739 8.698 26.679 8.71482 26.6268 8.74661C24.0001 10.8933 19.1734 11.9999 14.5068 11.9999C9.8401 11.9999 4.9601 10.8933 2.37343 8.78661C2.32175 8.75331 2.26158 8.7356 2.2001 8.7356C2.13862 8.7356 2.07844 8.75331 2.02676 8.78661C1.97069 8.81231 1.92323 8.85367 1.89012 8.90571C1.857 8.95775 1.83963 9.01826 1.8401 9.07994V11.3333C1.8401 14.2799 7.50676 16.6666 14.5068 16.6666C15.3601 16.6666 16.1868 16.6666 17.0001 16.5599C17.062 16.5541 17.1211 16.531 17.1706 16.4932C17.22 16.4555 17.258 16.4048 17.2801 16.3466C17.7515 15.0766 18.5986 13.9804 19.7086 13.2039C20.8186 12.4273 22.1388 12.0074 23.4934 11.9999C24.4982 12.0064 25.4882 12.2436 26.3868 12.6933Z"
                      fill="black"
                    />
                    <path
                      d="M26.3868 12.6933C26.4637 12.7286 26.551 12.7346 26.632 12.71C26.7131 12.6855 26.7824 12.6321 26.8268 12.5599C27.0428 12.1864 27.162 11.7647 27.1734 11.3333V9.05328C27.1737 8.98822 27.1548 8.92452 27.1193 8.87003C27.0838 8.81553 27.0331 8.77263 26.9734 8.74661C26.9212 8.71482 26.8612 8.698 26.8001 8.698C26.739 8.698 26.679 8.71482 26.6268 8.74661C24.0001 10.8933 19.1734 11.9999 14.5068 11.9999C9.8401 11.9999 4.9601 10.8933 2.37343 8.78661C2.32175 8.75331 2.26158 8.7356 2.2001 8.7356C2.13862 8.7356 2.07844 8.75331 2.02676 8.78661C1.97069 8.81231 1.92323 8.85367 1.89012 8.90571C1.857 8.95775 1.83963 9.01826 1.8401 9.07994V11.3333C1.8401 14.2799 7.50676 16.6666 14.5068 16.6666C15.3601 16.6666 16.1868 16.6666 17.0001 16.5599C17.062 16.5541 17.1211 16.531 17.1706 16.4932C17.22 16.4555 17.258 16.4048 17.2801 16.3466C17.7515 15.0766 18.5986 13.9804 19.7086 13.2039C20.8186 12.4273 22.1388 12.0074 23.4934 11.9999C24.4982 12.0064 25.4882 12.2436 26.3868 12.6933Z"
                      fill="url(#paint2_linear_85_2171)"
                    />
                    <path
                      d="M1.84009 5.33333C1.84009 6.74782 3.17461 8.10438 5.55007 9.10457C7.92553 10.1048 11.1473 10.6667 14.5068 10.6667C17.8662 10.6667 21.088 10.1048 23.4634 9.10457C25.8389 8.10438 27.1734 6.74782 27.1734 5.33333C27.1734 3.91885 25.8389 2.56229 23.4634 1.5621C21.088 0.561903 17.8662 0 14.5068 0C11.1473 0 7.92553 0.561903 5.55007 1.5621C3.17461 2.56229 1.84009 3.91885 1.84009 5.33333Z"
                      fill="black"
                    />
                    <path
                      d="M1.84009 5.33333C1.84009 6.74782 3.17461 8.10438 5.55007 9.10457C7.92553 10.1048 11.1473 10.6667 14.5068 10.6667C17.8662 10.6667 21.088 10.1048 23.4634 9.10457C25.8389 8.10438 27.1734 6.74782 27.1734 5.33333C27.1734 3.91885 25.8389 2.56229 23.4634 1.5621C21.088 0.561903 17.8662 0 14.5068 0C11.1473 0 7.92553 0.561903 5.55007 1.5621C3.17461 2.56229 1.84009 3.91885 1.84009 5.33333Z"
                      fill="url(#paint3_linear_85_2171)"
                    />
                    <path
                      d="M28.4533 20.6801C28.3743 20.6706 28.3012 20.6331 28.2474 20.5744C28.1936 20.5157 28.1626 20.4397 28.16 20.3601V19.0268C28.16 17.7891 27.6683 16.6021 26.7932 15.7269C25.918 14.8518 24.731 14.3601 23.4933 14.3601C22.2557 14.3601 21.0687 14.8518 20.1935 15.7269C19.3183 16.6021 18.8267 17.7891 18.8267 19.0268V20.3601C18.8273 20.4385 18.7991 20.5144 18.7475 20.5733C18.6959 20.6323 18.6244 20.6703 18.5467 20.6801C18.0696 20.7504 17.6335 20.9895 17.3179 21.3541C17.0022 21.7187 16.8279 22.1845 16.8267 22.6668V30.0001C16.8267 30.5305 17.0374 31.0392 17.4124 31.4143C17.7875 31.7894 18.2962 32.0001 18.8267 32.0001H28.16C28.6904 32.0001 29.1991 31.7894 29.5742 31.4143C29.9493 31.0392 30.16 30.5305 30.16 30.0001V22.6668C30.1592 22.1865 29.9868 21.7223 29.6739 21.358C29.3609 20.9937 28.928 20.7533 28.4533 20.6801ZM22.16 27.0001C22.16 26.7364 22.2382 26.4786 22.3847 26.2593C22.5312 26.0401 22.7394 25.8692 22.9831 25.7683C23.2267 25.6674 23.4948 25.6409 23.7534 25.6924C24.0121 25.7438 24.2497 25.8708 24.4361 26.0573C24.6226 26.2438 24.7496 26.4813 24.801 26.74C24.8525 26.9986 24.8261 27.2667 24.7252 27.5104C24.6243 27.754 24.4534 27.9622 24.2341 28.1087C24.0148 28.2552 23.757 28.3334 23.4933 28.3334C23.1397 28.3334 22.8006 28.193 22.5505 27.9429C22.3005 27.6929 22.16 27.3537 22.16 27.0001ZM21.4933 19.0001C21.4933 18.4697 21.704 17.961 22.0791 17.5859C22.4542 17.2108 22.9629 17.0001 23.4933 17.0001C24.0238 17.0001 24.5325 17.2108 24.9075 17.5859C25.2826 17.961 25.4933 18.4697 25.4933 19.0001V20.3334C25.4933 20.4218 25.4582 20.5066 25.3957 20.5691C25.3332 20.6317 25.2484 20.6668 25.16 20.6668H21.8267C21.7383 20.6668 21.6535 20.6317 21.591 20.5691C21.5284 20.5066 21.4933 20.4218 21.4933 20.3334V19.0001Z"
                      fill="black"
                    />
                    <path
                      d="M28.4533 20.6801C28.3743 20.6706 28.3012 20.6331 28.2474 20.5744C28.1936 20.5157 28.1626 20.4397 28.16 20.3601V19.0268C28.16 17.7891 27.6683 16.6021 26.7932 15.7269C25.918 14.8518 24.731 14.3601 23.4933 14.3601C22.2557 14.3601 21.0687 14.8518 20.1935 15.7269C19.3183 16.6021 18.8267 17.7891 18.8267 19.0268V20.3601C18.8273 20.4385 18.7991 20.5144 18.7475 20.5733C18.6959 20.6323 18.6244 20.6703 18.5467 20.6801C18.0696 20.7504 17.6335 20.9895 17.3179 21.3541C17.0022 21.7187 16.8279 22.1845 16.8267 22.6668V30.0001C16.8267 30.5305 17.0374 31.0392 17.4124 31.4143C17.7875 31.7894 18.2962 32.0001 18.8267 32.0001H28.16C28.6904 32.0001 29.1991 31.7894 29.5742 31.4143C29.9493 31.0392 30.16 30.5305 30.16 30.0001V22.6668C30.1592 22.1865 29.9868 21.7223 29.6739 21.358C29.3609 20.9937 28.928 20.7533 28.4533 20.6801ZM22.16 27.0001C22.16 26.7364 22.2382 26.4786 22.3847 26.2593C22.5312 26.0401 22.7394 25.8692 22.9831 25.7683C23.2267 25.6674 23.4948 25.6409 23.7534 25.6924C24.0121 25.7438 24.2497 25.8708 24.4361 26.0573C24.6226 26.2438 24.7496 26.4813 24.801 26.74C24.8525 26.9986 24.8261 27.2667 24.7252 27.5104C24.6243 27.754 24.4534 27.9622 24.2341 28.1087C24.0148 28.2552 23.757 28.3334 23.4933 28.3334C23.1397 28.3334 22.8006 28.193 22.5505 27.9429C22.3005 27.6929 22.16 27.3537 22.16 27.0001ZM21.4933 19.0001C21.4933 18.4697 21.704 17.961 22.0791 17.5859C22.4542 17.2108 22.9629 17.0001 23.4933 17.0001C24.0238 17.0001 24.5325 17.2108 24.9075 17.5859C25.2826 17.961 25.4933 18.4697 25.4933 19.0001V20.3334C25.4933 20.4218 25.4582 20.5066 25.3957 20.5691C25.3332 20.6317 25.2484 20.6668 25.16 20.6668H21.8267C21.7383 20.6668 21.6535 20.6317 21.591 20.5691C21.5284 20.5066 21.4933 20.4218 21.4933 20.3334V19.0001Z"
                      fill="url(#paint4_linear_85_2171)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_85_2171"
                      x1="30.195"
                      y1="12.5573"
                      x2="-5.16182"
                      y2="18.7112"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="0.325" stopColor="#A80601" />
                      <stop offset="0.785" stopColor="#EE5A02" />
                      <stop offset="1" stopColor="#DDB28F" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_85_2171"
                      x1="34.6009"
                      y1="6.56278"
                      x2="-5.85039"
                      y2="14.7001"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="0.325" stopColor="#A80601" />
                      <stop offset="0.785" stopColor="#EE5A02" />
                      <stop offset="1" stopColor="#DDB28F" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_85_2171"
                      x1="57.1512"
                      y1="0.486437"
                      x2="-6.62086"
                      y2="22.0433"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="0.325" stopColor="#A80601" />
                      <stop offset="0.785" stopColor="#EE5A02" />
                      <stop offset="1" stopColor="#DDB28F" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_85_2171"
                      x1="57.1512"
                      y1="-10.9919"
                      x2="-9.64792"
                      y2="5.87672"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="0.325" stopColor="#A80601" />
                      <stop offset="0.785" stopColor="#EE5A02" />
                      <stop offset="1" stopColor="#DDB28F" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_85_2171"
                      x1="45.9378"
                      y1="-3.81771"
                      x2="8.77837"
                      y2="-0.831268"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="0.325" stopColor="#A80601" />
                      <stop offset="0.785" stopColor="#EE5A02" />
                      <stop offset="1" stopColor="#DDB28F" />
                    </linearGradient>
                    <clipPath id="clip0_85_2171">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="xl:text-[36px] text-[2.1vw] leading-[2.4vw] xl:leading-[43.88px] font-[700] font-montserrat my-3 text-[#ffff] ">
                Borderless and Secure:{" "}
              </div>
              <div className=" text-[14px] leading-[17.07px] font-[400] font-montserrat text-[#8E8E8E] w-[98%] my-3 ">
                Understanding the purpose, accessibility and use of new
                technologies requires a careful and legally prudent path to
                adoption. TruQoin has and will continually monitor local and
                international governance, to support diverse jurisdictions and
                to allow the use of TrūQoin throughout the word.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
