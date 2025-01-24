import Footer from "@/app/components/footer";
import Form from "../components/form";
import SectionFour from "@/app/components/Section-four";
import Header from "../components/header";
import ContactCard from "../components/card";

export default function Contact() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="border-white mt-20">
        <div className="w-full sm:w-[59.167vw] font-montserrat border-white mx-auto">
          <div className="w-full sm:w-[37.135vw] border-white mx-auto text-center">
            <div className="text-[2vw] sm:text-[1.25vw] leading-[2vw] sm:leading-[1.25vw] font-[700] text-white">
              Contact Us
            </div>

            <div className="xl:text-[3.646vw] text-[4vw] sm:text-[3.5vw] font-[700] text-white">
              We’re Here for You
            </div>

            <div className="xl:text-[0.729vw] text-[2.5vw] sm:text-[3vw] font-[700] text-[#8E8E8E]">
              Whether you have questions, need support, or want to learn more
              about <b className="text-white">TrūQoin</b> we’re just a message
              away. Reach out to us anytime!
            </div>
          </div>
        </div>
      </div>

      <div>
        <Form />
      </div>
      <div>
        <ContactCard />
      </div>
      <div>
        <SectionFour />
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </>
  );
}
