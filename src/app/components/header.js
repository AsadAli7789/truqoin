"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../globals.css";

const arry = [
  { name: "Earn", Link: "/" },
  { name: "Trade", Link: "/" },
  { name: "Spend", Link: "/" },
  { name: "About", Link: "/about" },
  { name: "Doc", Link: "/" },
  { name: "Contact", Link: "/contact" },
];

export default function Header() {
  const [text, settext] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <>
      <motion.div
        ref={ref}
        id="nav"
        className="flex flex-wrap p-4 rounded-[10px] mt-3 text-white justify-between items-center md:w-[95vw] lg:w-[75.208vw] max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={"/logo.png"} width={120} height={120} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <div className="flex flex-row gap-5">
            {arry.map((data, ind) => (
              <Link
                key={ind}
                href={data.Link}
                onClick={() => settext(data.name)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`font-montserratM ${
                    text === data.name ? "text-white" : "text-[#BABABA]"
                  } font-[500] text-[14px]`}
                >
                  {data.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.1 }}
            id="btn"
            className="text-[12px] px-10 py-3 leading-[13px] rounded-[8px]"
          >
            Launch WebApp
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="nav"
            className="text-white absolute w-[90vw] mx-4  p-4 rounded-[20px] mt-2 flex flex-col items-center md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {arry.map((data, ind) => (
              <Link
                key={ind}
                href={data.Link}
                onClick={() => {
                  settext(data.name);
                  setMenuOpen(false); // Close menu on click
                }}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`font-montserrat ${
                    text === data.name ? "text-white" : "text-[#BABABA]"
                  } font-[900] block my-2`}
                >
                  {data.name}
                </motion.span>
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              id="btn"
              className="text-[12px] duration-300 px-8 py-3 rounded-[10px] mt-4"
            >
              Launch WebApp
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
