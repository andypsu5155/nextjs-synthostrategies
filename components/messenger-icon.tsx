"use client";

import { MessageSquareText } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function MessengerIcon() {
  return (
    <motion.div
      className="fixed bottom-4 right-4"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/hidden-page">
        <MessageSquareText className="w-12 h-12 text-white bg-black rounded-full p-2" />
      </Link>
    </motion.div>
  );
}
