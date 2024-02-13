"use client";

import { useMessagesContext } from "@/context/messages-context";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Message } from "ai/react";

export default function BasicGPTChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useMessagesContext();

  return (
    <>
      <section className="h-[85vh] w-[95vw] mx-auto bg-white bg-opacity-60 backdrop-blur-lg relative p-10 rounded-xl border-[2px] border-slate-900">
        <div className="h-[10%] flex gap-3 items-center justify-center">
          <Avatar>
            <AvatarImage src="https://raw.githubusercontent.com/andypsu5155/nextjs-synthostrategies/main/public/images/simon-cropped.webp" />
          </Avatar>
          <h1 className="text-center text-lg sm:text-2xl font-bold text-blue-500">
            Chat with Simon from SynthoStrategies
          </h1>
        </div>

        <div className="overflow-y-scroll h-[70%] sm:h-[75%]">
          {messages.map((message: Message) => {
            return (
              <div key={message.id}>
                {message.role === "assistant" ? (
                  <h3 className="text-lg font-semibold mt-2">Simon</h3>
                ) : (
                  <h3 className="text-lg font-semibold mt-2">You</h3>
                )}

                {message.content
                  .split("\n")
                  .map((currentTextBlock: string, index: number) => {
                    if (currentTextBlock === "") {
                      return (
                        <p key={message.id + index} className="!mt-0">
                          &nbsp;
                        </p>
                      ); // " "
                    } else {
                      return (
                        <p key={message.id + index} className="!mt-0">
                          {currentTextBlock}
                        </p>
                      );
                    }
                  })}
              </div>
            );
          })}
        </div>

        <div
          className="w-full h-[20%] sm:h-[15%]
                     "
        >
          <form className="flex flex-col gap-2 p-2" onSubmit={handleSubmit}>
            <textarea
              className="grow resize-none rounded-md border-2 
                       border-gray-400 p-2 focus:border-blue-600 
                         focus:outline-none"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter a message..."
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
