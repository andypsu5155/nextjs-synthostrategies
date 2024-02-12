"use client";

import { useMessagesContext } from "@/context/messages-context";
import React, { useEffect } from "react";
import { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Simon from "@/public/images/simon-cropped.webp";
import Image from "next/image";

export default function BasicGPTChat() {
  const [newMessageText, setNewMessageText] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);
  const { messages, addMessage } = useMessagesContext();

  // `onChange` event handler to update `newMessageText` as the user types
  const onChange = (event: { target: { value: any } }) => {
    setNewMessageText(event.target.value);
  };

  // `onSubmit` event handler fired when the user submits a new message
  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    addMessage({ role: "user", content: newMessageText });

    setLoadingStatus(true);
    setNewMessageText("");
  };

  // Use `useEffect` to call `fetchReply` when `loadingStatus` changes
  useEffect(() => {
    if (loadingStatus) {
      fetchReply();
    }
  }, [loadingStatus]);

  // Function that calls the `/api/chat` endpoint and updates `messages`
  async function fetchReply() {
    try {
      // Try to fetch a `reply` from the endpoint and update `messages`
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      });

      const responseBody = await response.json();
      const reply =
        response.status === 200 ? responseBody.reply : responseBody.error.reply;

      addMessage(reply);
    } catch {
      // Catch and handle any unexpected errors
      const reply = {
        role: "assistant",
        content: "An error has occured.",
      };

      addMessage(reply);
    }
    // Set `setLoadingStatus` to false
    setLoadingStatus(false);
  }

  return (
    <>
      <section className="h-[85vh] w-[95vw] mx-auto bg-white relative p-10 rounded-xl border-[2px] border-slate-900">
        <div className="flex gap-3 items-center justify-center">
          <Avatar>
            <AvatarImage src="https://www.synthostrategies.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsimon.2bded0b8.webp&w=1080&q=75" />
          </Avatar>
          <Image src={Simon} alt="Simon" width={100} height={100} />
          <h1 className="text-center text-2xl font-bold text-blue-500">
            Chat with Simon from SynthoStrategies
          </h1>
        </div>

        <div>
          {messages.slice(1).map((message, index) => (
            <div className="mx-2 my-4" key={index.toString()}>
              <p className="font-bold">
                {message.role === "assistant" ? "Simon" : "You"}
              </p>

              {message.content}
            </div>
          ))}
        </div>

        <div
          className="absolute w-full bottom-0 left-0 z-20
                     "
        >
          <form className="flex flex-col gap-2 p-2" onSubmit={onSubmit}>
            <textarea
              className="grow resize-none rounded-md border-2 
                       border-gray-400 p-2 focus:border-blue-600 
                         focus:outline-none"
              value={newMessageText}
              onChange={onChange}
              placeholder="Why is the sky blue?"
            />

            <button
              className="h-11 rounded-md border-2 border-blue-400
                         bg-blue-400 hover:bg-blue-500 px-1 py-1"
            >
              <p className="font-bold text-white">Send</p>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
