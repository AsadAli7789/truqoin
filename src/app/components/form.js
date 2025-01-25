"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Form() {
  const { ref: formRef, inView } = useInView({
    triggerOnce: true, // trigger once when in view
    threshold: 0.3, // 30% of the component is in view before triggering
  });

  return (
    <>
      <div
        id="bg"
        className="border bg-[#00000066] p-8 mt-10 relative border-[#343434] rounded-[10px] lg:w-[75.99vw] mx-auto"
      >
        <div
          id="Contact_form_bg"
          className="border-white absolute w-[550px] h-[550px] rounded-full left-[30%]"
        ></div>

        <div className="lg:w-[57.083vw] mx-auto my-4">
          <div className="xl:w-[32.396vw] text-center my-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.5 }}
              className="xl:text-[3vw] text-[6vw] leading-[6vw] xl:leading-[3vw] text-white font-[600] font-montserrat"
            >
              Send Us a Message
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="xl:text-[.9vw] text-[#8E8E8E] my-6 xl:leading-[1vw] font-[500] font-montserrat"
            >
              Have a question or need assistance? Fill out the form below, and
              we’ll get back to you as soon as possible.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 p-6"
            ref={formRef}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Left input: Full Name */}
              <motion.input
                type="text"
                id="Input"
                className="border p-6 sm:w-[48%] w-full text-[#8E8E8E] text-[14px] border-[#343434] rounded-[8px]"
                placeholder="Full Name"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
              {/* Right input: Email */}
              <motion.input
                type="email"
                id="Input"
                className="border sm:w-[48%] w-full p-6 text-[#8E8E8E] text-[14px] border-[#343434] rounded-[8px]"
                placeholder="Email"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Top input: Subject */}
            <motion.input
              type="text"
              id="Input"
              className="border p-6 w-full text-[#8E8E8E] text-[14px] border-[#343434] rounded-[8px]"
              placeholder="Subject"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Message Textarea */}
            <motion.textarea
              type="text"
              id="Input"
              className="border p-6 w-full text-[#8E8E8E] text-[14px] border-[#343434] max-h-[15vh] min-h-[15vh] rounded-[8px]"
              placeholder="Message"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            {/* Button coming from bottom */}
            <motion.button
              id="Input_btn"
              className="text-[12px] sm:text-[14px] font-montserrat text-white w-full py-3 rounded-[8px]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Start Earning
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
