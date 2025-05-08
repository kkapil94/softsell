"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedQuestions = [
    "How do I sell my license?",
    "What types of licenses do you buy?",
    "How long does the process take?",
    "How much can I get for my licenses?",
  ];

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessageId = Date.now();
    setMessages([
      ...messages,
      { id: userMessageId, text: inputValue, isBot: false },
    ]);
    setInputValue("");

    // Show bot is typing
    setIsTyping(true);

    // Mock API call delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: userMessageId + 1, text: botResponse, isBot: true },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handlePredefinedQuestion = (question: string) => {
    // Add user message
    const userMessageId = Date.now();
    setMessages([
      ...messages,
      { id: userMessageId, text: question, isBot: false },
    ]);

    // Show bot is typing
    setIsTyping(true);

    // Mock API call delay
    setTimeout(() => {
      const botResponse = getBotResponse(question);
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: userMessageId + 1, text: botResponse, isBot: true },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  // Helper function to get bot response based on user input
  const getBotResponse = (input: string) => {
    input = input.toLowerCase();

    if (input.includes("sell") && input.includes("license")) {
      return "To sell your license, simply fill out our contact form with details about your software, and our team will provide you with a valuation within 24 hours.";
    } else if (
      input.includes("types") ||
      input.includes("license") ||
      input.includes("buy")
    ) {
      return "We purchase licenses for major software providers including Microsoft, Adobe, Oracle, SAP, Salesforce, and many others. Feel free to ask about your specific license type!";
    } else if (
      input.includes("how long") ||
      input.includes("process") ||
      input.includes("time") ||
      input.includes("take")
    ) {
      return "The entire process typically takes 2-5 business days from initial valuation to payment. For common licenses, we can sometimes complete the process in as little as 48 hours!";
    } else if (
      input.includes("how much") ||
      input.includes("price") ||
      input.includes("value") ||
      input.includes("money")
    ) {
      return "License values vary widely based on type, quantity, and expiration date. Generally, enterprise licenses can fetch 40-70% of their original value. Submit your details for a precise quote.";
    } else {
      return "Thank you for your question. Our team would be happy to help with this. Please provide more details about your licenses via our contact form, and an expert will get back to you shortly.";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <MessageSquare size={20} className="mr-2" />
                <h3 className="font-medium">SoftSell Assistant</h3>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-700">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-3 ${msg.isBot ? "text-left" : "text-right"}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      msg.isBot
                        ? "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white"
                        : "bg-blue-600 text-white"
                    } max-w-[80%]`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-left mb-3">
                  <div className="inline-block p-3 rounded-lg bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined Questions */}
            <div className="p-3 border-t dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Suggested Questions:
              </p>
              <div className="flex flex-wrap gap-2">
                {predefinedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handlePredefinedQuestion(question)}
                    className="text-xs py-1 px-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t dark:border-gray-600 flex items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
