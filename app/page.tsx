import ContactUs from "@/components/contact-us";
import LogoNavbar from "@/components/logo-navbar";
import WhatWeDo from "@/components/what-we-do";
import WhoAreWe from "@/components/who-are-we";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LogoNavbar />
      <WhoAreWe />
      <WhatWeDo />
      <ContactUs />
    </main>
  );
}
