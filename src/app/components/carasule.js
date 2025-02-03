import React from "react";
import { Carousel } from "antd";
import LeftMobile from "./LeftMobile";
import MiddleMobile from "./Middlemobile";
import RightMobile from "./rightMobile";

const Carouse = () => (
  <>
    <div
      id="M_sec"
      className="absolute  w-[769px] h-[742px] rounded-full left-[20%] "
    ></div>
    <Carousel arrows className="w-[100%] h-[644px]  border-white " dots={false}>
      <div className="  w-[100%] h-[644px] mx-auto    border-white ">
        <LeftMobile className={"mx-auto"} />
      </div>

      <div className="xsm:w-[90%] w-[90%] h-[644px]  mx-auto border-white ">
        <MiddleMobile className={"mx-auto"} />
      </div>
      <div className="w-[100%] h-[644px]  mx-auto border-white ">
        <RightMobile className={"mx-auto"} />
      </div>
    </Carousel>
  </>
);
export default Carouse;
