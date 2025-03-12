import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "tailwindcss/tailwind.css";

const socket = io("http://localhost:5000");

const WelcomePage = ({ onStart }) => {
  const handleExit = () => {
    window.close();
  };

  return (
    <div
      className="flex items-center justify-center h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="text-center relative z-20">
        {/* Main Heading */}
        <h1 className="text-6xl font-bold mb-4 relative inline-block font-poppins tracking-wider">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            Elevate Your Chat
          </span>
          <span className="block w-0 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 absolute bottom-0 left-0 animate-special-underline"></span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto font-poppins tracking-wide">
          Step into a world of seamless communication. Connect, collaborate, and share ideas with ease. Let’s get started!
        </p>

        {/* Buttons */}
        <div className="mt-8 space-x-4">
          <button
            onClick={onStart}
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-poppins"
          >
            Start Chatting
          </button>
          <button
            onClick={handleExit}
            className="px-8 py-3 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-poppins"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }

          @keyframes special-underline {
            0% { width: 0; opacity: 0; }
            50% { width: 100%; opacity: 1; }
            100% { width: 0; opacity: 0; }
          }

          .animate-float {
            animation: float infinite ease-in-out;
          }

          .animate-special-underline {
            animation: special-underline 3s ease-in-out infinite;
          }

          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
    </div>
  );
};
const ChoicePage = ({ onOneToOne, onGroupChat, onBack }) => {
  return (
    <div
      className="flex flex-col h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Back Arrow */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-white hover:text-gray-300 transition-all duration-300 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      {/* Choice Container */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-8 relative z-20">
        {/* Private Conversations Section */}
        <div
          onClick={onOneToOne}
          className="w-full max-w-2xl bg-white bg-opacity-20 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group border-2 border-white border-opacity-30 hover:border-opacity-100"
        >
          <div className="p-8 text-center">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:text-white transition-all duration-500">
              Private Conversations
            </h2>
            <p className="mt-4 text-xl text-gray-200 group-hover:text-white transition-all duration-500">
              Connect deeply with one person at a time.
            </p>
          </div>
        </div>

        {/* Group Chats Section */}
        <div
          onClick={onGroupChat}
          className="w-full max-w-2xl bg-white bg-opacity-20 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group border-2 border-white border-opacity-30 hover:border-opacity-100"
        >
          <div className="p-8 text-center">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500 group-hover:text-white transition-all duration-500">
              Group Chats
            </h2>
            <p className="mt-4 text-xl text-gray-200 group-hover:text-white transition-all duration-500">
              Join lively discussions with a group.
            </p>
          </div>
        </div>
      </div>

      {/* Sparkling Animation */}
      <style>
        {`
          @keyframes sparkle {
            0% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
          }

          .sparkle {
            position: absolute;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            animation: sparkle 1.5s infinite ease-in-out;
          }

          .sparkle-1 { top: 20%; left: 10%; animation-delay: 0s; }
          .sparkle-2 { top: 40%; left: 30%; animation-delay: 0.5s; }
          .sparkle-3 { top: 60%; left: 50%; animation-delay: 1s; }
          .sparkle-4 { top: 80%; left: 70%; animation-delay: 1.5s; }
        `}
      </style>

      {/* Sparkles */}
      <div className="sparkle sparkle-1"></div>
      <div className="sparkle sparkle-2"></div>
      <div className="sparkle sparkle-3"></div>
      <div className="sparkle sparkle-4"></div>
    </div>
  );
};

const ChatInterface = ({ onBack }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [room, setRoom] = useState("default_room"); // Add room state

  useEffect(() => {
    // Join the room when the component mounts
    socket.emit("join_room", room);

    // Listen for incoming messages
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    // Listen for chat history updates
    socket.on("chat_history", (history) => {
      setChat(history);
    });

    // Listen for typing indicators
    socket.on("typing", (data) => {
      if (data.isTyping) {
        setTyping(`${data.username} is typing...`);
      } else {
        setTyping("");
      }
    });

    // Clean up listeners
    return () => {
      socket.off("receive_message");
      socket.off("chat_history");
      socket.off("typing");
    };
  }, [room]);

  const sendMessage = () => {
    if (message.trim()) {
      const messageData = {
        room,
        message,
        emoji: "😊",
        user: "You",
      };
      socket.emit("send_message", messageData);
      setMessage("");
    }
  };

  const deleteMessage = (messageId) => {
    socket.emit("delete_message", { room, messageId });
  };

  const clearHistory = () => {
    socket.emit("clear_history", room);
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prev) => prev + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div
      className="flex flex-col h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Back Arrow */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-white hover:text-gray-300 transition-all duration-300 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      {/* Chat Box */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-20">
        <div className="w-full max-w-2xl bg-white bg-opacity-20 rounded-lg shadow-lg border-2 border-white border-opacity-30 hover:border-opacity-100 transition-all duration-500">
          <div className="p-6">
            <div className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 mb-6">
              Private Conversations
            </div>
            <div className="h-80 overflow-y-auto mb-6 p-4 bg-gray-50 rounded-lg">
              {chat.map((msg) => (
                <div
                  key={msg.id}
                  className="p-4 my-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{msg.emoji}</span>
                      <span className="text-gray-800">{msg.message}</span>
                    </div>
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {typing && (
              <div className="text-gray-600 text-lg italic mb-4 animate-pulse">
                {typing}
              </div>
            )}
            <div className="flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full p-3 rounded-full border-2 border-orange-300 text-gray-800 bg-white focus:outline-none focus:border-orange-500"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    socket.emit("typing", { room, username: "You", isTyping: true });
                  }}
                  onBlur={() => {
                    socket.emit("typing", { room, username: "You", isTyping: false });
                  }}
                  placeholder="Type a message"
                />
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="absolute right-14 top-3 text-gray-600 hover:text-orange-500 transition-all duration-300"
                >
                  😊
                </button>
                {showEmojiPicker && (
                  <div className="absolute bottom-14 right-0 bg-white p-4 rounded-lg shadow-lg grid grid-cols-6 gap-2">
                    {["😊", "😂", "❤️", "🔥", "🎉", "👍"].map((emoji, i) => (
                      <button
                        key={i}
                        onClick={() => handleEmojiClick(emoji)}
                        className="text-2xl hover:scale-125 transition-all duration-300"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={sendMessage}
                className="ml-3 px-6 py-3 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full hover:scale-105 transition-all duration-300"
              >
                Send
              </button>
            </div>
            <button
              onClick={clearHistory}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full hover:scale-105 transition-all duration-300"
            >
              Clear History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const GroupChatInterface = ({ onBack }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    socket.on("typing", (data) => {
      setTyping(data);
    });

    return () => {
      socket.off("receive_message");
      socket.off("typing");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", { message, emoji: "😊", user: "User" }); // Default emoji and user
      setMessage("");
    }
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prev) => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleReaction = (index, emoji) => {
    const updatedChat = [...chat];
    if (!updatedChat[index].reactions) {
      updatedChat[index].reactions = [];
    }
    updatedChat[index].reactions.push(emoji);
    setChat(updatedChat);
  };

  return (
    <div
      className="flex flex-col h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Back Arrow */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-white hover:text-gray-300 transition-all duration-300 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      {/* Chat Box */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-20">
        <div className="w-full max-w-2xl bg-white bg-opacity-20 rounded-lg shadow-lg border-2 border-white border-opacity-30 hover:border-opacity-100 transition-all duration-500">
          <div className="p-6">
            {/* Group Name */}
            <div className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500 mb-6">
              Group Name: Awesome Squad
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto mb-6 p-4 bg-gray-50 rounded-lg">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className="p-4 my-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center">
                    {/* User Avatar */}
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                      {msg.user.charAt(0)}
                    </div>
                    <div>
                      {/* User Name and Message */}
                      <span className="text-gray-800 font-bold">{msg.user}</span>
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{msg.emoji}</span>
                        <span className="text-gray-800">{msg.message}</span>
                      </div>
                      {/* Message Reactions */}
                      {msg.reactions && (
                        <div className="flex mt-2 space-x-2">
                          {msg.reactions.map((reaction, i) => (
                            <span key={i} className="text-xl">
                              {reaction}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Typing Indicator */}
            {typing && (
              <div className="text-gray-600 text-lg italic mb-4 animate-pulse">
                {typing} is typing...
              </div>
            )}

            {/* Input Box */}
            <div className="flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full p-3 rounded-full border-2 border-purple-300 text-gray-800 bg-white focus:outline-none focus:border-purple-500"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    socket.emit("typing", "You");
                  }}
                  placeholder="Type a message"
                />
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="absolute right-14 top-3 text-gray-600 hover:text-purple-500 transition-all duration-300"
                >
                  😊
                </button>
                {showEmojiPicker && (
                  <div className="absolute bottom-14 right-0 bg-white p-4 rounded-lg shadow-lg grid grid-cols-6 gap-2">
                    {["😊", "😂", "❤️", "🔥", "🎉", "👍"].map((emoji, i) => (
                      <button
                        key={i}
                        onClick={() => handleEmojiClick(emoji)}
                        className="text-2xl hover:scale-125 transition-all duration-300"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={sendMessage}
                className="ml-3 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full hover:scale-105 transition-all duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sparkling Animation */}
      <style>
        {`
          @keyframes sparkle {
            0% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
          }

          .sparkle {
            position: absolute;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            animation: sparkle 1.5s infinite ease-in-out;
          }

          .sparkle-1 { top: 20%; left: 10%; animation-delay: 0s; }
          .sparkle-2 { top: 40%; left: 30%; animation-delay: 0.5s; }
          .sparkle-3 { top: 60%; left: 50%; animation-delay: 1s; }
          .sparkle-4 { top: 80%; left: 70%; animation-delay: 1.5s; }
        `}
      </style>

      {/* Sparkles */}
      <div className="sparkle sparkle-1"></div>
      <div className="sparkle sparkle-2"></div>
      <div className="sparkle sparkle-3"></div>
      <div className="sparkle sparkle-4"></div>
    </div>
  );
};

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showChoice, setShowChoice] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isGroupChat, setIsGroupChat] = useState(false);

  if (showWelcome) {
    return <WelcomePage onStart={() => { setShowWelcome(false); setShowChoice(true); }} />;
  }

  if (showChoice) {
    return (
      <ChoicePage
        onOneToOne={() => { setShowChoice(false); setShowChat(true); setIsGroupChat(false); }}
        onGroupChat={() => { setShowChoice(false); setShowChat(true); setIsGroupChat(true); }}
        onBack={() => { setShowChoice(false); setShowWelcome(true); }}
      />
    );
  }

  if (showChat) {
    return isGroupChat ? (
      <GroupChatInterface
        onBack={() => { setShowChat(false); setShowChoice(true); }}
      />
    ) : (
      <ChatInterface
        onBack={() => { setShowChat(false); setShowChoice(true); }}
      />
    );
  }

  return null;
};

export default App;