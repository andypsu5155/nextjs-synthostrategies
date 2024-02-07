import React from "react";
import image2 from "../public/images/image2-lq.webp";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function WhatWeDo() {
  return (
    <div className="p-10 flex flex-col items-center w-full relative text-white bg-black">
      <h1 className="">What We Do:</h1>
      <p className="">
        At SynthoStrategies, we specialize in crafting tailored solutions that
        strategically integrate AI automation into your business processes,
        enabling you to stay competitive in today&apos;s rapidly evolving
        digital landscape. Our expert team combines deep industry knowledge with
        advanced AI capabilities to deliver the following key services:
      </p>
      <Image src={image2} alt="" className="w-[50%] 2xl:w-[12%] mx-auto mt-5" />

      <Carousel className="w-[90%] mx-auto mt-5">
        <CarouselContent>
          <CarouselItem>
            <h2>AI-Integrated Web Development:</h2>
            <p>
              Leverage our expertise in crafting responsive, user-friendly
              websites and applications that are not just visually appealing but
              smart. By integrating AI into web development, we offer
              personalized user experiences, advanced analytics for behavior
              tracking, and automated content management systems. This service
              ensures your digital presence is powerful, effective, and tailored
              to meet the evolving needs of your audience.
            </p>
          </CarouselItem>
          <CarouselItem>
            <h2>AI Strategy Synthesis:</h2>
            <p>
              We deepen our collaboration with your team to align AI and web
              technologies with your business objectives, ensuring a seamless
              integration that maximizes efficiency, engagement, and
              productivity across all digital fronts.
            </p>
          </CarouselItem>
          <CarouselItem>
            <h2>E-commerce Optimization:</h2>
            <p>
              Our enhanced e-commerce solutions now encompass advanced web
              development techniques and AI-driven tools for an unbeatable
              online shopping experience. From AI-based chat support and
              personalized shopping recommendations to dynamic pricing models,
              we help you captivate and retain customers.
            </p>
          </CarouselItem>
          <CarouselItem>
            <h2>Customized Customer Service Solutions:</h2>
            <p>
              Including AI-powered chatbots and interactive web interfaces, our
              customer service solutions are designed to deliver immediate,
              personalized support, improving customer satisfaction and loyalty.
            </p>
          </CarouselItem>
          <CarouselItem>
            <h2>Retail and Inventory Management:</h2>
            <p>
              Optimize your online and physical store operations with our AI and
              web development solutions. Enjoy features like real-time inventory
              tracking, predictive analytics for demand forecasting, and an
              optimized online shopping interface.
            </p>
          </CarouselItem>
          <CarouselItem>
            <h2>Entertainment and Web Content Creation:</h2>
            <p>
              Collaborate with us to leverage AI for automating content creation
              and to develop dynamic, content-rich web platforms that engage and
              entertain your audience, ensuring they keep coming back for more.
            </p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-transparent" />
        <CarouselNext className="bg-transparent" />
      </Carousel>
    </div>
  );
}
