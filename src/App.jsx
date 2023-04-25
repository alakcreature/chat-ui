import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import GlobalContext from "./context/GlobalContext";

function App() {
  const { selectedChat } = GlobalContext();

  return (
    <div className={`App ${selectedChat ? 'selected': ''}`}>
      <div className="chat-container">
        <Header />
        <ChatList />
      </div>
      {selectedChat && (
        <div className="chat-window">
          <ChatWindow />
        </div>
      )}
    </div>
  );
}

export default App;
