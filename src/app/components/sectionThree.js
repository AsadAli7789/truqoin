import Image from "next/image";

const arry = [
  { id: "1", name: "Acquire" },
  { id: "2", name: "Hold" },
  { id: "3", name: "Swap" },
  { id: "4", name: "Exchange" },
  { id: "5", name: "Stake" },
  { id: "6", name: "Earn" },
];
const arry2 = [
  { id: "1", name: "Shop" },
  { id: "2", name: "Share" },
  { id: "3", name: "Buy" },
  { id: "4", name: "Earn" },
];

export default function SectionThrees() {
  return (
    <div className="font-montserrat">
      <div className="xl:max-w-[1096px] w-[85vw] sm:w-[80vw] md:w-[82vw] lg:w-[60vw] mx-auto text-center">
        <h1 className="text-white font-[700] my-3 text-[27px] md:text-[48px] leading-[30px] md:leading-[58.51px]">
          One Location for all your cryptocurrency and personal needs.
        </h1>
        <p className="font-[400] text-[#8E8E8E]   w-[80%] my-3 text-[13px] xl:w-[50%] mx-auto  sm:text-[14px] sm:leading-[14px]">
          To simplify and normalize the acquisition and use of cryptocurrency
          and digital assets.
        </p>
      </div>

      <div className="xl:max-w-[1278.27px] flex flex-col lg:w-[80vw]  lg:flex-row items-center xl:items-start relative mt-10 mx-auto">
        <div
          id="secThree"
          className="xl:max-w-[538px] w-[80vw] sm:w-[60vw] xl:w-[40%]  md:w-[60vw]  flex flex-col md:flex-row p-4 lg:p-0 xl:p-4 border border-[#34343480] border-dotted rounded-[10px]"
        >
          <div className="w-full xl:w-[50%] h-full p-4 flex flex-col gap-2">
            <h2 className="text-white   text-[16px] md:leading-[24.38px]  md:text-[20px] font-[700] ">
              Digital Activities
            </h2>
            {arry.map((data) => (
              <div
                id="secThree-btm"
                key={data.id}
                className="flex md:p-4 p-2 items-center rounded-[10px] gap-x-3 border border-[#343434]"
              >
                {Svg1(data.id)}

                <h3 className="text-white font-[500]  text-[13px] leading-[16px] md:text-[14px]">
                  {data.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="w-full xl:w-[50%] h-full p-4 flex flex-col gap-2">
            <h2 className="text-white text-[16px] md:leading-[24.38px]  md:text-[20px] font-[700]">
              Personal Activities
            </h2>
            {arry2.map((data) => (
              <div
                id="secThree-btm"
                key={data.id}
                className="flex md:p-4 p-2  items-center border rounded-[10px] gap-x-3 border-[#343434]"
              >
                {Svg2(data.id)}

                <h3 className="text-white font-[500] text-[13px] leading-[16px] md:text-[14px]">
                  {data.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute xl:-bottom-10 lg:-bottom-10 z-[2]  lg:left-[35%]  xl:left-[30%]">
          <Image
            src="/Arrow&text.png"
            width={600}
            height={600}
            alt="Arrow & text"
            className=""
          />
        </div>
        <div className="lg:hidden w-[90%] text-[28px] md:text-[48px] font-[700] my-4 text-center text-white">
          <div>OR</div>
          <div>
            <div id="h2" className="">
              Use the TruQoin App
            </div>
          </div>
        </div>

        <div className="xl:max-w-[656px] relative  w-full lg:p-4 xl:w-[60%] mt-10 xl:mt-0 ml-auto">
          <div
            id="lean"
            className="absolute
           w-[100%] left-0 right-0 top-0 h-[100%] hidden lg:block"
          ></div>
          <Image
            src="/sec123.png"
            layout="responsive"
            width={0}
            height={0}
            alt="Tabs"
          />
        </div>
      </div>
    </div>
  );
}

function Svg1(name) {
  switch (name) {
    case "1":
      return (
        <svg
          width="38"
          height="35"
          viewBox="0 0 38 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.8491 5.08311C25.388 4.20955 23.6773 3.84827 21.9878 4.05647C20.2986 4.26462 18.7271 5.03009 17.522 6.23174L17.5211 6.2326L12.8396 10.9141C12.5517 11.202 12.3899 11.5926 12.3899 11.9999C12.3899 12.4071 12.5517 12.7977 12.8396 13.0857C13.1276 13.3736 13.5182 13.5354 13.9254 13.5354C14.3327 13.5354 14.7232 13.3736 15.0112 13.0857L16.4779 11.619L16.4787 11.6181C17.7912 10.3072 19.5704 9.57093 21.4254 9.57093C23.2804 9.57093 25.0596 10.3072 26.3721 11.6181L26.373 11.619L32.8396 18.0857C33.0628 18.3088 33.2649 18.549 33.4447 18.8033L32.2841 6.03674L31.4198 6.21059L31.4119 6.21216C30.1128 6.46805 28.7651 6.23156 27.6308 5.54883L26.8518 5.08473L26.8491 5.08311ZM31.9255 2.02876L30.6389 2.28757L30.6358 2.28817C30.3115 2.35128 29.9752 2.2917 29.6922 2.12091L29.6922 2.12088L29.6824 2.115L28.9017 1.64995L28.8999 1.64888C26.6753 0.319324 24.0708 -0.230477 21.4985 0.0865012C19.8669 0.287563 18.3074 0.830087 16.9166 1.667H5.89801C5.75101 0.792677 5.03093 0.0922547 4.10651 0.0082165C3.00647 -0.0917866 2.03365 0.718898 1.93365 1.81893L0.266981 20.1523C0.213243 20.7434 0.424844 21.3278 0.844554 21.7476L11.6779 32.5809C12.716 33.619 14.124 34.2022 15.5921 34.2022C17.0602 34.2022 18.4682 33.619 19.5063 32.5809C19.9441 32.1431 20.3011 31.6394 20.5674 31.0933C20.7001 31.1612 20.8356 31.2239 20.9737 31.2812C21.6453 31.5593 22.3652 31.7025 23.0921 31.7025C23.819 31.7025 24.5389 31.5593 25.2105 31.2812C25.8821 31.003 26.4923 30.5952 27.0063 30.0812C27.5203 29.5672 27.9281 28.957 28.2063 28.2854C28.31 28.0349 28.395 27.7777 28.4608 27.5159C28.6147 27.5288 28.7697 27.5354 28.9254 27.5354C30.3935 27.5354 31.8015 26.9522 32.8396 25.9141C33.5053 25.2483 33.984 24.4305 34.2417 23.5422C34.6478 24.0157 35.2687 24.2927 35.9374 24.2335C37.0377 24.1361 37.8507 23.1652 37.7532 22.0649L37.5843 20.1569L37.5838 20.1523L35.9172 1.81893C35.8172 0.718898 34.8444 -0.0917866 33.7443 0.0082165C32.6954 0.103577 31.9095 0.992593 31.9255 2.02876ZM20.8445 21.7474L24.153 25.0559C24.1612 25.0644 24.1695 25.0728 24.1779 25.0812C24.3205 25.2238 24.4336 25.3931 24.5107 25.5794C24.5879 25.7657 24.6276 25.9653 24.6276 26.167C24.6276 26.3686 24.5879 26.5683 24.5107 26.7546C24.4336 26.9409 24.3205 27.1102 24.1779 27.2528C24.0353 27.3954 23.866 27.5085 23.6797 27.5856C23.4934 27.6628 23.2937 27.7025 23.0921 27.7025C22.8905 27.7025 22.6908 27.6628 22.5045 27.5856C22.3182 27.5085 22.1489 27.3954 22.0063 27.2528L19.5419 24.7884L19.5063 24.7525L19.4845 24.7309L18.673 23.9194C17.8919 23.1384 16.6256 23.1384 15.8446 23.9194C15.0635 24.7005 15.0635 25.9668 15.8446 26.7479L16.6965 27.5998C16.9728 27.8859 17.1276 28.2683 17.1276 28.6667C17.1276 29.0739 16.9659 29.4645 16.6779 29.7525C16.3899 30.0404 15.9993 30.2022 15.5921 30.2022C15.1849 30.2022 14.7943 30.0404 14.5063 29.7525L4.33536 19.5815L5.60032 5.667H12.4298L10.0112 8.08565C8.97308 9.12377 8.38987 10.5318 8.38987 11.9999C8.38987 13.468 8.97308 14.876 10.0112 15.9141C11.0493 16.9522 12.4573 17.5354 13.9254 17.5354C15.3935 17.5354 16.8015 16.9522 17.8396 15.9141L19.3054 14.4483C19.8679 13.8865 20.6304 13.5709 21.4254 13.5709C22.22 13.5709 22.9821 13.8862 23.5445 14.4474L23.5448 14.4477L23.5454 14.4483L30.0112 20.9141C30.2992 21.202 30.4609 21.5926 30.4609 21.9999C30.4609 22.4071 30.2992 22.7977 30.0112 23.0857C29.7232 23.3736 29.3327 23.5354 28.9254 23.5354C28.5182 23.5354 28.1276 23.3736 27.8396 23.0857L23.673 18.919C22.8919 18.1379 21.6256 18.1379 20.8445 18.919C20.0635 19.7 20.0635 20.9664 20.8445 21.7474Z"
            fill="url(#paint0_linear_466_359)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_359"
              x1="82.139"
              y1="-35.247"
              x2="-21.643"
              y2="-23.1477"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "2":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.42538 7.33301C5.42538 5.40001 6.99239 3.83301 8.92538 3.83301C10.8584 3.83301 12.4254 5.40001 12.4254 7.33301C12.4254 9.266 10.8584 10.833 8.92538 10.833C6.99239 10.833 5.42538 9.266 5.42538 7.33301ZM8.92538 0.833008C5.33553 0.833008 2.42538 3.74316 2.42538 7.33301C2.42538 10.9229 5.33553 13.833 8.92538 13.833C12.5152 13.833 15.4254 10.9229 15.4254 7.33301C15.4254 3.74316 12.5152 0.833008 8.92538 0.833008ZM25.5921 10.667C23.7511 10.667 22.2588 12.1594 22.2588 14.0003C22.2588 15.8413 23.7511 17.3337 25.5921 17.3337C26.3835 17.3337 27.1106 17.0578 27.6823 16.5971L28.026 16.2779C28.5839 15.682 28.9254 14.881 28.9254 14.0003C28.9254 12.1594 27.433 10.667 25.5921 10.667ZM19.2588 14.0003C19.2588 14.6376 19.3529 15.2529 19.528 15.833H15.5921C14.3163 15.833 13.0085 16.2522 12.1417 17.3263L3.94418 25.2311L3.31942 24.6063C2.73363 24.0205 1.78388 24.0205 1.1981 24.6063C0.612312 25.1921 0.612312 26.1419 1.1981 26.7277L9.51486 35.0444C9.52646 35.0564 9.53823 35.0682 9.55014 35.0797L11.1981 36.7277C11.7839 37.3134 12.7336 37.3134 13.3194 36.7277C13.9052 36.1419 13.9052 35.1921 13.3194 34.6063L12.7865 34.0734L14.2464 32.796C14.3249 32.7273 14.3961 32.6506 14.4587 32.5671C14.5938 32.387 14.9091 32.1671 15.592 32.1671H22.2587C24.4395 32.1671 26.5205 31.3745 28.0076 29.7077L35.6223 22.424L35.6259 22.4206C36.556 21.5398 37.0987 20.326 37.1349 19.0455C37.1712 17.7632 36.6966 16.5191 35.8156 15.5869C34.9345 14.6546 33.7192 14.1104 32.437 14.0742C32.2654 14.0693 32.0944 14.0737 31.9248 14.0869C31.9252 14.0581 31.9254 14.0292 31.9254 14.0003C31.9254 10.5025 29.0899 7.66699 25.5921 7.66699C22.0943 7.66699 19.2588 10.5025 19.2588 14.0003ZM24.0294 24.083L29.6578 18.8565C29.8233 18.7178 29.9817 18.5708 30.1321 18.4161L31.0294 17.583L31.0294 17.583L31.0389 17.574C31.393 17.2395 31.8654 17.0592 32.3522 17.073C32.8391 17.0868 33.3006 17.2934 33.6351 17.6474C33.9697 18.0014 34.1499 18.4738 34.1361 18.9607C34.1224 19.4476 33.9158 19.909 33.5617 20.2436L33.5552 20.2498L25.8885 27.5832C25.8564 27.6138 25.8257 27.6459 25.7965 27.6794C24.9532 28.6432 23.7216 29.1671 22.2587 29.1671H15.592C14.329 29.1671 13.0345 29.578 12.1676 30.6286L10.6605 31.9474L6.06585 27.3528L14.2999 19.4128C14.3576 19.3572 14.4107 19.2971 14.4587 19.233C14.5938 19.0529 14.9092 18.833 15.5921 18.833H20.5921C21.0783 18.833 21.5446 19.0262 21.8884 19.37C22.2322 19.7138 22.4254 20.1801 22.4254 20.6663C22.4254 21.1526 22.2322 21.6189 21.8884 21.9627C21.5446 22.3065 21.0783 22.4997 20.5921 22.4997H17.2587C16.4303 22.4997 15.7587 23.1712 15.7587 23.9997C15.7587 24.8281 16.4303 25.4997 17.2587 25.4997H20.5921C21.8228 25.4997 23.0051 25.0303 23.8997 24.1907C23.9443 24.1576 23.9877 24.1217 24.0294 24.083Z"
            fill="url(#paint0_linear_466_368)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_368"
              x1="80.1843"
              y1="-36.6087"
              x2="-20.7113"
              y2="-25.8678"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "3":
      return (
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2587 5L7.59204 11.6667L14.2587 18.3333"
            stroke="url(#paint0_linear_466_376)"
            strokeWidth="3"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.59204 11.667H34.2587"
            stroke="url(#paint1_linear_466_376)"
            strokeWidth="3"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.5921 35.0003L34.2587 28.3337L27.5921 21.667"
            stroke="url(#paint2_linear_466_376)"
            strokeWidth="3"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M34.2587 28.333H7.59204"
            stroke="url(#paint3_linear_466_376)"
            strokeWidth="3"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_376"
              x1="22.1476"
              y1="-8.73984"
              x2="3.50059"
              y2="-7.7485"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_466_376"
              x1="65.8143"
              y1="10.6365"
              x2="57.5395"
              y2="34.0986"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_466_376"
              x1="42.1476"
              y1="7.92715"
              x2="23.5006"
              y2="8.91849"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_466_376"
              x1="65.8143"
              y1="27.3025"
              x2="57.5395"
              y2="50.7646"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "4":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75873 12.333C3.75873 7.63859 7.56431 3.83301 12.2587 3.83301C16.9531 3.83301 20.7587 7.63859 20.7587 12.333C20.7587 17.0274 16.9531 20.833 12.2587 20.833C7.56431 20.833 3.75873 17.0274 3.75873 12.333ZM12.2587 0.833008C5.90745 0.833008 0.758728 5.98173 0.758728 12.333C0.758728 18.6843 5.90745 23.833 12.2587 23.833C18.61 23.833 23.7587 18.6843 23.7587 12.333C23.7587 5.98173 18.61 0.833008 12.2587 0.833008ZM29.5993 14.8777C28.8231 14.5883 27.9592 14.983 27.6698 15.7592C27.3804 16.5354 27.7751 17.3993 28.5513 17.6887C29.8905 18.188 31.0822 19.0169 32.0162 20.0987C32.9501 21.1806 33.5962 22.4805 33.8946 23.8782C34.1931 25.2759 34.1343 26.7263 33.7237 28.0953C33.313 29.4643 32.5638 30.7076 31.5454 31.7103C30.5269 32.713 29.272 33.4427 27.8968 33.8319C26.5216 34.2212 25.0705 34.2573 23.6776 33.9371C22.2847 33.6169 20.995 32.9506 19.9278 31.9999C18.8607 31.0491 18.0505 29.8447 17.5722 28.4979C17.2949 27.7172 16.4373 27.3091 15.6567 27.5864C14.876 27.8636 14.4679 28.7212 14.7452 29.5019C15.3923 31.324 16.4885 32.9536 17.9323 34.2399C19.3761 35.5261 21.1209 36.4276 23.0054 36.8608C24.8899 37.2941 26.8532 37.2451 28.7138 36.7186C30.5744 36.192 32.2721 35.2047 33.6501 33.8481C35.028 32.4915 36.0416 30.8094 36.5972 28.9572C37.1527 27.1051 37.2323 25.1428 36.8285 23.2518C36.4247 21.3607 35.5506 19.602 34.287 18.1383C33.0234 16.6746 31.4112 15.5532 29.5993 14.8777ZM9.09207 9C9.09207 8.17157 9.76364 7.5 10.5921 7.5H12.2587C13.0872 7.5 13.7587 8.17157 13.7587 9V15.6667C13.7587 16.4951 13.0872 17.1667 12.2587 17.1667C11.4303 17.1667 10.7587 16.4951 10.7587 15.6667V10.5H10.5921C9.76364 10.5 9.09207 9.82843 9.09207 9ZM27.8435 21.0797C27.2619 20.4898 26.3121 20.483 25.7222 21.0647C25.1323 21.6463 25.1256 22.596 25.7072 23.1859L25.8282 23.3087L22.1813 26.9555C21.5956 27.5413 21.5956 28.491 22.1813 29.0768C22.7671 29.6626 23.7169 29.6626 24.3027 29.0768L29.0027 24.3768C29.5855 23.794 29.5889 22.85 29.0102 22.263L27.8435 21.0797Z"
            fill="url(#paint0_linear_466_384)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_384"
              x1="80.0646"
              y1="-36.5945"
              x2="-20.6815"
              y2="-25.8816"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "5":
      return (
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.25872 3.5C7.97684 3.5 6.74746 4.00922 5.84104 4.91565C4.93526 5.82143 4.42611 7.04969 4.42539 8.33058C4.42538 8.33139 4.42538 8.3322 4.42538 8.33301V8.33333V31.6663C4.42538 32.9482 4.93461 34.1776 5.84104 35.084C6.74746 35.9904 7.97684 36.4997 9.25872 36.4997H34.2587C35.0986 36.4997 35.904 36.166 36.4979 35.5722C37.0918 34.9783 37.4254 34.1729 37.4254 33.333V27.7889C37.6949 27.6439 37.9443 27.4595 38.1646 27.2392C38.7584 26.6453 39.092 25.8398 39.092 25V21.6667C39.092 20.8268 38.7584 20.0214 38.1646 19.4275C37.9443 19.2072 37.6949 19.0227 37.4254 18.8778V13.3333C37.4254 12.4935 37.0918 11.688 36.4979 11.0942C35.904 10.5003 35.0986 10.1667 34.2587 10.1667H34.0921V6.66667C34.0921 5.82682 33.7584 5.02136 33.1646 4.4275C32.5707 3.83363 31.7652 3.5 30.9254 3.5H9.25872ZM35.9353 25.1664C35.932 25.1664 35.9287 25.1663 35.9254 25.1663C35.9148 25.1663 35.9043 25.1664 35.8938 25.1667H30.9254C30.4392 25.1667 29.9728 24.9735 29.629 24.6297C29.2852 24.2859 29.0921 23.8196 29.0921 23.3333C29.0921 22.8471 29.2852 22.3808 29.629 22.037C29.9728 21.6932 30.4392 21.5 30.9254 21.5H35.9254C35.9696 21.5 36.012 21.5176 36.0432 21.5488C36.0745 21.5801 36.0921 21.6225 36.0921 21.6667V25C36.0921 25.0442 36.0745 25.0866 36.0432 25.1179C36.0143 25.1468 35.9759 25.164 35.9353 25.1664ZM34.4254 28.1667V33.333C34.4254 33.3772 34.4078 33.4196 34.3766 33.4509C34.3453 33.4821 34.3029 33.4997 34.2587 33.4997H9.25872C8.77249 33.4997 8.30617 33.3065 7.96236 32.9627C7.61854 32.6189 7.42538 32.1526 7.42538 31.6663V12.8055C8.0017 13.0417 8.62377 13.1667 9.25872 13.1667H32.5921H34.2587C34.3029 13.1667 34.3453 13.1842 34.3766 13.2155C34.4078 13.2467 34.4254 13.2891 34.4254 13.3333V18.5H30.9254C29.6435 18.5 28.4141 19.0092 27.5077 19.9156C26.6013 20.8221 26.0921 22.0515 26.0921 23.3333C26.0921 24.6152 26.6013 25.8446 27.5077 26.751C28.4141 27.6574 29.6435 28.1667 30.9254 28.1667H34.4254ZM7.42538 8.33333C7.42538 8.81956 7.61854 9.28588 7.96236 9.6297C8.30617 9.97351 8.77249 10.1667 9.25872 10.1667H31.0921V6.66667C31.0921 6.62246 31.0745 6.58007 31.0432 6.54882C31.012 6.51756 30.9696 6.5 30.9254 6.5H9.25872C8.77249 6.5 8.30617 6.69315 7.96236 7.03697C7.61854 7.38079 7.42538 7.8471 7.42538 8.33333Z"
            fill="url(#paint0_linear_466_391)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_391"
              x1="80.1143"
              y1="-30.5058"
              x2="-15.926"
              y2="-19.7782"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "6":
      return (
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.42538 5C7.42538 4.17157 6.75381 3.5 5.92538 3.5C5.09696 3.5 4.42538 4.17157 4.42538 5V31.6667C4.42538 32.9485 4.93461 34.1779 5.84103 35.0843C6.74746 35.9908 7.97684 36.5 9.25872 36.5H35.9254C36.7538 36.5 37.4254 35.8284 37.4254 35C37.4254 34.1716 36.7538 33.5 35.9254 33.5H9.25872C8.77249 33.5 8.30617 33.3068 7.96236 32.963C7.61854 32.6192 7.42538 32.1529 7.42538 31.6667V5ZM29.2587 3.5C30.0871 3.5 30.7587 4.17157 30.7587 5V6.83301H30.9254C32.6743 6.83301 34.0921 8.25077 34.0921 9.99967V19.9997C34.0921 21.7486 32.6743 23.1663 30.9254 23.1663H30.7587V26.667C30.7587 27.4954 30.0871 28.167 29.2587 28.167C28.4303 28.167 27.7587 27.4954 27.7587 26.667V23.1663H27.5921C25.8431 23.1663 24.4254 21.7486 24.4254 19.9997V9.99967C24.4254 8.25077 25.8431 6.83301 27.5921 6.83301H27.7587V5C27.7587 4.17157 28.4303 3.5 29.2587 3.5ZM29.2272 9.83301H27.5921C27.5 9.83301 27.4254 9.90763 27.4254 9.99967V19.9997C27.4254 20.0917 27.5 20.1663 27.5921 20.1663H30.9254C31.0174 20.1663 31.0921 20.0917 31.0921 19.9997V9.99967C31.0921 9.90763 31.0174 9.83301 30.9254 9.83301H29.2903C29.2798 9.83322 29.2693 9.83333 29.2587 9.83333C29.2482 9.83333 29.2377 9.83322 29.2272 9.83301ZM15.9254 6.83301C16.7538 6.83301 17.4254 7.50458 17.4254 8.33301V13.5H17.5921C19.341 13.5 20.7587 14.9178 20.7587 16.6667V23.3333C20.7587 25.0822 19.341 26.5 17.5921 26.5H17.4254V28.3333C17.4254 29.1618 16.7538 29.8333 15.9254 29.8333C15.097 29.8333 14.4254 29.1618 14.4254 28.3333V26.5H14.2587C12.5098 26.5 11.0921 25.0822 11.0921 23.3333V16.6667C11.0921 14.9178 12.5098 13.5 14.2587 13.5H14.4254V8.33301C14.4254 7.50458 15.097 6.83301 15.9254 6.83301ZM15.9254 23.5H17.5921C17.6841 23.5 17.7587 23.4254 17.7587 23.3333V16.6667C17.7587 16.5746 17.6841 16.5 17.5921 16.5H14.2587C14.1667 16.5 14.0921 16.5746 14.0921 16.6667V23.3333C14.0921 23.4254 14.1667 23.5 14.2587 23.5H15.9254Z"
            fill="url(#paint0_linear_466_397)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_397"
              x1="76.4754"
              y1="-30.5061"
              x2="-15.0534"
              y2="-20.7741"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      break;
  }
}
function Svg2(name) {
  switch (name) {
    case "1":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.34213 2.41699H5.67547L10.1088 23.117C10.2714 23.8751 10.6932 24.5528 11.3017 25.0334C11.9101 25.5141 12.667 25.7676 13.4421 25.7503H29.7421C30.5008 25.7491 31.2363 25.4891 31.8272 25.0134C32.4181 24.5376 32.829 23.8745 32.9921 23.1337L35.7421 10.7503H7.4588M13.9255 33.9997C13.9255 34.9201 13.1793 35.6663 12.2588 35.6663C11.3383 35.6663 10.5921 34.9201 10.5921 33.9997C10.5921 33.0792 11.3383 32.333 12.2588 32.333C13.1793 32.333 13.9255 33.0792 13.9255 33.9997ZM32.2587 33.9997C32.2587 34.9201 31.5125 35.6663 30.5921 35.6663C29.6716 35.6663 28.9254 34.9201 28.9254 33.9997C28.9254 33.0792 29.6716 32.333 30.5921 32.333C31.5125 32.333 32.2587 33.0792 32.2587 33.9997Z"
            stroke="url(#paint0_linear_466_412)"
            strokeWidth="3"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_412"
              x1="75.2655"
              y1="-31.8461"
              x2="-17.3634"
              y2="-21.9525"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "2":
      return (
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9254 4.83301C19.4527 4.83301 18.2588 6.02692 18.2588 7.49967C18.2588 8.97243 19.4527 10.1663 20.9254 10.1663C22.3982 10.1663 23.5921 8.97243 23.5921 7.49967C23.5921 6.02692 22.3982 4.83301 20.9254 4.83301ZM15.2588 7.49967C15.2588 4.37006 17.7958 1.83301 20.9254 1.83301C24.055 1.83301 26.5921 4.37006 26.5921 7.49967C26.5921 10.6293 24.055 13.1663 20.9254 13.1663C19.9054 13.1663 18.9483 12.8968 18.1215 12.4252L13.3509 17.1958C13.5825 17.6018 13.7654 18.0392 13.8915 18.5H27.9593C28.6168 16.0982 30.815 14.333 33.4254 14.333C36.555 14.333 39.0921 16.8701 39.0921 19.9997C39.0921 23.1293 36.555 25.6663 33.4254 25.6663C32.4054 25.6663 31.4483 25.3968 30.6215 24.9252L25.8509 29.6958C26.3226 30.5226 26.5921 31.4797 26.5921 32.4997C26.5921 35.6293 24.055 38.1663 20.9254 38.1663C17.7958 38.1663 15.2588 35.6293 15.2588 32.4997C15.2588 29.3701 17.7958 26.833 20.9254 26.833C21.9456 26.833 22.9028 27.1026 23.7297 27.5744L28.5001 22.8039C28.2685 22.398 28.0857 21.9607 27.9595 21.5H13.8913C13.2337 23.9015 11.0356 25.6663 8.42543 25.6663C5.29581 25.6663 2.75876 23.1293 2.75876 19.9997C2.75876 16.8701 5.29581 14.333 8.42543 14.333C9.44559 14.333 10.4028 14.6026 11.2297 15.0744L16.0001 10.3039C15.5283 9.47703 15.2588 8.51984 15.2588 7.49967ZM8.42543 17.333C9.89405 17.333 11.0854 18.5202 11.0921 19.9873L11.092 20L11.0921 20.0125C11.0852 21.4794 9.89391 22.6663 8.42543 22.6663C6.95267 22.6663 5.75876 21.4724 5.75876 19.9997C5.75876 18.5269 6.95267 17.333 8.42543 17.333ZM30.7588 19.9997C30.7588 18.5269 31.9527 17.333 33.4254 17.333C34.8982 17.333 36.0921 18.5269 36.0921 19.9997C36.0921 21.4724 34.8982 22.6663 33.4254 22.6663C31.9527 22.6663 30.7588 21.4724 30.7588 19.9997ZM18.2588 32.4997C18.2588 31.0269 19.4527 29.833 20.9254 29.833C22.3982 29.833 23.5921 31.0269 23.5921 32.4997C23.5921 33.9724 22.3982 35.1663 20.9254 35.1663C19.4527 35.1663 18.2588 33.9724 18.2588 32.4997Z"
            fill="url(#paint0_linear_466_415)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_415"
              x1="82.0865"
              y1="-35.6081"
              x2="-18.6876"
              y2="-24.893"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "3":
      return (
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.4292 5.79868C25.9088 5.52467 26.5196 5.69126 26.7936 6.17078L33.172 17.3329H35.2369C35.2509 17.3326 35.2648 17.3326 35.2788 17.3329H37.5921C38.1444 17.3329 38.5921 17.7806 38.5921 18.3329C38.5921 18.8852 38.1444 19.3329 37.5921 19.3329H36.0551L33.4026 30.8789C33.198 31.8673 32.6547 32.7533 31.8663 33.384C31.0773 34.0152 30.0926 34.3508 29.0826 34.3329H24.2731C24.2644 34.333 24.2556 34.333 24.2469 34.3329H17.6039C17.5952 34.333 17.5864 34.333 17.5777 34.3329H12.7682C11.7582 34.3508 10.7735 34.0152 9.98454 33.384C9.1944 32.7519 8.65043 31.8633 8.44685 30.8722L5.95187 19.3329H4.25876C3.70647 19.3329 3.25876 18.8852 3.25876 18.3329C3.25876 17.7806 3.70647 17.3329 4.25876 17.3329H6.73936C6.75298 17.3327 6.76656 17.3327 6.78011 17.3329H8.67881L15.0572 6.17078C15.3312 5.69126 15.942 5.52467 16.4216 5.79868C16.9011 6.07269 17.0677 6.68354 16.7937 7.16306L10.9823 17.3329H15.9133C15.9222 17.3328 15.9311 17.3328 15.9399 17.3329H25.9109C25.9197 17.3328 25.9286 17.3328 25.9375 17.3329H30.8685L25.0571 7.16306C24.7831 6.68354 24.9497 6.07269 25.4292 5.79868ZM15.0303 19.3329H9.29837C9.27142 19.334 9.24438 19.334 9.21732 19.3329H7.99808L9.18727 24.8329H15.6415L15.0303 19.3329ZM17.6538 24.8329L17.0427 19.3329H24.8082L24.1971 24.8329H17.6538ZM15.8637 26.8329H9.6197L10.4028 30.4549L10.4053 30.4665L10.4053 30.4665C10.5143 31.0014 10.8076 31.4812 11.2339 31.8223C11.6603 32.1634 12.1927 32.3441 12.7386 32.3331L12.7588 32.3329H16.4748L15.8637 26.8329ZM18.4871 32.3329L17.876 26.8329H23.9748L23.3637 32.3329H18.4871ZM32.6335 19.3329H34.003L32.7395 24.8329H26.2094L26.8205 19.3329H32.5524C32.5794 19.334 32.6064 19.334 32.6335 19.3329ZM25.9871 26.8329H32.28L31.4508 30.4424C31.449 30.4504 31.4472 30.4584 31.4456 30.4665C31.3365 31.0014 31.0433 31.4812 30.6169 31.8223C30.1906 32.1634 29.6581 32.3441 29.1123 32.3331L29.0921 32.3329H25.376L25.9871 26.8329Z"
            fill="url(#paint0_linear_466_426)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_426"
              x1="80.4032"
              y1="-23.8741"
              x2="-17.0318"
              y2="-11.1049"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "4":
      return (
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.42538 5C7.42538 4.17157 6.75381 3.5 5.92538 3.5C5.09696 3.5 4.42538 4.17157 4.42538 5V31.6667C4.42538 32.9485 4.93461 34.1779 5.84103 35.0843C6.74746 35.9908 7.97684 36.5 9.25872 36.5H35.9254C36.7538 36.5 37.4254 35.8284 37.4254 35C37.4254 34.1716 36.7538 33.5 35.9254 33.5H9.25872C8.77249 33.5 8.30617 33.3068 7.96236 32.963C7.61854 32.6192 7.42538 32.1529 7.42538 31.6667V5ZM29.2587 3.5C30.0871 3.5 30.7587 4.17157 30.7587 5V6.83301H30.9254C32.6743 6.83301 34.0921 8.25077 34.0921 9.99967V19.9997C34.0921 21.7486 32.6743 23.1663 30.9254 23.1663H30.7587V26.667C30.7587 27.4954 30.0871 28.167 29.2587 28.167C28.4303 28.167 27.7587 27.4954 27.7587 26.667V23.1663H27.5921C25.8431 23.1663 24.4254 21.7486 24.4254 19.9997V9.99967C24.4254 8.25077 25.8431 6.83301 27.5921 6.83301H27.7587V5C27.7587 4.17157 28.4303 3.5 29.2587 3.5ZM29.2272 9.83301H27.5921C27.5 9.83301 27.4254 9.90763 27.4254 9.99967V19.9997C27.4254 20.0917 27.5 20.1663 27.5921 20.1663H30.9254C31.0174 20.1663 31.0921 20.0917 31.0921 19.9997V9.99967C31.0921 9.90763 31.0174 9.83301 30.9254 9.83301H29.2903C29.2798 9.83322 29.2693 9.83333 29.2587 9.83333C29.2482 9.83333 29.2377 9.83322 29.2272 9.83301ZM15.9254 6.83301C16.7538 6.83301 17.4254 7.50458 17.4254 8.33301V13.5H17.5921C19.341 13.5 20.7587 14.9178 20.7587 16.6667V23.3333C20.7587 25.0822 19.341 26.5 17.5921 26.5H17.4254V28.3333C17.4254 29.1618 16.7538 29.8333 15.9254 29.8333C15.097 29.8333 14.4254 29.1618 14.4254 28.3333V26.5H14.2587C12.5098 26.5 11.0921 25.0822 11.0921 23.3333V16.6667C11.0921 14.9178 12.5098 13.5 14.2587 13.5H14.4254V8.33301C14.4254 7.50458 15.097 6.83301 15.9254 6.83301ZM15.9254 23.5H17.5921C17.6841 23.5 17.7587 23.4254 17.7587 23.3333V16.6667C17.7587 16.5746 17.6841 16.5 17.5921 16.5H14.2587C14.1667 16.5 14.0921 16.5746 14.0921 16.6667V23.3333C14.0921 23.4254 14.1667 23.5 14.2587 23.5H15.9254Z"
            fill="url(#paint0_linear_466_437)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_466_437"
              x1="76.4754"
              y1="-30.5061"
              x2="-15.0534"
              y2="-20.7741"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.325" stopColor="#A80601" />
              <stop offset="0.785" stopColor="#EE5A02" />
              <stop offset="1" stopColor="#DDB28F" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      break;
  }
}
