import Image from "next/image";

export default function Section_8() {
  return (
    <div className="text-white flex flex-col items-center px-4 md:px-8">
      {/* Text Section */}
      <div className="max-w-[650px] p-4 text-center">
        <div className="text-2xl md:text-3xl xl:text-[2.5vw] my-4 leading-tight xl:leading-[3.1vw] font-bold font-montserrat">
          Connecting
        </div>
        <div className="text-sm md:text-base xl:text-[0.729vw] my-4 text-[#8E8E8E] leading-relaxed xl:leading-[0.885vw] font-semibold font-montserrat">
          TruQoin (along with its Product Partners) is connecting the digital
          world with that of traditional marketing, shopping, and social
          rewards.
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-full w-full  xl:max-h-[495.96px] xl:max-w-[1320px] flex flex-col md:flex-row xl:h-[60.7vh] xl:w-[68.75vw] gap-4">
        {/* Left Image */}
        <div className="w-[80%] mx-auto md:w-1/3 pt-4  md:pt-0 xl:pt-10">
          <Image
            src="/sec8.png"
            width={0}
            height={0}
            layout="responsive"
            objectFit="cover"
            alt="Left Image"
          />
        </div>

        {/* Middle GIF/Image */}
        <div className="w-[80%] mx-auto md:w-1/3 relative">
          <div id="Sec8" className="absolute   w-[100%] h-[40vh]"></div>
          <div
            id=""
            className=" absolute inset-0 bg-[#EE5A02] mix-blend-hue  w-[100%] "
          ></div>

          <Image
            className="filter  "
            src="/sec8_3.gif"
            width={0}
            height={0}
            layout="responsive"
            alt="Middle GIF"
          />
        </div>

        {/* Right Image */}
        <div className="w-[80%] mx-auto border md:w-1/3 mt-auto">
          <Image
            src="/sec8_2.png"
            width={0}
            height={0}
            layout="responsive"
            alt="Right Image"
          />
        </div>
      </div>
    </div>
  );
}
