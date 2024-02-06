import React from "react";
import Image from "next/image";
import logo from "../public/images/synthostrategies-logo.png";

export default function LogoNavbar() {
  return (
    <div className="bg-blue-300 w-full flex flex-col items-center pb-10 px-12 sm:px-2">
      <Image
        src={logo}
        alt="SynthoStrategies logo"
        className="p-5 lg:w-[20%]"
      />
      <p className="text-slate-700 text-xl text-center italic -mt-12">
        Collaborate with Us to Synthesize AI Success and Strategic Excellence!
      </p>
    </div>
  );
}
