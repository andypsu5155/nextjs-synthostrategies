import React from "react";
import Image from "next/image";
import logo from "../public/images/synthostrategies-logo.png";
import Link from "next/link";
import { links } from "@/lib/data";

export default function LogoNavbar() {
  return (
    <div className="bg-blue-300 w-full flex flex-col items-center">
      <nav className="flex justify-between items-center w-full lg:w-[95%] mx-auto">
        <Image
          src={logo}
          alt="SynthoStrategies logo"
          className="flex h-[4em] lg:h-[8em]  w-auto"
        />
        <ul className="flex text-2xl">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="capitalize bg-blue-300 hover:bg-blue-400 p-2 sm:p-5 rounded-xl transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-slate-700 text-xl text-center italic">
        Collaborate with Us to Synthesize AI Success and Strategic Excellence!
      </p>
    </div>
  );
}
