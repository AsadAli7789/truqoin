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
        <div className="my- hidden lg:block ">
          <MobileSection />
        </div>
        <div className="my- lg:hidden block ">
          <Carouse />
        </div>
        <div className="my- relative bg-[]">
          <div
            id="bg2"
            className="absolute w-[300vw] h-[100%] bottom-0  opacity-[0.8] z-[-1]"
          ></div>
          <SectionOne />
          <div
            id="bg2"
            className="absolute w-[300vw] h-[100%] top-0   z-[-1]"
          ></div>
        </div>
        <div
          id="gradent"
          className="  w-[100%] opacity-  h-[100%] z-[-1] absolute border-white"
        ></div>
        <div className="md:my-10 my-20">
          <SectionTwo />
        </div>
        <div className="md:my-48 my-20">
          <SectionThree />
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
