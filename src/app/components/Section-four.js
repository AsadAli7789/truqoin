"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SectionFour() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Create an observer to track when elements are in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Set state to true when in view
          }
        });
      },
      { threshold: 0.5 } // Adjust this for how much of the element needs to be visible
    );

    // Select all the elements to observe (the social media icons)
    const elements = document.querySelectorAll(".social-item");
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="w-full px-4 md:px-0">
      <motion.div
        className="max-w-[65vw] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-white text-center">
          <motion.h2
            className="font-montserrat font-[700] my-3 text-[32px] md:text-[48px] leading-[1.2] md:leading-[48px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Follow us
          </motion.h2>
          <motion.p
            className="text-[12px] md:text-[14px] font-[600] my-3 text-[#8E8E8E] font-montserrat"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Be Part of our TruQoin Community
          </motion.p>
        </div>
        <motion.div
          className="p-4 max-w-[900px] mx-auto flex flex-wrap justify-center gap-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Animate when in view
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { name: "Instagram", icon: "instagram", followers: "10.2k" },
            { name: "Facebook", icon: "facebook", followers: "13.2k" },
            { name: "Discord", icon: "discord", followers: "15.2k" },
            { name: "Telegram", icon: "telegram", followers: "10.2k" },
            { name: "X", icon: "x", followers: "11.2k" },
          ].map((social) => (
            <motion.div
              key={social.name}
              id="sec4"
              className="social-item border-[1px] rounded-[8px] flex border-[#343434] h-[60px] w-full sm:w-[260px] items-center px-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="border border-[#2B2B2B] p-2">
                <SocialIcon name={social.icon} />
              </div>
              <h3 className="text-[14px] text-white px-2 font-montserrat">
                {social.name}
              </h3>
              <h3
                id="h2"
                className="text-[14px] font-[600] font-montserrat ml-auto"
              >
                {social.followers}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
function SocialIcon({ name }) {
  switch (name) {
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M5.5 0.666748H12.5C15.1667 0.666748 17.3333 2.83341 17.3333 5.50008V12.5001C17.3333 13.782 16.8241 15.0113 15.9177 15.9178C15.0113 16.8242 13.7819 17.3334 12.5 17.3334H5.5C2.83333 17.3334 0.666664 15.1667 0.666664 12.5001V5.50008C0.666664 4.2182 1.17589 2.98882 2.08231 2.0824C2.98874 1.17597 4.21812 0.666748 5.5 0.666748ZM5.33333 2.33341C4.53768 2.33341 3.77462 2.64949 3.21201 3.21209C2.6494 3.7747 2.33333 4.53777 2.33333 5.33341V12.6667C2.33333 14.3251 3.675 15.6667 5.33333 15.6667H12.6667C13.4623 15.6667 14.2254 15.3507 14.788 14.7881C15.3506 14.2255 15.6667 13.4624 15.6667 12.6667V5.33341C15.6667 3.67508 14.325 2.33341 12.6667 2.33341H5.33333ZM13.375 3.58341C13.6513 3.58341 13.9162 3.69316 14.1116 3.88851C14.3069 4.08386 14.4167 4.34881 14.4167 4.62508C14.4167 4.90135 14.3069 5.1663 14.1116 5.36165C13.9162 5.557 13.6513 5.66675 13.375 5.66675C13.0987 5.66675 12.8338 5.557 12.6384 5.36165C12.4431 5.1663 12.3333 4.90135 12.3333 4.62508C12.3333 4.34881 12.4431 4.08386 12.6384 3.88851C12.8338 3.69316 13.0987 3.58341 13.375 3.58341ZM9 4.83341C10.1051 4.83341 11.1649 5.2724 11.9463 6.0538C12.7277 6.8352 13.1667 7.89501 13.1667 9.00008C13.1667 10.1052 12.7277 11.165 11.9463 11.9464C11.1649 12.7278 10.1051 13.1667 9 13.1667C7.89493 13.1667 6.83512 12.7278 6.05372 11.9464C5.27232 11.165 4.83333 10.1052 4.83333 9.00008C4.83333 7.89501 5.27232 6.8352 6.05372 6.0538C6.83512 5.2724 7.89493 4.83341 9 4.83341ZM9 6.50008C8.33696 6.50008 7.70107 6.76347 7.23223 7.23231C6.76339 7.70115 6.5 8.33704 6.5 9.00008C6.5 9.66312 6.76339 10.299 7.23223 10.7678C7.70107 11.2367 8.33696 11.5001 9 11.5001C9.66304 11.5001 10.2989 11.2367 10.7678 10.7678C11.2366 10.299 11.5 9.66312 11.5 9.00008C11.5 8.33704 11.2366 7.70115 10.7678 7.23231C10.2989 6.76347 9.66304 6.50008 9 6.50008Z"
            fill="white"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg
          width="15"
          height="15"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66666 10.213H8.74999L9.58333 6.87964H6.66666V5.21297C6.66666 4.35464 6.66666 3.54631 8.33333 3.54631H9.58333V0.746305C9.31166 0.710472 8.28583 0.629639 7.20249 0.629639C4.93999 0.629639 3.33333 2.01047 3.33333 4.54631V6.87964H0.833328V10.213H3.33333V17.2963H6.66666V10.213Z"
            fill="white"
          />
        </svg>
      );
    case "discord":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
        >
          <path
            d="M15.0583 1.44159C13.95 0.924919 12.75 0.549919 11.5 0.333252C11.478 0.333565 11.457 0.342551 11.4417 0.358252C11.2917 0.633252 11.1167 0.991585 11 1.26659C9.67415 1.06671 8.32584 1.06671 7 1.26659C6.88333 0.983252 6.70833 0.633252 6.55 0.358252C6.54166 0.341585 6.51666 0.333252 6.49166 0.333252C5.24166 0.549919 4.05 0.924919 2.93333 1.44159C2.925 1.44159 2.91666 1.44992 2.90833 1.45825C0.641663 4.84992 0.0166626 8.14992 0.324996 11.4166C0.324996 11.4333 0.333329 11.4499 0.349996 11.4583C1.85 12.5583 3.29166 13.2249 4.71666 13.6666C4.74166 13.6749 4.76666 13.6666 4.775 13.6499C5.10833 13.1916 5.40833 12.7083 5.66666 12.1999C5.68333 12.1666 5.66666 12.1333 5.63333 12.1249C5.15833 11.9416 4.70833 11.7249 4.26666 11.4749C4.23333 11.4583 4.23333 11.4083 4.25833 11.3833C4.35 11.3166 4.44166 11.2416 4.53333 11.1749C4.55 11.1583 4.575 11.1583 4.59166 11.1666C7.45833 12.4749 10.55 12.4749 13.3833 11.1666C13.4 11.1583 13.425 11.1583 13.4417 11.1749C13.5333 11.2499 13.625 11.3166 13.7167 11.3916C13.75 11.4166 13.75 11.4666 13.7083 11.4833C13.275 11.7416 12.8167 11.9499 12.3417 12.1333C12.3083 12.1416 12.3 12.1833 12.3083 12.2083C12.575 12.7166 12.875 13.1999 13.2 13.6583C13.225 13.6666 13.25 13.6749 13.275 13.6666C14.7083 13.2249 16.15 12.5583 17.65 11.4583C17.6667 11.4499 17.675 11.4333 17.675 11.4166C18.0417 7.64158 17.0667 4.36659 15.0917 1.45825C15.0833 1.44992 15.075 1.44159 15.0583 1.44159ZM6.1 9.42492C5.24166 9.42492 4.525 8.63325 4.525 7.65825C4.525 6.68325 5.225 5.89159 6.1 5.89159C6.98333 5.89159 7.68333 6.69159 7.675 7.65825C7.675 8.63325 6.975 9.42492 6.1 9.42492ZM11.9083 9.42492C11.05 9.42492 10.3333 8.63325 10.3333 7.65825C10.3333 6.68325 11.0333 5.89159 11.9083 5.89159C12.7917 5.89159 13.4917 6.69159 13.4833 7.65825C13.4833 8.63325 12.7917 9.42492 11.9083 9.42492Z"
            fill="white"
          />
        </svg>
      );
    case "telegram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4808 0.691638C15.6868 0.604963 15.9122 0.57507 16.1336 0.605069C16.355 0.635067 16.5643 0.723861 16.7397 0.862209C16.9152 1.00056 17.0503 1.1834 17.1311 1.39171C17.2119 1.60001 17.2354 1.82617 17.1992 2.04664L15.3092 13.5108C15.1258 14.6166 13.9125 15.2508 12.8983 14.7C12.05 14.2391 10.79 13.5291 9.65667 12.7883C9.09 12.4175 7.35417 11.23 7.5675 10.385C7.75083 9.66247 10.6675 6.94747 12.3342 5.3333C12.9883 4.69914 12.69 4.3333 11.9175 4.91664C9.99917 6.36497 6.91917 8.56747 5.90083 9.18747C5.0025 9.73414 4.53417 9.82747 3.97417 9.73414C2.9525 9.56414 2.005 9.30081 1.23167 8.97997C0.186665 8.54664 0.237499 7.10997 1.23083 6.69164L15.4808 0.691638Z"
            fill="white"
          />
        </svg>
      );
    case "x":
      return (
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8757 0.31543H16.4765L10.7952 6.82523L17.4795 15.6851H12.2464L8.14479 10.3127L3.45685 15.6851H0.85366L6.9298 8.71979L0.520538 0.316641H5.88683L9.58872 5.22625L13.8757 0.31543ZM12.9611 14.1248H14.4026L5.2159 1.49994L2.77439 6.72928L9.16063 12.8129L12.9611 14.1248Z"
            fill="white"
          />
        </svg>
      );
    default:
      return null;
  }
}
