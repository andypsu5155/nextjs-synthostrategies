"use client";

import ContactUs from "@/components/contact-us";
import React from "react";
import cityscapesImage from "@/public/images/cityscape.webp";
import coolAiImage from "@/public/images/coolai.webp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import MessengerIcon from "@/components/messenger-icon";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="px-5 sm:px-[20%] py-5 bg-gradient-to-br from-slate-950 to-slate-700 text-slate-100"
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.05 }}
          className=""
        >
          About SynthoStrategies
        </motion.h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
          id="mission"
        >
          <h2 className="!mt-5">Our Mission</h2>
          <div className="flex flex-col 2xl:flex-row gap-5 mt-5">
            <Image
              src={cityscapesImage}
              alt="Image of cityscape"
              className="w-[200px] mx-auto 2xl:mx-0 shadow-2xl border-2 border-white rounded-md"
            />
            <p>
              At SynthoStrategies, we are on a mission to revolutionize the way
              businesses interact with the digital world. We believe in the
              transformative power of artificial intelligence and its capacity
              to redefine web development, making digital experiences more
              intuitive, efficient, and engaging. Our goal is to empower
              organizations across various industries to navigate the digital
              landscape with ease and innovation, driving success and
              establishing a competitive edge in their respective fields.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.15 }}
          id="who-we-are"
        >
          <h2 className="!mt-5">Who We Are</h2>
          <div className="flex flex-col 2xl:flex-row gap-5 mt-5">
            <p>
              SynthoStrategies is a leading AI automation and web development
              agency, committed to delivering forward-thinking solutions and
              strategic excellence. Founded by a team of visionaries and
              technologists, we have a passion for blending cutting-edge web
              technologies with advanced AI strategies. Our expertise spans
              across crafting responsive, user-friendly websites, developing
              AI-integrated applications, optimizing e-commerce platforms, and
              beyond. We are dedicated to propelling businesses into the future,
              ensuring they thrive in the rapidly evolving digital age.
            </p>
            <Image
              src={coolAiImage}
              alt="Image of cool AI"
              className="w-[200px] mx-auto 2xl:mx-0 shadow-2xl border-2 border-white rounded-md"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          id="what-sets-us-apart"
        >
          <h2 className="!mt-5">What Sets Us Apart</h2>
          <ul>
            <li>
              <strong>Innovation at the Core:</strong> Innovation is not just a
              buzzword for us; it&apos;s the foundation of everything we do. We
              are constantly exploring new technologies, methodologies, and
              strategies to keep our clients ahead of the curve.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> We understand that each
              business is unique. That&apos;s why we specialize in creating
              customized solutions that perfectly align with your business
              objectives, ensuring seamless integration and maximum impact.
            </li>
            <li>
              <strong>Collaborative Approach:</strong> Our success is measured
              by your success. We work closely with our clients, forming deep
              partnerships to understand their challenges and aspirations fully.
              This collaborative approach ensures that our solutions are not
              only effective but also strategically aligned with your long-term
              goals.
            </li>
            <li>
              <strong>Expert Team:</strong> Our team comprises industry
              veterans, AI experts, and creative minds, all united by a shared
              commitment to excellence and innovation. With deep knowledge and a
              diverse skill set, we are equipped to tackle challenges of any
              scale and complexity.
            </li>
            <li>
              <strong>Results-Driven:</strong> At SynthoStrategies, we are
              obsessed with results. We leverage advanced analytics and
              strategic insights to ensure that our solutions drive real,
              measurable outcomes for your business.
            </li>
          </ul>
        </motion.div>
        <motion.div
          id="our-services"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="!mt-5">Our Services</h2>
          <p>
            From AI-integrated web development to customized customer service
            solutions, our services are designed to address the multifaceted
            needs of the modern digital landscape. We offer:
          </p>
          <ul className="list-disc pl-10">
            <li>AI-Integrated Web Development</li>
            <li>AI Strategy Synthesis</li>
            <li>E-commerce Optimization</li>
            <li>Customized Customer Service Solutions</li>
            <li>Retail and Inventory Management</li>
            <li>Entertainment and Web Content Creation</li>
          </ul>
        </motion.div>
        <motion.div
          id="join-us"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="!mt-5">Join Us</h2>
          <p className="">
            Embark on a journey of digital transformation with SynthoStrategies.
            Let us synthesize the strategies that will drive your business
            forward into a future of enhanced efficiency, profitability, and
            competitiveness.
          </p>
          <h3 className="mt-5 mb-2">
            Contact us today to discover how we can help you achieve AI-powered
            success.
          </h3>
          <Link href="/contact" className="">
            <Button className="bg-gradient-to-br from-blue-800 to-blue-600 hover:from-blue-950 hover:to-blue-800 border-2 border-blue-950 shadow-2xl text-white text-lg px-12 py-6 rounded-2xl transition-all">
              Contact Us Now!
            </Button>
          </Link>
        </motion.div>
      </section>
      <ContactUs />
      <MessengerIcon />
    </>
  );
}
