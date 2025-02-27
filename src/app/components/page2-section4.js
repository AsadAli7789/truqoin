"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionFour1() {
  // Observer for each section
  const { ref: rewardRef, inView: rewardInView } = useInView({
    triggerOnce: true, // Trigger only once when it enters the viewport
    threshold: 0.2, // Trigger when 20% is in view
  });

  const { ref: impactRef, inView: impactInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: communityRef, inView: communityInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="mt-10 text-center gap-10 flex flex-col mx-auto px-4 md:px-0">
      <div className="md:text-[48px] text-[28px] leading-[28px] md:leading-[48px] font-montserrat font-[700] text-white">
        What We Offer
      </div>
      <div className="flex xl:max-w-[1321px] lg:mx-auto xl:w-[100vw] lg:w-[90vw]  flex-col lg:flex-row lg:flex- gap-4 justify-center">
        {/* Activity-Based Rewards Section */}
        <motion.div
          ref={communityRef}
          className="w-full  items-center flex mx-auto  min-h-fit  lg:mx-0 lg:justify-center lg:w-[33%] xl:w-[31.25vw]  max-w-[427px] max-h-[341px]  h-[50.17vh] border border-[#343434] rounded-[8px] text-left bg-black py-8 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: impactInView ? 1 : 0, y: impactInView ? 0 : 50 }}
          transition={{ duration: 1.2 }}
          id="p2_sec4"
        >
          <div className=" xl:w-[24.816vw]  xl:h-[38.05vh]   xl:max-w-[339px]  xl:max-h-[231px]  ">
            <div className="mb-1 text-[2vw]">{Svg("1")}</div>
            <div className="text-[24px] leading-[25px] md:text-[32px] md:leading-[32px] xl:text-[36px] xl:leading-[36px] font-montserrat my-4 font-[700]  text-white">
              Activity-Based Rewards:{" "}
            </div>
            <div className="text-[#8E8E8E] text-[13px] leading-[16px] md:text-[14px] md:leading-[17.07px] my-4 font-montserrat font-[400]">
              Your activities in TruQoin and TruIQ Global drive your success and
              rewards.
            </div>
          </div>
        </motion.div>

        {/* Real-World Impact Section */}
        <motion.div
          ref={impactRef}
          className="w-full  items-center flex mx-auto  min-h-fit lg:mx-0 lg:justify-center lg:w-[33%] xl:w-[31.25vw] max-w-[427px] max-h-[341px]  h-[50.17vh] border border-[#343434] rounded-[8px] text-left bg-black py-8 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: impactInView ? 1 : 0, y: impactInView ? 0 : 50 }}
          transition={{ duration: 1.2 }}
          id="p2_sec4"
        >
          <div className="xl:w-[24.816vw]  xl:h-[38.05vh]   xl:max-w-[339px]  xl:max-h-[231px] ">
            <div className="mb-1 text-[2vw]">{Svg("2")}</div>
            <div className="text-[24px] leading-[25px] md:text-[32px] md:leading-[32px] xl:text-[36px] xl:leading-[36px] font-montserrat my-4 font-[700]  text-white">
              Real-World Impact:{" "}
            </div>
            <div className="text-[#8E8E8E] text-[13px] leading-[16px] md:text-[14px] md:leading-[17.07px]  my-4 font-montserrat font-[400]">
              From personal care to wellness products, TrūQoin connects
              blockchain technology to daily life.
            </div>
          </div>
        </motion.div>

        {/* Global Community Section */}
        <motion.div
          ref={communityRef}
          className="w-full  items-center flex mx-auto  min-h-fit  lg:mx-0 lg:justify-center lg:w-[33%] xl:w-[31.25vw]  max-w-[427px] max-h-[341px]  h-[50.17vh] border border-[#343434] rounded-[8px] text-left bg-black py-8 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: impactInView ? 1 : 0, y: impactInView ? 0 : 50 }}
          transition={{ duration: 1.2 }}
          id="p2_sec4"
        >
          <div className=" xl:w-[24.816vw]  xl:h-[38.05vh]   xl:max-w-[339px]  xl:max-h-[231px]  ">
            <div className="mb-1 text-[2vw]">{Svg("3")}</div>
            <div className="text-[24px] leading-[25px] md:text-[32px] md:leading-[32px] xl:text-[36px] xl:leading-[36px] font-montserrat my-4 font-[700]  text-white">
              Global Community:
            </div>
            <div className="text-[#8E8E8E] text-[13px] leading-[16px] md:text-[14px] md:leading-[17.07px] my-4 font-montserrat font-[400]">
              Join a international network of users united by the vision of
              financial growth and innovation.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Svg = (name) => {
  switch (name) {
    case "1":
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3333 1.33333C17.3333 0.596953 16.7364 0 16 0C15.2636 0 14.6667 0.596953 14.6667 1.33333V2.66667C14.6667 3.40304 15.2636 4 16 4C16.7364 4 17.3333 3.40304 17.3333 2.66667V1.33333ZM17.3333 26.9785C17.3333 26.2421 16.7364 25.6452 16 25.6452C15.2636 25.6452 14.6667 26.2421 14.6667 26.9785V30.6667C14.6667 31.4031 15.2636 32 16 32C16.7364 32 17.3333 31.4031 17.3333 30.6667V26.9785ZM6.29167 16C6.29167 16.7364 5.69471 17.3333 4.95833 17.3333H1.33333C0.596953 17.3333 0 16.7364 0 16C0 15.2636 0.596953 14.6667 1.33333 14.6667H4.95833C5.69471 14.6667 6.29167 15.2636 6.29167 16ZM30.6667 17.3333C31.4031 17.3333 32 16.7364 32 16C32 15.2636 31.4031 14.6667 30.6667 14.6667H27.0416C26.3053 14.6667 25.7083 15.2636 25.7083 16C25.7083 16.7364 26.3053 17.3333 27.0416 17.3333H30.6667ZM4.45205 29.2657C3.93135 28.7451 3.93135 27.9008 4.45205 27.3801L7.14052 24.6916C7.66123 24.1709 8.50544 24.1709 9.02615 24.6916C9.54684 25.2123 9.54684 26.0565 9.02615 26.5772L6.33767 29.2657C5.81697 29.7864 4.97275 29.7864 4.45205 29.2657ZM27.548 4.97405C28.0687 4.45336 28.0687 3.60915 27.548 3.08844C27.0272 2.56775 26.1831 2.56775 25.6623 3.08844L22.9739 5.77692C22.4532 6.29761 22.4532 7.14184 22.9739 7.66253C23.4945 8.18324 24.3388 8.18324 24.8595 7.66253L27.548 4.97405ZM4.45205 3.08844C3.93135 3.60915 3.93135 4.45336 4.45205 4.97405L7.14052 7.66253C7.66123 8.18324 8.50544 8.18324 9.02615 7.66253C9.54684 7.14184 9.54684 6.29761 9.02615 5.77692L6.33767 3.08844C5.81697 2.56775 4.97275 2.56775 4.45205 3.08844ZM27.548 27.026C28.0687 27.5467 28.0687 28.3908 27.548 28.9116C27.0272 29.4323 26.1831 29.4323 25.6623 28.9116L22.9739 26.2231C22.4532 25.7024 22.4532 24.8581 22.9739 24.3375C23.4945 23.8168 24.3388 23.8168 24.8595 24.3375L27.548 27.026ZM14.8043 6.04793C14.9877 5.68105 15.3607 5.25588 16.0005 5.25651C16.6391 5.25713 17.0112 5.68144 17.1944 6.04793L19.5412 10.7403L24.0264 11.1893C24.4356 11.2303 24.8955 11.4379 25.1255 11.9442C25.3803 12.5053 25.1925 13.0668 24.8352 13.424L21.0971 17.1609L22.4853 22.2472C22.6068 22.6921 22.5168 23.2077 22.1143 23.5725C21.6784 23.9676 21.0985 23.9892 20.6407 23.7601L16.0001 21.4393L11.3981 23.7433C10.9865 23.9493 10.3935 24.0241 9.89876 23.5872C9.41581 23.1607 9.42268 22.5919 9.5306 22.196L10.903 17.1609L7.184 13.4407C6.88393 13.1406 6.63173 12.6548 6.82227 12.0755C7.02021 11.4737 7.54048 11.2301 7.98815 11.1853L12.4587 10.7378L14.8043 6.04793Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3333 1.33333C17.3333 0.596953 16.7364 0 16 0C15.2636 0 14.6667 0.596953 14.6667 1.33333V2.66667C14.6667 3.40304 15.2636 4 16 4C16.7364 4 17.3333 3.40304 17.3333 2.66667V1.33333ZM17.3333 26.9785C17.3333 26.2421 16.7364 25.6452 16 25.6452C15.2636 25.6452 14.6667 26.2421 14.6667 26.9785V30.6667C14.6667 31.4031 15.2636 32 16 32C16.7364 32 17.3333 31.4031 17.3333 30.6667V26.9785ZM6.29167 16C6.29167 16.7364 5.69471 17.3333 4.95833 17.3333H1.33333C0.596953 17.3333 0 16.7364 0 16C0 15.2636 0.596953 14.6667 1.33333 14.6667H4.95833C5.69471 14.6667 6.29167 15.2636 6.29167 16ZM30.6667 17.3333C31.4031 17.3333 32 16.7364 32 16C32 15.2636 31.4031 14.6667 30.6667 14.6667H27.0416C26.3053 14.6667 25.7083 15.2636 25.7083 16C25.7083 16.7364 26.3053 17.3333 27.0416 17.3333H30.6667ZM4.45205 29.2657C3.93135 28.7451 3.93135 27.9008 4.45205 27.3801L7.14052 24.6916C7.66123 24.1709 8.50544 24.1709 9.02615 24.6916C9.54684 25.2123 9.54684 26.0565 9.02615 26.5772L6.33767 29.2657C5.81697 29.7864 4.97275 29.7864 4.45205 29.2657ZM27.548 4.97405C28.0687 4.45336 28.0687 3.60915 27.548 3.08844C27.0272 2.56775 26.1831 2.56775 25.6623 3.08844L22.9739 5.77692C22.4532 6.29761 22.4532 7.14184 22.9739 7.66253C23.4945 8.18324 24.3388 8.18324 24.8595 7.66253L27.548 4.97405ZM4.45205 3.08844C3.93135 3.60915 3.93135 4.45336 4.45205 4.97405L7.14052 7.66253C7.66123 8.18324 8.50544 8.18324 9.02615 7.66253C9.54684 7.14184 9.54684 6.29761 9.02615 5.77692L6.33767 3.08844C5.81697 2.56775 4.97275 2.56775 4.45205 3.08844ZM27.548 27.026C28.0687 27.5467 28.0687 28.3908 27.548 28.9116C27.0272 29.4323 26.1831 29.4323 25.6623 28.9116L22.9739 26.2231C22.4532 25.7024 22.4532 24.8581 22.9739 24.3375C23.4945 23.8168 24.3388 23.8168 24.8595 24.3375L27.548 27.026ZM14.8043 6.04793C14.9877 5.68105 15.3607 5.25588 16.0005 5.25651C16.6391 5.25713 17.0112 5.68144 17.1944 6.04793L19.5412 10.7403L24.0264 11.1893C24.4356 11.2303 24.8955 11.4379 25.1255 11.9442C25.3803 12.5053 25.1925 13.0668 24.8352 13.424L21.0971 17.1609L22.4853 22.2472C22.6068 22.6921 22.5168 23.2077 22.1143 23.5725C21.6784 23.9676 21.0985 23.9892 20.6407 23.7601L16.0001 21.4393L11.3981 23.7433C10.9865 23.9493 10.3935 24.0241 9.89876 23.5872C9.41581 23.1607 9.42268 22.5919 9.5306 22.196L10.903 17.1609L7.184 13.4407C6.88393 13.1406 6.63173 12.6548 6.82227 12.0755C7.02021 11.4737 7.54048 11.2301 7.98815 11.1853L12.4587 10.7378L14.8043 6.04793Z"
            fill="url(#paint0_linear_85_2189)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_85_2189"
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
          </defs>
        </svg>
      );
    case "2":
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.1332 16.8534C22.1469 16.7954 22.1443 16.7347 22.1254 16.6782C22.1066 16.6216 22.0723 16.5715 22.0265 16.5334C21.7052 16.2551 21.4473 15.9111 21.2702 15.5247C21.0931 15.1383 21.0009 14.7184 20.9998 14.2934C21.0008 14.032 21.0366 13.7719 21.1065 13.52C21.1275 13.4551 21.1272 13.3851 21.1056 13.3203C21.084 13.2555 21.0423 13.1994 20.9865 13.16C19.1402 11.8246 16.9429 11.0597 14.6665 10.96H14.5598C14.4815 10.9533 14.4032 10.9734 14.3378 11.017C14.2724 11.0606 14.2237 11.1251 14.1998 11.2C14.0052 11.8998 13.5872 12.5169 13.0096 12.9574C12.4319 13.3978 11.7262 13.6375 10.9998 13.64C10.9897 13.6342 10.9782 13.6311 10.9665 13.6311C10.9548 13.6311 10.9433 13.6342 10.9332 13.64C10.6275 15.3391 10.587 17.0752 10.8132 18.7867C10.825 18.858 10.858 18.9242 10.9079 18.9765C10.9579 19.0288 11.0224 19.0649 11.0932 19.08C14.0518 19.5667 16.9142 20.5209 19.5732 21.9067C19.6456 21.941 19.7278 21.9491 19.8056 21.9297C19.8834 21.9102 19.952 21.8644 19.9998 21.8C21.0356 20.3109 21.7611 18.6287 22.1332 16.8534Z"
            fill="black"
          />
          <path
            d="M22.1332 16.8534C22.1469 16.7954 22.1443 16.7347 22.1254 16.6782C22.1066 16.6216 22.0723 16.5715 22.0265 16.5334C21.7052 16.2551 21.4473 15.9111 21.2702 15.5247C21.0931 15.1383 21.0009 14.7184 20.9998 14.2934C21.0008 14.032 21.0366 13.7719 21.1065 13.52C21.1275 13.4551 21.1272 13.3851 21.1056 13.3203C21.084 13.2555 21.0423 13.1994 20.9865 13.16C19.1402 11.8246 16.9429 11.0597 14.6665 10.96H14.5598C14.4815 10.9533 14.4032 10.9734 14.3378 11.017C14.2724 11.0606 14.2237 11.1251 14.1998 11.2C14.0052 11.8998 13.5872 12.5169 13.0096 12.9574C12.4319 13.3978 11.7262 13.6375 10.9998 13.64C10.9897 13.6342 10.9782 13.6311 10.9665 13.6311C10.9548 13.6311 10.9433 13.6342 10.9332 13.64C10.6275 15.3391 10.587 17.0752 10.8132 18.7867C10.825 18.858 10.858 18.9242 10.9079 18.9765C10.9579 19.0288 11.0224 19.0649 11.0932 19.08C14.0518 19.5667 16.9142 20.5209 19.5732 21.9067C19.6456 21.941 19.7278 21.9491 19.8056 21.9297C19.8834 21.9102 19.952 21.8644 19.9998 21.8C21.0356 20.3109 21.7611 18.6287 22.1332 16.8534Z"
            fill="url(#paint0_linear_85_2198)"
          />
          <path
            d="M18.1598 24C18.1969 23.9616 18.2247 23.9152 18.2408 23.8643C18.257 23.8134 18.2612 23.7595 18.2532 23.7067C18.2453 23.6524 18.2242 23.6008 18.1916 23.5566C18.159 23.5124 18.1161 23.477 18.0665 23.4534C16.1003 22.4925 14.0221 21.7804 11.8798 21.3334C11.8218 21.3196 11.7612 21.3223 11.7046 21.3411C11.6481 21.36 11.5979 21.3942 11.5598 21.44C11.521 21.4825 11.4943 21.5346 11.4826 21.5909C11.4708 21.6472 11.4745 21.7056 11.4932 21.76C11.6975 22.367 11.9425 22.9594 12.2265 23.5334C12.8059 24.6396 13.5325 25.6622 14.3865 26.5734C14.4396 26.6311 14.5107 26.6692 14.5882 26.6813C14.6657 26.6934 14.745 26.6788 14.8132 26.64C15.9726 25.8172 17.0896 24.9361 18.1598 24Z"
            fill="black"
          />
          <path
            d="M18.1598 24C18.1969 23.9616 18.2247 23.9152 18.2408 23.8643C18.257 23.8134 18.2612 23.7595 18.2532 23.7067C18.2453 23.6524 18.2242 23.6008 18.1916 23.5566C18.159 23.5124 18.1161 23.477 18.0665 23.4534C16.1003 22.4925 14.0221 21.7804 11.8798 21.3334C11.8218 21.3196 11.7612 21.3223 11.7046 21.3411C11.6481 21.36 11.5979 21.3942 11.5598 21.44C11.521 21.4825 11.4943 21.5346 11.4826 21.5909C11.4708 21.6472 11.4745 21.7056 11.4932 21.76C11.6975 22.367 11.9425 22.9594 12.2265 23.5334C12.8059 24.6396 13.5325 25.6622 14.3865 26.5734C14.4396 26.6311 14.5107 26.6692 14.5882 26.6813C14.6657 26.6934 14.745 26.6788 14.8132 26.64C15.9726 25.8172 17.0896 24.9361 18.1598 24Z"
            fill="url(#paint1_linear_85_2198)"
          />
          <path
            d="M8.39994 18.8C8.45188 18.801 8.50329 18.7895 8.54975 18.7662C8.59621 18.743 8.63632 18.7088 8.66661 18.6666C8.73024 18.5927 8.76358 18.4974 8.75994 18.4C8.57281 16.6191 8.66276 14.82 9.02661 13.0666C9.0348 13.0524 9.03911 13.0363 9.03911 13.02C9.03911 13.0036 9.0348 12.9875 9.02661 12.9733C8.5748 12.6219 8.21742 12.1637 7.98661 11.64C7.95974 11.5696 7.90891 11.5109 7.84306 11.4744C7.77721 11.4378 7.70056 11.4256 7.62661 11.44C4.81487 11.9453 2.20851 13.2508 0.119945 15.2C0.0631465 15.2568 0.0298274 15.333 0.0266113 15.4133V15.96C0.0291552 17.0263 0.140848 18.0897 0.359945 19.1333C0.367358 19.1774 0.384327 19.2193 0.409663 19.2562C0.434998 19.293 0.468088 19.3239 0.506611 19.3466C0.545866 19.3665 0.589262 19.3769 0.633278 19.3769C0.677294 19.3769 0.72069 19.3665 0.759945 19.3466C3.26767 18.8021 5.84024 18.618 8.39994 18.8Z"
            fill="black"
          />
          <path
            d="M8.39994 18.8C8.45188 18.801 8.50329 18.7895 8.54975 18.7662C8.59621 18.743 8.63632 18.7088 8.66661 18.6666C8.73024 18.5927 8.76358 18.4974 8.75994 18.4C8.57281 16.6191 8.66276 14.82 9.02661 13.0666C9.0348 13.0524 9.03911 13.0363 9.03911 13.02C9.03911 13.0036 9.0348 12.9875 9.02661 12.9733C8.5748 12.6219 8.21742 12.1637 7.98661 11.64C7.95974 11.5696 7.90891 11.5109 7.84306 11.4744C7.77721 11.4378 7.70056 11.4256 7.62661 11.44C4.81487 11.9453 2.20851 13.2508 0.119945 15.2C0.0631465 15.2568 0.0298274 15.333 0.0266113 15.4133V15.96C0.0291552 17.0263 0.140848 18.0897 0.359945 19.1333C0.367358 19.1774 0.384327 19.2193 0.409663 19.2562C0.434998 19.293 0.468088 19.3239 0.506611 19.3466C0.545866 19.3665 0.589262 19.3769 0.633278 19.3769C0.677294 19.3769 0.72069 19.3665 0.759945 19.3466C3.26767 18.8021 5.84024 18.618 8.39994 18.8Z"
            fill="url(#paint2_linear_85_2198)"
          />
          <path
            d="M12.3067 27.8799C12.3567 27.8626 12.4015 27.8327 12.4365 27.793C12.4716 27.7532 12.4958 27.7051 12.5067 27.6533C12.5193 27.6026 12.5199 27.5496 12.5083 27.4986C12.4967 27.4477 12.4733 27.4002 12.44 27.3599C11.6579 26.4564 10.9865 25.4627 10.44 24.3999C9.91421 23.3554 9.50722 22.2552 9.22668 21.1199C9.21029 21.0524 9.17321 20.9917 9.12061 20.9462C9.06802 20.9008 9.00254 20.873 8.93334 20.8666C6.39096 20.6384 3.8287 20.7957 1.33334 21.3333C1.28574 21.3452 1.24108 21.3667 1.2021 21.3965C1.16312 21.4263 1.13065 21.4638 1.10667 21.5066C1.0866 21.5482 1.07617 21.5938 1.07617 21.6399C1.07617 21.6861 1.0866 21.7317 1.10667 21.7733C2.23762 24.6314 4.16791 27.1033 6.66667 28.8933C6.73227 28.9102 6.80108 28.9102 6.86667 28.8933C8.72657 28.8894 10.5701 28.546 12.3067 27.8799Z"
            fill="black"
          />
          <path
            d="M12.3067 27.8799C12.3567 27.8626 12.4015 27.8327 12.4365 27.793C12.4716 27.7532 12.4958 27.7051 12.5067 27.6533C12.5193 27.6026 12.5199 27.5496 12.5083 27.4986C12.4967 27.4477 12.4733 27.4002 12.44 27.3599C11.6579 26.4564 10.9865 25.4627 10.44 24.3999C9.91421 23.3554 9.50722 22.2552 9.22668 21.1199C9.21029 21.0524 9.17321 20.9917 9.12061 20.9462C9.06802 20.9008 9.00254 20.873 8.93334 20.8666C6.39096 20.6384 3.8287 20.7957 1.33334 21.3333C1.28574 21.3452 1.24108 21.3667 1.2021 21.3965C1.16312 21.4263 1.13065 21.4638 1.10667 21.5066C1.0866 21.5482 1.07617 21.5938 1.07617 21.6399C1.07617 21.6861 1.0866 21.7317 1.10667 21.7733C2.23762 24.6314 4.16791 27.1033 6.66667 28.8933C6.73227 28.9102 6.80108 28.9102 6.86667 28.8933C8.72657 28.8894 10.5701 28.546 12.3067 27.8799Z"
            fill="url(#paint3_linear_85_2198)"
          />
          <path
            d="M25.24 17.3334C25.2011 17.281 25.1465 17.2425 25.0841 17.2233C25.0218 17.2041 24.9549 17.2053 24.8933 17.2267C24.7141 17.2763 24.5314 17.312 24.3467 17.3334C24.2775 17.3397 24.212 17.3676 24.1594 17.413C24.1068 17.4584 24.0697 17.5192 24.0533 17.5867C23.28 21.1334 21.2133 24.72 16.3867 28.04C16.3085 28.1038 16.2563 28.1938 16.24 28.2934C16.2405 28.3965 16.2784 28.496 16.3467 28.5734C17.476 29.5856 18.6648 30.5295 19.9067 31.4C19.9496 31.4234 19.9978 31.4356 20.0467 31.4356C20.0956 31.4356 20.1437 31.4234 20.1867 31.4C23.6234 30.4648 26.6499 28.4096 28.7867 25.56C28.8143 25.5245 28.8345 25.4837 28.8459 25.4402C28.8574 25.3966 28.8599 25.3512 28.8533 25.3067C28.3314 22.3896 27.0894 19.6489 25.24 17.3334Z"
            fill="black"
          />
          <path
            d="M25.24 17.3334C25.2011 17.281 25.1465 17.2425 25.0841 17.2233C25.0218 17.2041 24.9549 17.2053 24.8933 17.2267C24.7141 17.2763 24.5314 17.312 24.3467 17.3334C24.2775 17.3397 24.212 17.3676 24.1594 17.413C24.1068 17.4584 24.0697 17.5192 24.0533 17.5867C23.28 21.1334 21.2133 24.72 16.3867 28.04C16.3085 28.1038 16.2563 28.1938 16.24 28.2934C16.2405 28.3965 16.2784 28.496 16.3467 28.5734C17.476 29.5856 18.6648 30.5295 19.9067 31.4C19.9496 31.4234 19.9978 31.4356 20.0467 31.4356C20.0956 31.4356 20.1437 31.4234 20.1867 31.4C23.6234 30.4648 26.6499 28.4096 28.7867 25.56C28.8143 25.5245 28.8345 25.4837 28.8459 25.4402C28.8574 25.3966 28.8599 25.3512 28.8533 25.3067C28.3314 22.3896 27.0894 19.6489 25.24 17.3334Z"
            fill="url(#paint4_linear_85_2198)"
          />
          <path
            d="M7.6 9.41333C7.66109 9.40399 7.71838 9.37784 7.76547 9.33781C7.81256 9.29779 7.8476 9.24546 7.86666 9.18667C8.07626 8.5919 8.4509 8.06913 8.94677 7.67952C9.44263 7.28991 10.0392 7.04959 10.6667 6.98667C10.6904 6.98537 10.7131 6.97709 10.7321 6.96284C10.7511 6.94861 10.7655 6.92905 10.7733 6.90667C11.7959 4.61867 13.1431 2.49009 14.7733 0.586667C14.8113 0.534321 14.8317 0.471321 14.8317 0.406667C14.8317 0.342012 14.8113 0.279012 14.7733 0.226667C14.7565 0.171299 14.7254 0.121281 14.6834 0.0815368C14.6413 0.0417924 14.5896 0.0136914 14.5333 0C11.3404 0.29951 8.31106 1.55163 5.83843 3.59392C3.36581 5.63621 1.56397 8.37443 0.666664 11.4533C0.645646 11.5183 0.645954 11.5883 0.667544 11.653C0.689135 11.7178 0.730875 11.774 0.786664 11.8133C0.841065 11.8524 0.906354 11.8734 0.973331 11.8734C1.04031 11.8734 1.1056 11.8524 1.16 11.8133C3.12319 10.5879 5.31364 9.77159 7.6 9.41333Z"
            fill="black"
          />
          <path
            d="M7.6 9.41333C7.66109 9.40399 7.71838 9.37784 7.76547 9.33781C7.81256 9.29779 7.8476 9.24546 7.86666 9.18667C8.07626 8.5919 8.4509 8.06913 8.94677 7.67952C9.44263 7.28991 10.0392 7.04959 10.6667 6.98667C10.6904 6.98537 10.7131 6.97709 10.7321 6.96284C10.7511 6.94861 10.7655 6.92905 10.7733 6.90667C11.7959 4.61867 13.1431 2.49009 14.7733 0.586667C14.8113 0.534321 14.8317 0.471321 14.8317 0.406667C14.8317 0.342012 14.8113 0.279012 14.7733 0.226667C14.7565 0.171299 14.7254 0.121281 14.6834 0.0815368C14.6413 0.0417924 14.5896 0.0136914 14.5333 0C11.3404 0.29951 8.31106 1.55163 5.83843 3.59392C3.36581 5.63621 1.56397 8.37443 0.666664 11.4533C0.645646 11.5183 0.645954 11.5883 0.667544 11.653C0.689135 11.7178 0.730875 11.774 0.786664 11.8133C0.841065 11.8524 0.906354 11.8734 0.973331 11.8734C1.04031 11.8734 1.1056 11.8524 1.16 11.8133C3.12319 10.5879 5.31364 9.77159 7.6 9.41333Z"
            fill="url(#paint5_linear_85_2198)"
          />
          <path
            d="M14.3599 29.3999C14.3055 29.3609 14.2402 29.3398 14.1732 29.3398C14.1062 29.3398 14.0409 29.3609 13.9865 29.3999C12.9749 29.8672 11.9213 30.2377 10.8399 30.5066C10.7706 30.5268 10.7098 30.5689 10.6665 30.6266C10.6232 30.6843 10.5999 30.7545 10.5999 30.8266C10.5999 30.8987 10.6232 30.9689 10.6665 31.0266C10.7098 31.0843 10.7706 31.1264 10.8399 31.1466C12.501 31.7136 14.2446 32.0019 15.9999 31.9999H16.3999C16.4675 31.9963 16.5326 31.9728 16.5872 31.9326C16.6417 31.8923 16.6832 31.8369 16.7065 31.7733C16.7275 31.7083 16.7272 31.6383 16.7056 31.5736C16.684 31.5088 16.6423 31.4526 16.5865 31.4133C15.8932 30.7866 15.1332 30.1333 14.3599 29.3999Z"
            fill="black"
          />
          <path
            d="M14.3599 29.3999C14.3055 29.3609 14.2402 29.3398 14.1732 29.3398C14.1062 29.3398 14.0409 29.3609 13.9865 29.3999C12.9749 29.8672 11.9213 30.2377 10.8399 30.5066C10.7706 30.5268 10.7098 30.5689 10.6665 30.6266C10.6232 30.6843 10.5999 30.7545 10.5999 30.8266C10.5999 30.8987 10.6232 30.9689 10.6665 31.0266C10.7098 31.0843 10.7706 31.1264 10.8399 31.1466C12.501 31.7136 14.2446 32.0019 15.9999 31.9999H16.3999C16.4675 31.9963 16.5326 31.9728 16.5872 31.9326C16.6417 31.8923 16.6832 31.8369 16.7065 31.7733C16.7275 31.7083 16.7272 31.6383 16.7056 31.5736C16.684 31.5088 16.6423 31.4526 16.5865 31.4133C15.8932 30.7866 15.1332 30.1333 14.3599 29.3999Z"
            fill="url(#paint6_linear_85_2198)"
          />
          <path
            d="M25.0001 11.2532C25.0024 11.316 25.0224 11.3768 25.0578 11.4287C25.0931 11.4806 25.1425 11.5215 25.2001 11.5466C25.7336 11.7812 26.1876 12.1656 26.5071 12.6531C26.8266 13.1407 26.9978 13.7104 27.0001 14.2932C27.0029 14.7555 26.8979 15.212 26.6934 15.6266C26.6543 15.681 26.6333 15.7462 26.6333 15.8132C26.6333 15.8802 26.6543 15.9455 26.6934 15.9999C28.1601 17.8343 29.297 19.9096 30.0534 22.1332C30.0734 22.1989 30.114 22.2564 30.1693 22.2972C30.2245 22.338 30.2914 22.36 30.3601 22.3599C30.4263 22.3663 30.4927 22.3499 30.5484 22.3136C30.6041 22.2773 30.6459 22.2231 30.6667 22.1599C31.5235 20.218 31.9771 18.1223 32.0001 15.9999C32.0064 13.2428 31.3003 10.5308 29.95 8.12696C28.5997 5.72312 26.6512 3.70899 24.2934 2.27989C24.2376 2.24427 24.1729 2.22534 24.1067 2.22534C24.0406 2.22534 23.9758 2.24427 23.9201 2.27989C23.8669 2.3184 23.8269 2.37231 23.8054 2.43432C23.784 2.49633 23.7821 2.56344 23.8001 2.62656C24.5248 5.44752 24.9274 8.34156 25.0001 11.2532Z"
            fill="black"
          />
          <path
            d="M25.0001 11.2532C25.0024 11.316 25.0224 11.3768 25.0578 11.4287C25.0931 11.4806 25.1425 11.5215 25.2001 11.5466C25.7336 11.7812 26.1876 12.1656 26.5071 12.6531C26.8266 13.1407 26.9978 13.7104 27.0001 14.2932C27.0029 14.7555 26.8979 15.212 26.6934 15.6266C26.6543 15.681 26.6333 15.7462 26.6333 15.8132C26.6333 15.8802 26.6543 15.9455 26.6934 15.9999C28.1601 17.8343 29.297 19.9096 30.0534 22.1332C30.0734 22.1989 30.114 22.2564 30.1693 22.2972C30.2245 22.338 30.2914 22.36 30.3601 22.3599C30.4263 22.3663 30.4927 22.3499 30.5484 22.3136C30.6041 22.2773 30.6459 22.2231 30.6667 22.1599C31.5235 20.218 31.9771 18.1223 32.0001 15.9999C32.0064 13.2428 31.3003 10.5308 29.95 8.12696C28.5997 5.72312 26.6512 3.70899 24.2934 2.27989C24.2376 2.24427 24.1729 2.22534 24.1067 2.22534C24.0406 2.22534 23.9758 2.24427 23.9201 2.27989C23.8669 2.3184 23.8269 2.37231 23.8054 2.43432C23.784 2.49633 23.7821 2.56344 23.8001 2.62656C24.5248 5.44752 24.9274 8.34156 25.0001 11.2532Z"
            fill="url(#paint7_linear_85_2198)"
          />
          <path
            d="M12.8133 7.17334C12.7824 7.24426 12.7761 7.32347 12.7954 7.39837C12.8148 7.47327 12.8586 7.53956 12.9199 7.58668C13.3774 7.90568 13.7448 8.33739 13.9866 8.84001C14.0214 8.91169 14.0817 8.96781 14.1556 8.9974C14.2296 9.02699 14.312 9.02792 14.3866 9.00001H14.6666C17.4057 9.10793 20.049 10.037 22.2533 11.6667C22.3063 11.7028 22.3691 11.7221 22.4333 11.7221C22.4975 11.7221 22.5602 11.7028 22.6133 11.6667L22.7999 11.5867C22.8595 11.5607 22.9103 11.5178 22.9458 11.4633C22.9813 11.4088 23.0001 11.3451 22.9999 11.28C22.8879 7.80038 22.3277 4.34972 21.3333 1.01334C21.315 0.955351 21.2798 0.904107 21.2324 0.866122C21.1849 0.828136 21.1272 0.805124 21.0666 0.800009C20.1093 0.473594 19.1224 0.241383 18.1199 0.106675C18.0681 0.100255 18.0155 0.106619 17.9667 0.125212C17.9179 0.143805 17.8743 0.174062 17.8399 0.213342C15.836 2.27758 14.1428 4.62208 12.8133 7.17334Z"
            fill="black"
          />
          <path
            d="M12.8133 7.17334C12.7824 7.24426 12.7761 7.32347 12.7954 7.39837C12.8148 7.47327 12.8586 7.53956 12.9199 7.58668C13.3774 7.90568 13.7448 8.33739 13.9866 8.84001C14.0214 8.91169 14.0817 8.96781 14.1556 8.9974C14.2296 9.02699 14.312 9.02792 14.3866 9.00001H14.6666C17.4057 9.10793 20.049 10.037 22.2533 11.6667C22.3063 11.7028 22.3691 11.7221 22.4333 11.7221C22.4975 11.7221 22.5602 11.7028 22.6133 11.6667L22.7999 11.5867C22.8595 11.5607 22.9103 11.5178 22.9458 11.4633C22.9813 11.4088 23.0001 11.3451 22.9999 11.28C22.8879 7.80038 22.3277 4.34972 21.3333 1.01334C21.315 0.955351 21.2798 0.904107 21.2324 0.866122C21.1849 0.828136 21.1272 0.805124 21.0666 0.800009C20.1093 0.473594 19.1224 0.241383 18.1199 0.106675C18.0681 0.100255 18.0155 0.106619 17.9667 0.125212C17.9179 0.143805 17.8743 0.174062 17.8399 0.213342C15.836 2.27758 14.1428 4.62208 12.8133 7.17334Z"
            fill="url(#paint8_linear_85_2198)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_85_2198"
              x1="35.7178"
              y1="-0.357344"
              x2="3.92979"
              y2="3.17382"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_85_2198"
              x1="26.2817"
              y1="15.8006"
              x2="7.59841"
              y2="18.3135"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_85_2198"
              x1="19.7039"
              y1="3.24909"
              x2="-5.21309"
              y2="6.25523"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_85_2198"
              x1="26.0544"
              y1="12.3761"
              x2="-5.33463"
              y2="17.0664"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_85_2198"
              x1="43.7869"
              y1="2.55012"
              x2="8.70897"
              y2="5.85802"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_85_2198"
              x1="31.6121"
              y1="-12.2354"
              x2="-7.53261"
              y2="-7.26451"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_85_2198"
              x1="23.9667"
              y1="26.5986"
              x2="7.7644"
              y2="30.5635"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_85_2198"
              x1="41.7179"
              y1="-18.5245"
              x2="18.7262"
              y2="-17.5274"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_85_2198"
              x1="35.0883"
              y1="-11.8678"
              x2="6.68253"
              y2="-9.21208"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "3":
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.45732 5.50143C11.0257 1.93301 16.8409 1.93301 20.4093 5.50143C23.3692 8.46132 23.8819 12.8459 22.0431 16.319C21.6985 16.9698 21.9468 17.7766 22.5976 18.1211C23.2484 18.4657 24.0553 18.2174 24.3999 17.5666C26.7671 13.0952 26.1113 7.43217 22.2949 3.61581C17.6852 -0.994008 10.1815 -0.994008 5.57171 3.61581C1.75535 7.43217 1.09959 13.0952 3.46683 17.5666C3.81136 18.2174 4.61826 18.4657 5.26906 18.1211C5.91987 17.7766 6.16814 16.9698 5.82359 16.319C3.98488 12.8458 4.49744 8.46132 7.45732 5.50143ZM10.3053 5.57468C8.34131 6.69845 6.93927 8.69251 6.62478 11.0313H9.59072C9.60168 9.17481 9.88652 7.33533 10.3053 5.57468ZM6.62476 13.0313C6.9664 15.5723 8.59188 17.7065 10.8271 18.7597C10.223 16.9433 9.8238 15.0025 9.66623 13.0313H6.62476ZM13.2031 19.4237C13.4621 19.451 13.7253 19.465 13.9917 19.465C14.2125 19.465 14.4311 19.4554 14.6471 19.4365C15.4524 17.4631 15.9868 15.2707 16.1821 13.0313H11.6732C11.868 15.2658 12.4005 17.4535 13.2031 19.4237ZM17.0051 18.8289C19.318 17.8021 21.0095 15.6293 21.3588 13.0313H18.1891C18.0295 15.0275 17.6221 16.9926 17.0051 18.8289ZM21.3587 11.0313C21.0364 8.6342 19.5716 6.59924 17.5303 5.49227C17.9599 7.27789 18.2535 9.14583 18.2645 11.0313H21.3587ZM15.258 4.70507C14.8465 4.63445 14.4235 4.59765 13.9917 4.59765C13.5127 4.59765 13.0443 4.64297 12.5904 4.72953C12.0125 6.79409 11.6047 8.92444 11.5908 11.0313H16.2645C16.2505 8.91612 15.8396 6.77727 15.258 4.70507ZM12.6667 21.3726V22.3502H5.33342C4.58574 22.3502 3.88171 22.637 3.37604 23.1983C2.88176 23.7471 2.66675 24.4561 2.66675 25.1639V25.8377C1.64092 26.3337 0.93335 27.3843 0.93335 28.6001C0.93335 30.2938 2.30635 31.6667 4.00003 31.6667C5.6937 31.6667 7.06668 30.2938 7.06668 28.6001C7.06668 27.3843 6.35918 26.3338 5.33342 25.8377V25.1639C5.33342 25.0945 5.34108 25.0471 5.34892 25.0169H12.6667V25.8377C11.6409 26.3338 10.9333 27.3843 10.9333 28.6001C10.9333 30.2938 12.3064 31.6667 14 31.6667C15.6937 31.6667 17.0667 30.2938 17.0667 28.6001C17.0667 27.3843 16.3591 26.3337 15.3333 25.8377V25.0169H22.6512C22.6591 25.0471 22.6668 25.0945 22.6668 25.1639V25.8377C21.6409 26.3337 20.9333 27.3843 20.9333 28.6001C20.9333 30.2938 22.3064 31.6667 24 31.6667C25.6937 31.6667 27.0667 30.2938 27.0667 28.6001C27.0667 27.3843 26.3592 26.3338 25.3335 25.8377V25.1639C25.3335 24.4561 25.1184 23.7471 24.6241 23.1983C24.1184 22.637 23.4144 22.3502 22.6668 22.3502H15.3333V21.3703C14.8951 21.4327 14.4472 21.465 13.9917 21.465C13.542 21.465 13.0996 21.4335 12.6667 21.3726Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.45732 5.50143C11.0257 1.93301 16.8409 1.93301 20.4093 5.50143C23.3692 8.46132 23.8819 12.8459 22.0431 16.319C21.6985 16.9698 21.9468 17.7766 22.5976 18.1211C23.2484 18.4657 24.0553 18.2174 24.3999 17.5666C26.7671 13.0952 26.1113 7.43217 22.2949 3.61581C17.6852 -0.994008 10.1815 -0.994008 5.57171 3.61581C1.75535 7.43217 1.09959 13.0952 3.46683 17.5666C3.81136 18.2174 4.61826 18.4657 5.26906 18.1211C5.91987 17.7766 6.16814 16.9698 5.82359 16.319C3.98488 12.8458 4.49744 8.46132 7.45732 5.50143ZM10.3053 5.57468C8.34131 6.69845 6.93927 8.69251 6.62478 11.0313H9.59072C9.60168 9.17481 9.88652 7.33533 10.3053 5.57468ZM6.62476 13.0313C6.9664 15.5723 8.59188 17.7065 10.8271 18.7597C10.223 16.9433 9.8238 15.0025 9.66623 13.0313H6.62476ZM13.2031 19.4237C13.4621 19.451 13.7253 19.465 13.9917 19.465C14.2125 19.465 14.4311 19.4554 14.6471 19.4365C15.4524 17.4631 15.9868 15.2707 16.1821 13.0313H11.6732C11.868 15.2658 12.4005 17.4535 13.2031 19.4237ZM17.0051 18.8289C19.318 17.8021 21.0095 15.6293 21.3588 13.0313H18.1891C18.0295 15.0275 17.6221 16.9926 17.0051 18.8289ZM21.3587 11.0313C21.0364 8.6342 19.5716 6.59924 17.5303 5.49227C17.9599 7.27789 18.2535 9.14583 18.2645 11.0313H21.3587ZM15.258 4.70507C14.8465 4.63445 14.4235 4.59765 13.9917 4.59765C13.5127 4.59765 13.0443 4.64297 12.5904 4.72953C12.0125 6.79409 11.6047 8.92444 11.5908 11.0313H16.2645C16.2505 8.91612 15.8396 6.77727 15.258 4.70507ZM12.6667 21.3726V22.3502H5.33342C4.58574 22.3502 3.88171 22.637 3.37604 23.1983C2.88176 23.7471 2.66675 24.4561 2.66675 25.1639V25.8377C1.64092 26.3337 0.93335 27.3843 0.93335 28.6001C0.93335 30.2938 2.30635 31.6667 4.00003 31.6667C5.6937 31.6667 7.06668 30.2938 7.06668 28.6001C7.06668 27.3843 6.35918 26.3338 5.33342 25.8377V25.1639C5.33342 25.0945 5.34108 25.0471 5.34892 25.0169H12.6667V25.8377C11.6409 26.3338 10.9333 27.3843 10.9333 28.6001C10.9333 30.2938 12.3064 31.6667 14 31.6667C15.6937 31.6667 17.0667 30.2938 17.0667 28.6001C17.0667 27.3843 16.3591 26.3337 15.3333 25.8377V25.0169H22.6512C22.6591 25.0471 22.6668 25.0945 22.6668 25.1639V25.8377C21.6409 26.3337 20.9333 27.3843 20.9333 28.6001C20.9333 30.2938 22.3064 31.6667 24 31.6667C25.6937 31.6667 27.0667 30.2938 27.0667 28.6001C27.0667 27.3843 26.3592 26.3338 25.3335 25.8377V25.1639C25.3335 24.4561 25.1184 23.7471 24.6241 23.1983C24.1184 22.637 23.4144 22.3502 22.6668 22.3502H15.3333V21.3703C14.8951 21.4327 14.4472 21.465 13.9917 21.465C13.542 21.465 13.0996 21.4335 12.6667 21.3726Z"
            fill="url(#paint0_linear_85_2216)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_85_2216"
              x1="57.9911"
              y1="-32.3105"
              x2="-14.746"
              y2="-25.8959"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
};
