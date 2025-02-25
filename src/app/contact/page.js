import Footer from "@/app/components/footer";
import Form from "../components/form";
import SectionFour from "@/app/components/Section-four";
import Header from "../components/header";
import ContactCard from "../components/card";

export default function Contact() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div>
          <Header />
        </div>
        <div className="border-white mt-20 md:mt-32 my-20 lg:my-32">
          <div className="w-[90%] z-10 sm:w-[59.167vw] font-montserrat border-white mx-auto">
            <div className="w-full   border-white mx-auto text-center">
              <div className="md:text-[24px] text-[18px] font-[700] text-white">
                Contact Us
              </div>

              <div className="text-white font-montserrat  font-[700] my-3 text-[2rem] sm:text-[2.5rem] lg:text-[70px] leading-[2.5rem] sm:leading-[3rem] lg:leading-[85.33px]">
                We’re Here for You
              </div>

              <div className="md:text-[14px] text-[13px]   leading-[16px] px-8 md:px-0  font-[700] text-[#8E8E8E]">
                Whether you have questions, need support, or want to learn more
                about <b className="text-white">TrūQoin</b> we’re just a message
                away. Reach out to us anytime!
              </div>
            </div>
          </div>
        </div>

        <div className="my-20 lg:my-32">
          <Form />
        </div>
        <div className="my-20 lg:my-32">
          <ContactCard />
        </div>
        <div className="my-10 md:my-20 ">
          <SectionFour />
        </div>
        <div></div>
        <div className="overflow-hidden relative">
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
