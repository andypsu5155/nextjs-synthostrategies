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
      content: "You are a chatbot that is helpful and replies concisely",
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
