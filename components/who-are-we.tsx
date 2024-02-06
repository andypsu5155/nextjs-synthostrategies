import Image from "next/image";
import React from "react";
import image1 from "../public/images/image1-lq.webp";

export default function WhoAreWe() {
  return (
    <div className="p-10 flex flex-col items-center py-[10rem] text-slate-100 w-full relative">
      <Image
        src={image1}
        alt=""
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[30%]"
      />

      <h1 className="text-5xl font-bold mb-3">Who are we?</h1>
      <p className="text-xl indent-7">
        SynthoStrategies is a dynamic AI automation and web development agency
        dedicated to propelling businesses across diverse industries into the
        future. Our mission is to empower organizations by blending cutting-edge
        web technologies with advanced AI strategies, driving success,
        innovation, and a competitive edge in the digital landscape.
      </p>
    </div>
  );
}
