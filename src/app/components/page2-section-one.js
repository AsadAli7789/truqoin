"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionTwo() {
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true, // Triggers only once when entering view
    threshold: 0.2, // Triggers when 20% of the element is in view
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      id="p2_sec3"
      className=" border-[0.5px]  rounded-[8px] my-10 max-w-[1459px] xl:min-h-[277px]  border-[#343434] overflow-hidden w-[75.99vw] items-center  justify-center  flex flex-col lg:flex-row mx-auto"
    >
      <div className=" flex flex-col lg:flex-row xl:justify-between   xl:w-[90%]  xl:max-w-[1205px]">
        {/* Vision Section with Motion */}
        <motion.div
          ref={visionRef}
          className="w-full lg:w-[50%]   max-w-[492px] px-5 py-10 -white text-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: visionInView ? 1 : 0,
            x: visionInView ? 0 : -100,
          }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-[492px]">
            <div className="text-[24px] md:text-[32px] font-montserrat font-[700] text-white my-2">
              Our Vision{" "}
            </div>
            <div className="sm:text-[14px] text-[13px] leading-[16px] sm:leading-[17px]  font-montserrat my-2 md:text-[#8E8E8E] md:font-[400] text-[#ffffffcb] font-[500]">
              By connecting systems, processes and people through positive
              activities, TruQoin is anxiously engaged in creating tools to give
              everyone an opportunity for success and a better life.
            </div>
          </div>
        </motion.div>

        {/* Mission Section with Motion */}

        <motion.div
          ref={missionRef}
          className="w-full lg:w-[50%]  max-w-[492px] p-10 -white  text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: missionInView ? 1 : 0,
            x: missionInView ? 0 : 100,
          }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-[492px]">
            <div className="text-[24px] md:text-[32px] font-montserrat font-[700] text-white my-2">
              Our Mission
            </div>
            <div className="sm:text-[14px] text-[13px] leading-[16px] sm:leading-[17px]  font-montserrat my-2 md:text-[#8E8E8E] md:font-[400] text-[#ffffffcb] font-[500]">
              To simplify and normalize the acquisition and use of
              cryptocurrency and digital assets around the world.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
