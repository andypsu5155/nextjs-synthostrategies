"use client";

import ContactUs from "@/components/contact-us";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.05 }}
        >
          Contact Us:
        </motion.h1>
        <form className="flex flex-col gap-3" onSubmit={sendEmail}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="flex flex-col"
          >
            <label>Name:</label>
            <Input
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="text-black p-1"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col"
          >
            <label>Email:</label>
            <Input
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="text-black p-1"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
          >
            <label>Message:</label>
            <Textarea
              placeholder="Message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="text-black p-1 height-[300px]"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 w-[300px]"
              type="submit"
            >
              Submit
            </Button>
          </motion.div>
        </form>
      </section>
      <ContactUs />
    </>
  );
}
