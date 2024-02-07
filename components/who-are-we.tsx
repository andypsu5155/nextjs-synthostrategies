import Image from "next/image";
import React from "react";
import image1 from "../public/images/image1-lq.webp";
import { Button } from "./ui/button";
import Link from "next/link";

export default function WhoAreWe() {
  return (
    <div className=" flex flex-col items-center py-3 px-8 lg:px-[20%] 2xl:py-[5rem] text-slate-100 w-full relative bg-slate-900 2xl:bg-transparent">
      <h1 className="">Who are we?</h1>
      <h2 className="border-none mt-5 text-center text-lg md:text-3xl">
        SynthoStrategies is a dynamic AI automation and web development agency
        dedicated to propelling businesses across diverse industries into the
        future. Our mission is to empower organizations by blending cutting-edge
        web technologies with advanced AI strategies, driving success,
        innovation, and a competitive edge in the digital landscape.
      </h2>
      <h3 className="mt-5 text-center">Contact Us Today to Get Started!</h3>
      <Link href="/contact" className="mt-4">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Contact Us Now!
        </Button>
      </Link>

      <Image
        src={image1}
        alt=""
        className="w-[50%] mx-auto mt-5 2xl:mt-0 2xl:w-full 2xl:absolute 2xl:top-0 2xl:left-0 2xl:h-[60vh] 2xl:object-cover 2xl:-z-10 2xl:brightness-[30%]"
      />
    </div>
  );
}
