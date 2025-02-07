import Image from "next/image";
import Header from "./components/header";
import SectionOne from "./components/Section-one";
import SectionTwo from "./components/Section-two";
import SectionThree from "./components/Section-three";
import SectionFour from "./components/Section-four";
import Footer from "./components/footer";
import SectiontWo from "./components/page2-section-one";
import Section from "./components/Section";
import MobileSection from "./components/mobileSection";
import SectionfOur from "./components/page2-section4";
import MiddleMobile from "./components/Middlemobile";
import RightMobile from "./components/rightMobile";
import LeftMobile from "./components/LeftMobile";
import Carouse from "./components/carasule";
import Section_8 from "./components/section8";
import Section3 from "./components/Section3";
import SectionThrees from "./components/sectionThree";

export default function Home() {
  return (
    <>
      <div className="relative  overflow-hidden">
        <div>
          <Header />
        </div>
        <div className="my-28">
          <Section />
        </div>
        <div className=" text-center w-[80vw] md:max-w-[426px] md:my-5  font-montserrat mx-auto  md:w-[50%]">
          <div className="md:text-[48px] text-[32px] font-[700] text-white">
            Our Mission
          </div>
          <div className="md:text-[14px] text-[14px] text-[#8E8E8E] font-[600]">
            To simplify and normalize the acquisition and use of cryptocurrency
            and digital assets.
          </div>
        </div>
        <div className="my- hidden lg:block relative ">
          <div
            id="bg2"
            className="absolute w-[100%] h-[100%] bottom-0  opacity-[0.8] z-[-1]"
          ></div>

          <MobileSection />
          <div
            id="bg2"
            className="absolute w-[300vw] h-[100%] top-0   z-[-2]"
          ></div>
        </div>
        <div className="my-10 lg:hidden block relative ">
          <div
            id="bg2"
            className="absolute w-[100%] h-[100%] bottom-0  opacity-[0.8] z-[-1]"
          ></div>
          <Carouse />
        </div>
        <div
          id="gradent"
          className="  w-[100%] opacity-  h-[100%] z-[-2] absolute border-white"
        ></div>
        <div className="md:my-32 relative bg-[]">
          <SectionThrees />
        </div>

        {/* <div className="md:my-10 my-20">
          <SectionTwo />
        </div> */}
        <div className="md:my-48 my-20">
          <Section_8 />
        </div>
        <div className="md:my-10 my-20">
          <SectionFour />
        </div>
        <div className="md:mt-[10vw] mt-20">
          <div
            id="F_sec"
            className="absolute  w-[809px] h-[742px] rounded-full -right-[30%] "
          ></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
