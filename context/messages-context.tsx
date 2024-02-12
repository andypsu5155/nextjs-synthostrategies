"use client";

import React, { useContext, useEffect } from "react";
import { useChat, Message } from "ai/react";

type MessagesContextType = {
  messages: Message[];
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

// Step 1: Create a new context
const MessagesContext = React.createContext<MessagesContextType>({
  messages: [],
  input: "",
  handleInputChange: () => {},
  handleSubmit: () => {},
  isLoading: false,
});

// Step 2: Create a context provider component
export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat();
  console.log("messages", messages);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hello there! 👋 My name is Simon, and I'm here to assist you with any questions you may have about SynthoStrategies. We specialize in developing websites for businesses and integrating cutting-edge AI technologies to help take your online presence to the next level.",
        id: "1",
      },
      {
        role: "assistant",
        content:
          "Could you please share a bit about your business and how you currently operate online? This will help me tailor our services to best fit your needs and goals.",
        id: "2",
      },
    ]);
  }, []);

  return (
    <MessagesContext.Provider
      value={{
        messages,
        input,
        handleInputChange,
        handleSubmit,
        isLoading,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessagesContext() {
  return useContext(MessagesContext);
}
