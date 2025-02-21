import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBw_WJYny7xoZfn7p9UGhLYqr4eWnKXIp8"; 
const genAI = new GoogleGenerativeAI(API_KEY);

const HelpCenterCard = () => {
  const [message, setMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [saved, setSaved] = useState(false);

  // Function to send message to Gemini AI
  const sendMessage = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
      // Add a clear instruction for brevity
      const prompt = `Please provide a concise response in less than 5 lines: ${message}`;
  
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
  
      console.log(text);
      setChatResponse(text);
    } catch (error) {
      console.error("Error chatting with AI:", error);
      setChatResponse("Failed to get response.");
    }
  };
  
  // Function to Save Chat
  const saveChat = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from storage
      if (!token) {
        console.error("No token found, user is not logged in.");
        return;
      }
  
      await axios.post(
         `${import.meta.env.VITE_SERVER}/api/chat/save-chat`,
        {
          text: message,
          aiResponse: chatResponse,
        },
        {
          headers: { Authorization: token }, // Send token in headers
        }
      );
  
      setSaved(true);
    } catch (error) {
      console.error("Error saving chat:", error);
    }
  };
  
  // Function to Fetch User Chats
  
  return (
    <div className="bg-white shadow-lg p-5 rounded-lg max-w-md mx-auto">
      {/* Help Icon */}
      <div className="flex justify-center mt-4 md:mt-6">
        <div className="bg-red-500 text-white p-3 rounded-full">
          <HelpCircle size={24} />
        </div>
      </div>

      {/* Help Center Heading */}
      <h3 className="text-gray-800 font-semibold mt-2 text-lg md:text-xl">
        Help Center
      </h3>
      <p className="text-gray-500 text-sm md:text-base mt-1">
        Having trouble in Finti? Chat with our AI assistant or contact support.
      </p>

      {/* Chat Input */}
      <div className="mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
          className="w-full border rounded-lg px-3 py-2 text-gray-800"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-2 w-full hover:bg-blue-600 transition"
        >
          Chat with AI
        </button>
      </div>

      {/* AI Response */}
      {chatResponse && (
        <div className="mt-3 bg-gray-100 p-3 rounded-lg text-gray-800">
          <strong>AI Response:</strong> {chatResponse}
        </div>
      )}

      {/* Save Button */}
      {chatResponse && !saved && (
        <button
          onClick={saveChat}
          className="bg-green-500 text-white rounded-lg px-4 py-2 mt-2 w-full hover:bg-green-600 transition"
        >
          Save to Database
        </button>
      )}

      {saved && <p className="text-green-600 mt-2">Chat saved successfully!</p>}
    </div>
  );
};

export default HelpCenterCard;
