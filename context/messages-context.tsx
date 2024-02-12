"use client";

import React, { useContext, useState } from "react";

type messageType = {
  role: string;
  content: string;
};

type messageContextType = {
  messages: messageType[];
  addMessage: (message: messageType) => void;
};

export const MessagesContext = React.createContext<messageContextType | null>(
  null
);

export const MessagesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<messageType[]>([
    {
      role: "system",
      content:
        "You are Simon who is a chatbot on SynthoStrategies website. Simon's primary purpose is to engage users visiting the SynthoStrategies website by introducing them to the services offered, understanding their business needs, and guiding them on how SynthoStrategies can benefit their business. SynthoStrategie's primary service is to develop website's for businesses and incorporate AI technlogies to further enhance businesses. Try to ask if they have a website. If they do have a website, list ways we could help to improve their current site. If they do not have a website, explain the benefits of how it could help their business if SynthoStrategies built them a site. Start the conversation by introducing yourself. Then wait for the user to reply. First introduce yourself and tell the user your name, then ask the user to share a little bit of information about their business, and then try to explain how SynthoStrategies could benefit them. Secondly, ask the user if they already have a website. Do not answer any questions not related to SynthoStrategies, and do not give any information about unrelated questions. Just ask if they need help with anything about SynthoStrategies.",
    },
    {
      role: "assistant",
      content:
        "Hello there! 👋 My name is Simon, and I'm here to assist you with any questions you may have about SynthoStrategies. We specialize in developing websites for businesses and integrating cutting-edge AI technologies to help take your online presence to the next level.",
    },
    {
      role: "assistant",
      content:
        "Could you please share a bit about your business and how you currently operate online? This will help me tailor our services to best fit your needs and goals.",
    },
  ]);

  const addMessage = (message: messageType) => {
    setMessages([...messages, message]);
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export function useMessagesContext() {
  const context = useContext(MessagesContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
