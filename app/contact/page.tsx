"use client";

import ContactUs from "@/components/contact-us";
import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
  };
  return (
    <>
      <section className="px-5 sm:px-[20%] py-5 sm:py-[10%] bg-slate-900 text-slate-100">
        <h1>Contact Us:</h1>
        <form className="flex flex-col gap-3" onSubmit={sendEmail}>
          <div className="flex flex-col">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="text-black p-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="text-black p-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Message:</label>
            <textarea
              placeholder="Message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="text-black p-1"
            />
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
