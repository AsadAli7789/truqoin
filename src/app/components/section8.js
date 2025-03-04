import Image from "next/image";

export default function Section_8() {
  return (
    <div className="text-white flex flex-col items-center px-4 md:px-8">
      {/* Text Section */}
      <div className="max-w-[650px] p-4 text-center">
        <div className="text-[28px] md:text-[48px]  md:leading-[48px] leading-[29px] my-4   font-bold font-montserrat">
          Connecting
        </div>
        <div className=" text-[13px] leading-[16px]  md:text-[14px]   my-4 text-[#8E8E8E]  font-montserrat">
          TruQoin (along with its’ Product Partners) is connecting the digital
          world with that of traditional marketing, shopping and social rewards.
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-full md:h-[50vh] md:max-h-[260.96px] lg:max-h-[390.96px]  lg:h-[70.7vh] w-full   xl:max-h-[495.96px] xl:max-w-[1320px] flex flex-col md:flex-row xl:h-[60.7vh] xl:w-[70.75vw] gap-4">
        {/* Left Image */}
        <div className="w-[80%] mx-auto md:w-1/3 pt-4 md:translate-x-20 translate-x-0  md:pt-0 xl:pt-10">
          <Image
            src="/sec8.png"
            width={0}
            height={0}
            className="rounded-[10px]"
            layout="responsive"
            objectFit="cover"
            alt="Left Image"
          />
          <h1 className="text-[13px] leading-[16px] md:text-[14px]  text-center ">
            <span id="h2"> TruQoin</span> Miner site (Decentralized)
          </h1>
        </div>

        {/* Middle GIF/Image */}
        <div className="w-[80%] mx-auto md:w-1/3 rotate-[48deg]  -translate-y-10 md:translate-y-0  md:rotate-[20deg] z-[-1] relative  ">
          <div className=" h-fit relative  w-[100%]  ">
            <div
              id="Sec8"
              className="absolute z-[2]   border border-[#111111]  w-[100%] h-[100%] "
            ></div>
            <div
              id=""
              className=" absolute inset-0 z-[1] border-[#111111] border mt-2 h-[90%]  bg-[#EE5A02] mix-blend-hue  left-1 w-[95%] "
            ></div>

            <Image
              className="filter   scale-x-[-1] "
              src="/sec8_3.gif"
              width={0}
              height={0}
              layout="responsive"
              alt="Middle GIF"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[80%] mx-auto   -translate-y-10 md:translate-y-0 md:-translate-x-20 translate-x-0   md:w-1/3 mt-auto">
          <Image
            src="/sec8_2.png"
            width={0}
            height={0}
            className="border rounded-[10px]"
            layout="responsive"
            alt="Right Image"
          />
          <h1 className="text-[13px] leading-[16px] md:text-[14px]   my-2  text-center">
            <span id="h2"> TruIQ </span> Dashboard (Centralized)
          </h1>
        </div>
      </div>
    </div>
  );
}
