import ContactUs from "@/components/contact-us";
import LogoNavbar from "@/components/logo-navbar";
import MessengerIcon from "@/components/messenger-icon";
import WhatWeDo from "@/components/what-we-do";
import WhoAreWe from "@/components/who-are-we";

export default function Home() {
  return (
    <>
      <WhoAreWe />
      <WhatWeDo />
      <ContactUs />
    </>
  );
}
