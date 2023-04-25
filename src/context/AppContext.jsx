import { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

export default function AppContext({ children }) {
  const [chatList, setChatList] = useState([]);
  const [selectedChat, setselectedChat] = useState(null);
  const [searchQuery, setsearchQuery] = useState("");

  console.log(selectedChat);
  const fetchChats = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
    );
    const data = await res.json();
    setChatList(data);
  };

  const changeSelectedChat = () => {
    chatList.forEach((chat) => {
      if (chat.id === selectedChat.id) {
        setselectedChat(chat);
      }
    });
  };

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    if (selectedChat) {
      changeSelectedChat();
      if(!selectedChat){
        setselectedChat(null);
      }
    }
  }, [chatList]);

  return (
    <ChatContext.Provider
      value={{
        chatList,
        setChatList,
        selectedChat,
        setselectedChat,
        searchQuery,
        setsearchQuery,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
