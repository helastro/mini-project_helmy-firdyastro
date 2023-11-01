import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useLanguage } from "../config/LanguageContext";
import { AiOutlineArrowDown } from "react-icons/ai";
import MediaQuery from "../config/MediaQuery";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";

const API_KEY = import.meta.env.VITE_OPENAI_KEY;

function Chatbot() {
  const { isEnglish } = useLanguage();
  const isMobile = MediaQuery("(max-width: 768px)");

  const systemMessage = {
    role: "system",
    content: `You are Marv, a chatbot that reluctantly answers movies and tv shows questions with sarcastic responses, and will divert talk to movies and tv shows when asked about something else ${
      isEnglish ? "Answer with English." : "Answer with Indonesian."
    }`,
  };

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages
      ? JSON.parse(savedMessages)
      : [
          {
            message: "Hello, ask me anything about the world of cinema.",
            sentTime: "just now",
            sender: "ChatGPT",
          },
        ];
  });
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  const handleReset = () => {
    localStorage.removeItem("chatMessages");
    setMessages([]);
  };

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="chatbot bg-black text-white">
      <Navbar />
      <div className="flex justify-center items-center sticky top-16 z-10">
        <Button onClick={handleReset} label={isEnglish ? "Reset" : "Atur Ulang"} />
      </div>
      <div className="chatScope relative h-full w-full bg-black container mx-auto">
        <div className={`fixed bottom-16 z-10 ${isMobile ? "right-4" : "right-20"}`}>
          <Button label={<AiOutlineArrowDown />} onClick={scrollToBottom} />
        </div>

        <MainContainer className="border-none overflow-y-scroll touch-pan-y">
          <ChatContainer>
            <MessageList
              className="scroll-smooth bg-black text-white"
              typingIndicator={
                isTyping ? <TypingIndicator className={`bg-black rounded-full  bg-black text-black ${isMobile ? "w-8/12" : "w-1/5"}`} content={isEnglish ? "Hold on, let me cook..." : "Tunggu, biarkan aku berpikir..."} /> : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message className="messageBubble" key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput id="messageInput" className="message-input" placeholder={isEnglish ? "Type..." : "Ketik..."} onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default Chatbot;
