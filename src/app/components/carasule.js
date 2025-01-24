import React from "react";
import { Carousel } from "antd";
import LeftMobile from "./LeftMobile";
import MiddleMobile from "./Middlemobile";
import RightMobile from "./rightMobile";

const Carouse = () => (
  <Carousel className="w-[100%] h-[844px]  border-white " dots={false}>

    <div className="  w-[100%] h-[844px] mx-auto   border-white ">
      <LeftMobile />
    </div>

    <div className="w-[100%] h-[844px]  mx-auto border-white ">
      <MiddleMobile />
    </div>
    <div className="w-[100%] h-[844px]  mx-auto border-white ">
      <RightMobile />
    </div>
  </Carousel>
);
export default Carouse;
