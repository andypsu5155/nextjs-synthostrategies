"use client";

import ContactUs from "@/components/contact-us";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MessengerIcon from "@/components/messenger-icon";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState(false);

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
    setEmailSent(true);
  };

  const handleRefresh = () => {
    setData({
      name: "",
      email: "",
      message: "",
    });
    setEmailSent(false);
  };

  return (
    <>
      <section className="px-5 sm:px-[20%] py-5 sm:py-[10%] w-full bg-gradient-to-br from-slate-950 to-slate-700 text-slate-100">
        {emailSent === false ? (
          <>
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
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  className="text-black p-1 height-[300px]"
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <Button
                  className="bg-gradient-to-br from-blue-800 to-blue-600 hover:from-blue-950 hover:to-blue-800 border-2 border-blue-100 shadow-2xl text-white text-lg px-12 py-6 rounded-2xl transition-all w-[300px]"
                  type="submit"
                >
                  Submit
                </Button>
              </motion.div>
            </form>
          </>
        ) : (
          <>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.05 }}
            >
              Thank you for sending an email!
            </motion.h1>
            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="mt-5"
            >
              Name:
            </motion.h3>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="!mt-0"
            >
              {data.name}
            </motion.p>
            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              Email:
            </motion.h3>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="!mt-0"
            >
              {data.email}
            </motion.p>
            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Message:
            </motion.h3>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="!mt-0"
            >
              {data.message}
            </motion.p>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-5"
            >
              Contact Us Again:
            </motion.h1>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
            >
              <Button
                className="bg-gradient-to-br from-blue-800 to-blue-600 hover:from-blue-950 hover:to-blue-800 border-2 border-blue-100 shadow-2xl text-white text-lg px-12 py-6 rounded-2xl transition-all mt-5"
                onClick={handleRefresh}
              >
                Contact Us
              </Button>
            </motion.div>
          </>
        )}
      </section>
      <ContactUs />
      <MessengerIcon />
    </>
  );
}
