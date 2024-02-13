"use client";

import { MessageSquareText, XCircle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import BasicGPTChat from "./basic-gpt-chat";

export default function MessengerIcon() {
  const [isOpened, setIsOpened] = React.useState(false);

  const animateProps = isOpened
    ? { x: -5, y: -30, opacity: 1 } // Adjusted y value for when isOpened is true
    : { x: -10, y: -10, opacity: 1 };

  return (
    <motion.div
      className="fixed bottom-0 right-0"
      initial={{ x: -10, y: 30, opacity: 0 }} // Different initial state
      animate={animateProps}
      transition={{ duration: 0.25 }}
    >
      {isOpened ? (
        <>
          <XCircle
            className="absolute top-1 right-6 z-10 w-12 h-12 text-white bg-gradient-to-br from-black to-slate-800 hover:from-slate-950 hover:to-slate-700 rounded-full p-2"
            onClick={() => setIsOpened(!isOpened)}
          />
          <BasicGPTChat />
        </>
      ) : (
        <MessageSquareText
          className="w-12 h-12 text-white bg-gradient-to-br from-black to-slate-800 hover:from-slate-950 hover:to-slate-700 rounded-full p-2 border-2 border-white"
          onClick={() => setIsOpened(!isOpened)}
        />
      )}
    </motion.div>
  );
}
