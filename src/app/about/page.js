import Image from "next/image";
import SectionTwo from "../components/page2-section-one";
import SectionFour1 from "../components/page2-section4";
import Header from "../components/header";
import Footer from "../components/footer";
import Gsap from "../components/page2-sec";
import Future from "../components/page2Section";
import Pge2 from "../components/page2-Section3";
import Section3 from "../components/Section3";
import AboutSec from "../components/about-sec1";
import SectionFour from "../components/Section-four";

export default function About() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div>
          <Header />
        </div>
        <Pge2 />
        <div
          id="F_sec"
          className="absolute hidden lg:block  w-[769px] h-[742px] rounded-full -left-[30%] "
        ></div>
        <div className=" lg:my-20 ">
          <SectionTwo />
        </div>
        <div>
          <div className="lg:hidden block  border-white mt-10">
            <Section3 />
          </div>

          <div className="hidden lg:block mt-10 ">
            <Gsap />
          </div>
        </div>
        <div className=" mb-20  my-10  lg:mt-[-500px] ">
          <SectionFour1 />
        </div>

        <div className="mb-[10vw]  my-10  lg:my-20">
          <Future />
        </div>
        <div>
          <div className="md:my-20 my-10 lg:my-32">
            <AboutSec />
          </div>
          <div className="md:my-20">
            <SectionFour />
          </div>
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
