"use client";

import Image from "next/image";
import React from "react";
import image1 from "../public/images/image1-lq.webp";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhoAreWe() {
  return (
    <div className=" flex flex-col items-center py-3 px-8 lg:px-[20%] 2xl:py-[5rem] text-slate-100 w-full relative bg-slate-900 2xl:bg-transparent">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.05 }}
        className=""
      >
        Who are we?
      </motion.h1>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="border-none mt-5 text-center text-lg md:text-3xl"
      >
        SynthoStrategies is a dynamic AI automation and web development agency
        dedicated to propelling businesses across diverse industries into the
        future. Our mission is to empower organizations by blending cutting-edge
        web technologies with advanced AI strategies, driving success,
        innovation, and a competitive edge in the digital landscape.
      </motion.h2>
      <motion.h3
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="mt-5 text-center"
      >
        Contact Us Today to Get Started!
      </motion.h3>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Link href="/contact">
          <Button className="bg-gradient-to-br from-blue-800 to-blue-600 hover:from-blue-950 hover:to-blue-800 mt-4 border-2 border-blue-950 shadow-2xl text-white text-lg px-12 py-6 rounded-2xl transition-all">
            Contact Us Now!
          </Button>
        </Link>
      </motion.div>

      <Image
        src={image1}
        alt=""
        className="w-[50%] mx-auto mt-5 2xl:mt-0 2xl:w-full 2xl:absolute 2xl:top-0 2xl:left-0 2xl:h-[60vh] 2xl:object-cover 2xl:-z-10 2xl:brightness-[30%]"
      />
    </div>
  );
}
