export default function ContactCard() {
  return (
    <>
      <div className=" p-6   md:w-[100vw]   lg:w-[60vw] flex mx-auto lg:flex-row flex-col ">
        <div className="   text-white mx-auto my-5 lg:mx-0 text-center flex flex-col items-center  w-[50%] ">
          <div className="my-2 ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_56_44)">
                <path
                  d="M11.5868 19.7867C11.6445 19.83 11.7146 19.8534 11.7868 19.8534H20.2268C20.2986 19.8516 20.3682 19.8284 20.4268 19.7867L30.6668 12.1067C30.7074 12.075 30.7405 12.0345 30.7636 11.9884C30.7866 11.9423 30.7991 11.8916 30.8001 11.84C30.801 11.7866 30.7879 11.734 30.7622 11.6872C30.7365 11.6404 30.699 11.6012 30.6534 11.5734L17.1468 2.24002C16.8106 2.00482 16.4103 1.87866 16.0001 1.87866C15.5899 1.87866 15.1895 2.00482 14.8534 2.24002L1.33343 11.56C1.29277 11.5917 1.2597 11.6322 1.23663 11.6783C1.21357 11.7244 1.20109 11.7751 1.2001 11.8267C1.19394 11.8812 1.20317 11.9363 1.22674 11.9857C1.2503 12.0352 1.28727 12.0771 1.33343 12.1067L11.5868 19.7867Z"
                  fill="black"
                />
                <path
                  d="M11.5868 19.7867C11.6445 19.83 11.7146 19.8534 11.7868 19.8534H20.2268C20.2986 19.8516 20.3682 19.8284 20.4268 19.7867L30.6668 12.1067C30.7074 12.075 30.7405 12.0345 30.7636 11.9884C30.7866 11.9423 30.7991 11.8916 30.8001 11.84C30.801 11.7866 30.7879 11.734 30.7622 11.6872C30.7365 11.6404 30.699 11.6012 30.6534 11.5734L17.1468 2.24002C16.8106 2.00482 16.4103 1.87866 16.0001 1.87866C15.5899 1.87866 15.1895 2.00482 14.8534 2.24002L1.33343 11.56C1.29277 11.5917 1.2597 11.6322 1.23663 11.6783C1.21357 11.7244 1.20109 11.7751 1.2001 11.8267C1.19394 11.8812 1.20317 11.9363 1.22674 11.9857C1.2503 12.0352 1.28727 12.0771 1.33343 12.1067L11.5868 19.7867Z"
                  fill="url(#paint0_linear_56_44)"
                />
                <path
                  d="M22.7733 20.52C22.7323 20.5544 22.6992 20.5972 22.6762 20.6455C22.6532 20.6938 22.6409 20.7465 22.64 20.8C22.6451 20.852 22.6608 20.9025 22.686 20.9483C22.7112 20.9942 22.7455 21.0344 22.7867 21.0666L27.2267 24C27.3503 24.0655 27.4588 24.1563 27.5452 24.2664C27.6315 24.3765 27.6938 24.5035 27.728 24.6392C27.7622 24.7749 27.7675 24.9163 27.7436 25.0542C27.7197 25.1921 27.6671 25.3234 27.5893 25.4397C27.5114 25.556 27.4101 25.6547 27.2917 25.7293C27.1733 25.804 27.0406 25.8529 26.9021 25.8731C26.7636 25.8932 26.6225 25.884 26.4877 25.8462C26.353 25.8083 26.2277 25.7426 26.12 25.6533L20.4533 21.88C20.3924 21.8622 20.3276 21.8622 20.2667 21.88H11.7333C11.6724 21.8622 11.6076 21.8622 11.5467 21.88L5.89333 25.68C5.78302 25.7526 5.65948 25.8029 5.52976 25.8278C5.40004 25.8527 5.26668 25.8518 5.1373 25.8252C4.876 25.7714 4.64675 25.6161 4.5 25.3933C4.42734 25.283 4.37711 25.1594 4.35219 25.0297C4.32727 24.9 4.32815 24.7666 4.35476 24.6373C4.40852 24.376 4.56388 24.1467 4.78667 24L9.21333 21.0666C9.25309 21.0349 9.28471 20.9942 9.30558 20.9478C9.32644 20.9014 9.33596 20.8507 9.33333 20.8C9.33546 20.746 9.32444 20.6923 9.30121 20.6435C9.27799 20.5947 9.24325 20.5523 9.2 20.52L0.533333 14C0.482294 13.965 0.42187 13.9463 0.36 13.9463C0.29813 13.9463 0.237706 13.965 0.186667 14C0.134542 14.0236 0.0897265 14.0609 0.0568937 14.1078C0.0240609 14.1547 0.00441333 14.2095 0 14.2666L0 27.52C0 28.2272 0.280952 28.9055 0.781049 29.4056C1.28115 29.9057 1.95942 30.1866 2.66667 30.1866H29.3333C30.0406 30.1866 30.7189 29.9057 31.219 29.4056C31.719 28.9055 32 28.2272 32 27.52V14.28C32.0031 14.216 31.987 14.1527 31.9537 14.098C31.9204 14.0433 31.8715 13.9999 31.8133 13.9733C31.7611 13.9415 31.7011 13.9247 31.64 13.9247C31.5789 13.9247 31.5189 13.9415 31.4667 13.9733L22.7733 20.52Z"
                  fill="black"
                />
                <path
                  d="M22.7733 20.52C22.7323 20.5544 22.6992 20.5972 22.6762 20.6455C22.6532 20.6938 22.6409 20.7465 22.64 20.8C22.6451 20.852 22.6608 20.9025 22.686 20.9483C22.7112 20.9942 22.7455 21.0344 22.7867 21.0666L27.2267 24C27.3503 24.0655 27.4588 24.1563 27.5452 24.2664C27.6315 24.3765 27.6938 24.5035 27.728 24.6392C27.7622 24.7749 27.7675 24.9163 27.7436 25.0542C27.7197 25.1921 27.6671 25.3234 27.5893 25.4397C27.5114 25.556 27.4101 25.6547 27.2917 25.7293C27.1733 25.804 27.0406 25.8529 26.9021 25.8731C26.7636 25.8932 26.6225 25.884 26.4877 25.8462C26.353 25.8083 26.2277 25.7426 26.12 25.6533L20.4533 21.88C20.3924 21.8622 20.3276 21.8622 20.2667 21.88H11.7333C11.6724 21.8622 11.6076 21.8622 11.5467 21.88L5.89333 25.68C5.78302 25.7526 5.65948 25.8029 5.52976 25.8278C5.40004 25.8527 5.26668 25.8518 5.1373 25.8252C4.876 25.7714 4.64675 25.6161 4.5 25.3933C4.42734 25.283 4.37711 25.1594 4.35219 25.0297C4.32727 24.9 4.32815 24.7666 4.35476 24.6373C4.40852 24.376 4.56388 24.1467 4.78667 24L9.21333 21.0666C9.25309 21.0349 9.28471 20.9942 9.30558 20.9478C9.32644 20.9014 9.33596 20.8507 9.33333 20.8C9.33546 20.746 9.32444 20.6923 9.30121 20.6435C9.27799 20.5947 9.24325 20.5523 9.2 20.52L0.533333 14C0.482294 13.965 0.42187 13.9463 0.36 13.9463C0.29813 13.9463 0.237706 13.965 0.186667 14C0.134542 14.0236 0.0897265 14.0609 0.0568937 14.1078C0.0240609 14.1547 0.00441333 14.2095 0 14.2666L0 27.52C0 28.2272 0.280952 28.9055 0.781049 29.4056C1.28115 29.9057 1.95942 30.1866 2.66667 30.1866H29.3333C30.0406 30.1866 30.7189 29.9057 31.219 29.4056C31.719 28.9055 32 28.2272 32 27.52V14.28C32.0031 14.216 31.987 14.1527 31.9537 14.098C31.9204 14.0433 31.8715 13.9999 31.8133 13.9733C31.7611 13.9415 31.7011 13.9247 31.64 13.9247C31.5789 13.9247 31.5189 13.9415 31.4667 13.9733L22.7733 20.52Z"
                  fill="url(#paint1_linear_56_44)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_56_44"
                  x1="65.829"
                  y1="-16.644"
                  x2="-14.7328"
                  y2="-2.53714"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.325" stopColor="#A80601" />
                  <stop offset="0.785" stopColor="#EE5A02" />
                  <stop offset="1" stopColor="#DDB28F" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_56_44"
                  x1="69.8675"
                  y1="-2.83306"
                  x2="-16.1275"
                  y2="15.1598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.325" stopColor="#A80601" />
                  <stop offset="0.785" stopColor="#EE5A02" />
                  <stop offset="1" stopColor="#DDB28F" />
                </linearGradient>
                <clipPath id="clip0_56_44">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="lg:text-[1.875vw] text-[6vw]  my-2 font-[700] lg:leading-[2vw]">
            Email Us:{" "}
          </div>
          <div className="lg:text-[1vw] font-[700] xl:w-[70%] lg:leading-[1.2vw]">
            support@truqoin.com
          </div>
        </div>
        <div className="  text-white mx-auto lg:mx-0  my-5 text-center flex flex-col items-center  w-[50%] ">
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
          <div className="lg:text-[1.875vw] text-[6vw]  my-2 font-[700] lg:leading-[2vw]">
            Address:
          </div>
          <div className="lg:text-[1vw] font-[700] xl:w-[70%] lg:leading-[1vw]">
            TrūQoin Headquarters23 Blockchain Drive, Tech City, USA
          </div>
        </div>
      </div>
    </>
  );
}
