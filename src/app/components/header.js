"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../globals.css";
import { Lock } from "lucide-react";

const arry = [
  { name: "Earn", Link: "/" },
  { name: "Trade", Link: "/" },
  { name: "Spend", Link: "/" },
  { name: "About", Link: "/about" },
  { name: "Doc", Link: "/" },
  { name: "Contact", Link: "/contact" },
];

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [text, settext] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu
  // const { ref, inView } = useInView({
  //   triggerOnce: true, // Animation triggers only once
  //   threshold: 0.1, // Trigger when 10% of the component is in view
  // });
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowHeader(true); // Show when scrolling up
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  console.log(showHeader);
  return (
    <>
      <motion.div
        // ref={ref}
        id="nav"
        className={`flex flex-wrap p-4  ${
          showHeader ? "translate-y-0" : "-translate-y-[200%]"
        }  left-0 right-0 z-10 rounded-[10px] md:fixed transition-transform duration-300 mt-3 text-white justify-between items-center md:w-[95vw] lg:w-[75.208vw] max-w-[1200px] mx-auto`}
        // initial={{ opacity: 0, y: -20 }}
        // animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        // transition={{ duration: 0.5 }}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={120} height={120} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <div className="flex flex-row lg:gap-x-6 gap-x-4 gap-y-5">
            <Link href={"/"}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`font-montserrat hover:text-white  text-[#BABABA]
                   
                    font-[500] text-[14px]`}
              >
                Earn
              </motion.span>
            </Link>
            <Link href={"/"}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`font-montserrat  hover:text-white text-[#BABABA] font-[500] text-[14px]`}
              >
                Trade
              </motion.span>
            </Link>
            <Link href={"/"}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`font-montserrat hover:text-white text-[#BABABA]  font-[500] text-[14px]`}
              >
                Spend
              </motion.span>
            </Link>
            <Link href={"/about"}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`font-montserrat hover:text-white text-[#BABABA] font-[500] text-[14px]`}
              >
                About
              </motion.span>
            </Link>
            <Link href={"/"}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`font-montserrat hover:text-white text-[#BABABA]  font-[500] text-[14px]`}
              >
                Doc
              </motion.span>
            </Link>
            <Link href={"/contact"}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`font-montserratM hover:text-white text-[#BABABA]  font-[500] text-[14px]`}
              >
                Contact
              </motion.span>
            </Link>
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
            // whileHover={{ scale: 1.1 }}
            // id="btn"
            className="text-[12px] px-10  flex justify-center items-center gap-0 bg-custom-gradient duration-300  hover:bg-custom-gradient1 py-3 leading-[13px] rounded-[8px]"
          >
            <div className=" text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                width="18"
                height="12"
                fill="currentColor"
                version="1.1"
                viewBox="0 0 330 330"
              >
                <g id="XMLID_509_">
                  <path
                    id="XMLID_510_"
                    d="M65 330h200c8.284 0 15-6.716 15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85S80 38.131 80 85v45H65c-8.284 0-15 6.716-15 15v170c0 8.284 6.716 15 15 15m115-95.014V255c0 8.284-6.716 15-15 15s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986 0-13.785 11.215-25 25-25s25 11.215 25 25c0 8.162-3.932 15.421-10 19.986M110 85c0-30.327 24.673-55 55-55s55 24.673 55 55v45H110z"
                  ></path>
                </g>
              </svg>
            </div>
            Launch WebApp
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="nav"
            className="text-white absolute w-[90vw] mx-4 z-10  p-4 rounded-[20px] mt-2 flex flex-col items-center md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {arry.map((data, ind) => (
              <Link
                href={data.Link}
                onClick={() => {
                  settext(data.name);
                  setMenuOpen(false); // Close menu on click
                }}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`font-montserrat ${
                    text === "Earn" ? "text-white" : "text-[#BABABA]"
                  } font-[900] block my-2`}
                >
                  {data.name}{" "}
                </motion.span>
              </Link>
            ))}
            <motion.button
              // whileHover={{ scale: 1.1 }}
              className="text-[12px] gap-1 bg-custom-gradient duration-300 flex justify-center items-center hover:bg-custom-gradient1  px-8 py-3 rounded-[10px] mt-4"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                width="12"
                height="12"
                fill="currentColor"
                version="1.1"
                viewBox="0 0 330 330"
              >
                <g id="XMLID_509_">
                  <path
                    id="XMLID_510_"
                    d="M65 330h200c8.284 0 15-6.716 15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85S80 38.131 80 85v45H65c-8.284 0-15 6.716-15 15v170c0 8.284 6.716 15 15 15m115-95.014V255c0 8.284-6.716 15-15 15s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986 0-13.785 11.215-25 25-25s25 11.215 25 25c0 8.162-3.932 15.421-10 19.986M110 85c0-30.327 24.673-55 55-55s55 24.673 55 55v45H110z"
                  ></path>
                </g>
              </svg>
              Launch WebApp <div className=" text-white "></div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
