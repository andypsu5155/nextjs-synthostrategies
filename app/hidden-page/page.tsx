"use client";

import ContactUs from "@/components/contact-us";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function HiddenPage() {
  // State variables
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a chatbot that is helpful and replies concisely",
    },
  ]); // An array of the messages that make up the chat

  const [newMessageText, setNewMessageText] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);

  // `onChange` event handler to update `newMessageText` as the user types
  const onChange = (event: { target: { value: any } }) => {
    setNewMessageText(event.target.value);
  };

  // `onSubmit` event handler fired when the user submits a new message
  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setMessages([...messages, { role: "user", content: newMessageText }]);

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

      setMessages([...messages, reply]);
    } catch {
      // Catch and handle any unexpected errors
      const reply = {
        role: "assistant",
        content: "An error has occured.",
      };

      setMessages([...messages, reply]);
    }
    // Set `setLoadingStatus` to false
    setLoadingStatus(false);
  }

  return (
    <>
      <section className="mx-auto h-screen max-w-full sm:max-w-3xl">
        <div className="py-8">
          <h1 className="text-center text-6xl font-bold text-blue-500">
            GPT Chatbot
          </h1>
        </div>

        {messages.length === 1 && (
          <div className="mx-10 mt-20 flex justify-center">
            <div>
              <p className="mb-2 font-bold">
                GPT Chatbot is a basic chatbot built with the OpenAI API,
                Next.js and Tailwind CSS
              </p>
              <p className="mb-32">
                To start a conversation, type a message below and hit send
              </p>
            </div>
          </div>
        )}

        <div>
          {messages.map((message, index) => (
            <div className="mx-2 my-4" key={index.toString()}>
              <p className="font-bold">
                {message.role === "assistant" ? "GPT Chatbot" : "You"}
              </p>

              {message.content}
            </div>
          ))}
        </div>

        <div
          className="fixed bottom-5 z-20 w-full max-w-full 
                     sm:max-w-3xl"
        >
          <form className="mx-2 flex items-end" onSubmit={onSubmit}>
            <textarea
              className="mr-2 grow resize-none rounded-md border-2 
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
      <ContactUs />
    </>
  );
}
