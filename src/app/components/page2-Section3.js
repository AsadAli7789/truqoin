import Image from "next/image";

export default function Pge2() {
  return (
    <>
      <div className="border-white mt-20">
        <div className="md:w-[83.162vw] w-[100vw] font-montserrat border-white mx-auto">
          <div className="w-full border xl:max-w-[1071px] border-white mx-auto text-center">
            <div className="lg:text-[2vw] xsm:text-[4vw] border font-montserrat h leading-[2vw] xsm:leading-[4vw] font-[700] text-white">
              About Us
            </div>

            <div className="xl:text-[1.6vw]  mx-auto text-[2.5vw] font-montserrat sm:text-[3vw] font-[700] text-white">
              TrūQoin is a groundbreaking cryptocurrency designed to make
              financial freedom accessible to everyone. Built on the TRON
              blockchain, we’ve created a unique system where your activities
              within the TrūIQ Global ecosystem translate directly into rewards.
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[102.4vw] place-content-center  lg:h-[172.981vh] mx-auto">
        <Image
          width={0}
          height={0}
          // objectFit="cover"
          layout="responsive"
          src={"/tab.png"}
        />
      </div>
    </>
  );
}
