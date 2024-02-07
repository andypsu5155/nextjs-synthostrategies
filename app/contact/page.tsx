import ContactUs from "@/components/contact-us";
import React from "react";

export default function Contact() {
  return (
    <>
      <section className="px-5 sm:px-[20%] py-5 sm:py-[10%] bg-slate-900 text-slate-100">
        <h1>Contact Us:</h1>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label>Name:</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="flex flex-col">
            <label>Email:</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="flex flex-col">
            <label>Message:</label>
            <textarea placeholder="Message" />
          </div>
          <button className="bg-blue-300 hover:bg-blue-400 p-5 text-white w-[300px] rounded-xl transition-all">
            Submit
          </button>
        </form>
      </section>
      <ContactUs />
    </>
  );
}
