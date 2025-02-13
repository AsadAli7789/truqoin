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
        <div className="border-white mt-20 my-20 lg:my-32">
          <div className="w-full z-10 sm:w-[59.167vw] font-montserrat border-white mx-auto">
            <div className="w-full sm:w-[37.135vw] border-white mx-auto text-center">
              <div className="text-[6vw] sm:text-[1.25vw] md:text-[1.25vw] leading-[4vw] sm:leading-[1.25vw] font-[700] text-white">
                Contact Us
              </div>

              <div className="xl:text-[3.646vw] text-[8vw] sm:text-[3.5vw] font-[700] text-white">
                We’re Here for You
              </div>

              <div className="xl:text-[0.729vw] md:text-[0.829vw] px-8 md:px-0 text-[2.5vw] sm:text-[0.9vw] font-[700] text-[#8E8E8E]">
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
        <div className="my-20 lg:my-32 ">
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
