export default function AboutSec() {
  return (
    <>
      <div className="xl:max-w-[1312px] md:w-[50vw] lg:w-[60vw] gap-4 sm:w-[60vw]  w-[80vw] flex lg:flex-row flex-col  gap-x-3 mx-auto">
        <div
          id="abot-sec"
          className="xl:max-w-[646px] lg:w-[50%] flex justify-center items-center rounded-[10px] border border-[#343434] "
        >
          <div className=" xl:max-w-[315px]  lg:  md:w-[70%] w-[70%]     text-white mx-auto lg:mx-0  my-5 text-center flex flex-col items-center border-white  ">
            <div className="my-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3067 24.3866C21.953 24.3566 21.602 24.4682 21.3307 24.697C21.0594 24.9258 20.8901 25.253 20.86 25.6066C20.8299 25.9603 20.9416 26.3113 21.1704 26.5826C21.3992 26.854 21.7264 27.0233 22.08 27.0533C23.7689 27.1747 25.448 27.4063 27.1067 27.7466C27.182 27.7619 27.2498 27.8028 27.2984 27.8624C27.3471 27.9219 27.3737 27.9964 27.3737 28.0733C27.3737 28.1502 27.3471 28.2247 27.2984 28.2843C27.2498 28.3438 27.182 28.3847 27.1067 28.4C23.4474 29.0994 19.7247 29.4122 16 29.3333C12.2748 29.4079 8.55215 29.0906 4.89333 28.3866C4.81798 28.3713 4.75024 28.3305 4.70158 28.2709C4.65292 28.2114 4.62633 28.1369 4.62633 28.06C4.62633 27.9831 4.65292 27.9086 4.70158 27.849C4.75024 27.7895 4.81798 27.7486 4.89333 27.7333C6.53425 27.3942 8.19556 27.1626 9.86667 27.04C10.2183 27.0095 10.5435 26.8407 10.771 26.5708C10.9984 26.3008 11.1096 25.9517 11.08 25.6C11.0495 25.2483 10.8807 24.9231 10.6108 24.6957C10.3409 24.4682 9.99175 24.3571 9.64 24.3866C0 25.2 0 27.2 0 28C0 31.56 11.0933 32 16 32C20.9067 32 32 31.6133 32 28C32 27.2 32 25.2 22.3067 24.3866Z"
                  fill="black"
                />
                <path
                  d="M22.3067 24.3866C21.953 24.3566 21.602 24.4682 21.3307 24.697C21.0594 24.9258 20.8901 25.253 20.86 25.6066C20.8299 25.9603 20.9416 26.3113 21.1704 26.5826C21.3992 26.854 21.7264 27.0233 22.08 27.0533C23.7689 27.1747 25.448 27.4063 27.1067 27.7466C27.182 27.7619 27.2498 27.8028 27.2984 27.8624C27.3471 27.9219 27.3737 27.9964 27.3737 28.0733C27.3737 28.1502 27.3471 28.2247 27.2984 28.2843C27.2498 28.3438 27.182 28.3847 27.1067 28.4C23.4474 29.0994 19.7247 29.4122 16 29.3333C12.2748 29.4079 8.55215 29.0906 4.89333 28.3866C4.81798 28.3713 4.75024 28.3305 4.70158 28.2709C4.65292 28.2114 4.62633 28.1369 4.62633 28.06C4.62633 27.9831 4.65292 27.9086 4.70158 27.849C4.75024 27.7895 4.81798 27.7486 4.89333 27.7333C6.53425 27.3942 8.19556 27.1626 9.86667 27.04C10.2183 27.0095 10.5435 26.8407 10.771 26.5708C10.9984 26.3008 11.1096 25.9517 11.08 25.6C11.0495 25.2483 10.8807 24.9231 10.6108 24.6957C10.3409 24.4682 9.99175 24.3571 9.64 24.3866C0 25.2 0 27.2 0 28C0 31.56 11.0933 32 16 32C20.9067 32 32 31.6133 32 28C32 27.2 32 25.2 22.3067 24.3866Z"
                  fill="url(#paint0_linear_56_80)"
                />
                <path
                  d="M15.9999 28.8C16.2229 28.7996 16.4424 28.7433 16.6381 28.6361C16.8337 28.529 16.9994 28.3744 17.1199 28.1867C19.7865 24.1067 25.8132 14.1467 25.8132 9.81333C25.8132 7.21068 24.7793 4.71462 22.9389 2.87426C21.0986 1.0339 18.6025 0 15.9999 0C13.3972 0 10.9011 1.0339 9.06078 2.87426C7.22043 4.71462 6.18652 7.21068 6.18652 9.81333C6.18652 14.1467 12.2665 24.1067 14.8799 28.1867C15.0003 28.3744 15.166 28.529 15.3617 28.6361C15.5573 28.7433 15.7768 28.7996 15.9999 28.8ZM11.3332 9.33333C11.3332 8.41035 11.6069 7.5081 12.1197 6.74067C12.6324 5.97324 13.3613 5.3751 14.214 5.0219C15.0667 4.66869 16.005 4.57627 16.9103 4.75634C17.8155 4.9364 18.647 5.38086 19.2997 6.0335C19.9523 6.68615 20.3968 7.51767 20.5769 8.42291C20.7569 9.32816 20.6645 10.2665 20.3113 11.1192C19.9581 11.9719 19.3599 12.7007 18.5925 13.2135C17.8251 13.7263 16.9228 14 15.9999 14C14.7622 14 13.5752 13.5083 12.7 12.6332C11.8249 11.758 11.3332 10.571 11.3332 9.33333Z"
                  fill="black"
                />
                <path
                  d="M15.9999 28.8C16.2229 28.7996 16.4424 28.7433 16.6381 28.6361C16.8337 28.529 16.9994 28.3744 17.1199 28.1867C19.7865 24.1067 25.8132 14.1467 25.8132 9.81333C25.8132 7.21068 24.7793 4.71462 22.9389 2.87426C21.0986 1.0339 18.6025 0 15.9999 0C13.3972 0 10.9011 1.0339 9.06078 2.87426C7.22043 4.71462 6.18652 7.21068 6.18652 9.81333C6.18652 14.1467 12.2665 24.1067 14.8799 28.1867C15.0003 28.3744 15.166 28.529 15.3617 28.6361C15.5573 28.7433 15.7768 28.7996 15.9999 28.8ZM11.3332 9.33333C11.3332 8.41035 11.6069 7.5081 12.1197 6.74067C12.6324 5.97324 13.3613 5.3751 14.214 5.0219C15.0667 4.66869 16.005 4.57627 16.9103 4.75634C17.8155 4.9364 18.647 5.38086 19.2997 6.0335C19.9523 6.68615 20.3968 7.51767 20.5769 8.42291C20.7569 9.32816 20.6645 10.2665 20.3113 11.1192C19.9581 11.9719 19.3599 12.7007 18.5925 13.2135C17.8251 13.7263 16.9228 14 15.9999 14C14.7622 14 13.5752 13.5083 12.7 12.6332C11.8249 11.758 11.3332 10.571 11.3332 9.33333Z"
                  fill="url(#paint1_linear_56_80)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_56_80"
                    x1="69.8667"
                    y1="16.5314"
                    x2="-4.96485"
                    y2="49.9532"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="0.325" stopColor="#A80601" />
                    <stop offset="0.785" stopColor="#EE5A02" />
                    <stop offset="1" stopColor="#DDB28F" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_56_80"
                    x1="49.0381"
                    y1="-29.6781"
                    x2="-5.72633"
                    y2="-25.7098"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="0.325" stopColor="#A80601" />
                    <stop offset="0.785" stopColor="#EE5A02" />
                    <stop offset="1" stopColor="#DDB28F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="lg:text-[1.3vw]   md:text-[3vw] sm:text-[4vw] text-[6vw]  my-2 font-[700] lg:leading-[2vw]">
              Address 1:{" "}
            </div>
            <div className="lg:text-[0.79vw] font-[700] xl:w-[70%] leading-[1.vw]">
              TrūQoin Headquarters  123 Blockchain Drive, Tech City, USA{" "}
            </div>
          </div>
        </div>
        <div
          id="abot-sec"
          className="xl:max-w-[646px]   flex lg:w-[50%] justify-center items-center border rounded-[10px] border-[#343434]"
        >
          <div className=" xl:max-w-[315px] md:w-[70%] w-[70%]   text-white mx-auto lg:mx-0  my-5 text-center flex flex-col items-center border-white ">
            <div className="my-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3067 24.3866C21.953 24.3566 21.602 24.4682 21.3307 24.697C21.0594 24.9258 20.8901 25.253 20.86 25.6066C20.8299 25.9603 20.9416 26.3113 21.1704 26.5826C21.3992 26.854 21.7264 27.0233 22.08 27.0533C23.7689 27.1747 25.448 27.4063 27.1067 27.7466C27.182 27.7619 27.2498 27.8028 27.2984 27.8624C27.3471 27.9219 27.3737 27.9964 27.3737 28.0733C27.3737 28.1502 27.3471 28.2247 27.2984 28.2843C27.2498 28.3438 27.182 28.3847 27.1067 28.4C23.4474 29.0994 19.7247 29.4122 16 29.3333C12.2748 29.4079 8.55215 29.0906 4.89333 28.3866C4.81798 28.3713 4.75024 28.3305 4.70158 28.2709C4.65292 28.2114 4.62633 28.1369 4.62633 28.06C4.62633 27.9831 4.65292 27.9086 4.70158 27.849C4.75024 27.7895 4.81798 27.7486 4.89333 27.7333C6.53425 27.3942 8.19556 27.1626 9.86667 27.04C10.2183 27.0095 10.5435 26.8407 10.771 26.5708C10.9984 26.3008 11.1096 25.9517 11.08 25.6C11.0495 25.2483 10.8807 24.9231 10.6108 24.6957C10.3409 24.4682 9.99175 24.3571 9.64 24.3866C0 25.2 0 27.2 0 28C0 31.56 11.0933 32 16 32C20.9067 32 32 31.6133 32 28C32 27.2 32 25.2 22.3067 24.3866Z"
                  fill="black"
                />
                <path
                  d="M22.3067 24.3866C21.953 24.3566 21.602 24.4682 21.3307 24.697C21.0594 24.9258 20.8901 25.253 20.86 25.6066C20.8299 25.9603 20.9416 26.3113 21.1704 26.5826C21.3992 26.854 21.7264 27.0233 22.08 27.0533C23.7689 27.1747 25.448 27.4063 27.1067 27.7466C27.182 27.7619 27.2498 27.8028 27.2984 27.8624C27.3471 27.9219 27.3737 27.9964 27.3737 28.0733C27.3737 28.1502 27.3471 28.2247 27.2984 28.2843C27.2498 28.3438 27.182 28.3847 27.1067 28.4C23.4474 29.0994 19.7247 29.4122 16 29.3333C12.2748 29.4079 8.55215 29.0906 4.89333 28.3866C4.81798 28.3713 4.75024 28.3305 4.70158 28.2709C4.65292 28.2114 4.62633 28.1369 4.62633 28.06C4.62633 27.9831 4.65292 27.9086 4.70158 27.849C4.75024 27.7895 4.81798 27.7486 4.89333 27.7333C6.53425 27.3942 8.19556 27.1626 9.86667 27.04C10.2183 27.0095 10.5435 26.8407 10.771 26.5708C10.9984 26.3008 11.1096 25.9517 11.08 25.6C11.0495 25.2483 10.8807 24.9231 10.6108 24.6957C10.3409 24.4682 9.99175 24.3571 9.64 24.3866C0 25.2 0 27.2 0 28C0 31.56 11.0933 32 16 32C20.9067 32 32 31.6133 32 28C32 27.2 32 25.2 22.3067 24.3866Z"
                  fill="url(#paint0_linear_56_80)"
                />
                <path
                  d="M15.9999 28.8C16.2229 28.7996 16.4424 28.7433 16.6381 28.6361C16.8337 28.529 16.9994 28.3744 17.1199 28.1867C19.7865 24.1067 25.8132 14.1467 25.8132 9.81333C25.8132 7.21068 24.7793 4.71462 22.9389 2.87426C21.0986 1.0339 18.6025 0 15.9999 0C13.3972 0 10.9011 1.0339 9.06078 2.87426C7.22043 4.71462 6.18652 7.21068 6.18652 9.81333C6.18652 14.1467 12.2665 24.1067 14.8799 28.1867C15.0003 28.3744 15.166 28.529 15.3617 28.6361C15.5573 28.7433 15.7768 28.7996 15.9999 28.8ZM11.3332 9.33333C11.3332 8.41035 11.6069 7.5081 12.1197 6.74067C12.6324 5.97324 13.3613 5.3751 14.214 5.0219C15.0667 4.66869 16.005 4.57627 16.9103 4.75634C17.8155 4.9364 18.647 5.38086 19.2997 6.0335C19.9523 6.68615 20.3968 7.51767 20.5769 8.42291C20.7569 9.32816 20.6645 10.2665 20.3113 11.1192C19.9581 11.9719 19.3599 12.7007 18.5925 13.2135C17.8251 13.7263 16.9228 14 15.9999 14C14.7622 14 13.5752 13.5083 12.7 12.6332C11.8249 11.758 11.3332 10.571 11.3332 9.33333Z"
                  fill="black"
                />
                <path
                  d="M15.9999 28.8C16.2229 28.7996 16.4424 28.7433 16.6381 28.6361C16.8337 28.529 16.9994 28.3744 17.1199 28.1867C19.7865 24.1067 25.8132 14.1467 25.8132 9.81333C25.8132 7.21068 24.7793 4.71462 22.9389 2.87426C21.0986 1.0339 18.6025 0 15.9999 0C13.3972 0 10.9011 1.0339 9.06078 2.87426C7.22043 4.71462 6.18652 7.21068 6.18652 9.81333C6.18652 14.1467 12.2665 24.1067 14.8799 28.1867C15.0003 28.3744 15.166 28.529 15.3617 28.6361C15.5573 28.7433 15.7768 28.7996 15.9999 28.8ZM11.3332 9.33333C11.3332 8.41035 11.6069 7.5081 12.1197 6.74067C12.6324 5.97324 13.3613 5.3751 14.214 5.0219C15.0667 4.66869 16.005 4.57627 16.9103 4.75634C17.8155 4.9364 18.647 5.38086 19.2997 6.0335C19.9523 6.68615 20.3968 7.51767 20.5769 8.42291C20.7569 9.32816 20.6645 10.2665 20.3113 11.1192C19.9581 11.9719 19.3599 12.7007 18.5925 13.2135C17.8251 13.7263 16.9228 14 15.9999 14C14.7622 14 13.5752 13.5083 12.7 12.6332C11.8249 11.758 11.3332 10.571 11.3332 9.33333Z"
                  fill="url(#paint1_linear_56_80)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_56_80"
                    x1="69.8667"
                    y1="16.5314"
                    x2="-4.96485"
                    y2="49.9532"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="0.325" stopColor="#A80601" />
                    <stop offset="0.785" stopColor="#EE5A02" />
                    <stop offset="1" stopColor="#DDB28F" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_56_80"
                    x1="49.0381"
                    y1="-29.6781"
                    x2="-5.72633"
                    y2="-25.7098"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="0.325" stopColor="#A80601" />
                    <stop offset="0.785" stopColor="#EE5A02" />
                    <stop offset="1" stopColor="#DDB28F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="lg:text-[1.3vw]  sm:text-[4vw] text-[6vw] md:text-[3vw]   my-2 font-[700] lg:leading-[2vw]">
              Address 2:{" "}
            </div>
            <div className="lg:text-[0.79vw] font-[700] xl:w-[70%] leading-[1.vw]">
              Sharjah Media City, Al Messaned – Al Mutsannid Suburb – Sharjah{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
