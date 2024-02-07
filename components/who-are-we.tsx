import Image from "next/image";
import React from "react";
import image1 from "../public/images/image1-lq.webp";

export default function WhoAreWe() {
  return (
    <div className=" flex flex-col items-center p-3 2xl:py-[5rem] text-slate-100 w-full relative bg-slate-900 2xl:bg-transparent">
      <h1 className="">Who are we?</h1>
      <p className="">
        SynthoStrategies is a dynamic AI automation and web development agency
        dedicated to propelling businesses across diverse industries into the
        future. Our mission is to empower organizations by blending cutting-edge
        web technologies with advanced AI strategies, driving success,
        innovation, and a competitive edge in the digital landscape.
      </p>
      <Image
        src={image1}
        alt=""
        className="w-[50%] mx-auto mt-5 2xl:mt-0 2xl:w-full 2xl:absolute 2xl:top-0 2xl:left-0 2xl:h-[60vh] 2xl:object-cover 2xl:-z-10 2xl:brightness-[30%]"
      />
    </div>
  );
}
