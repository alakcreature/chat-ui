import { useState } from "react";
import GlobalContext from "../context/GlobalContext";

// title imageURL
function ChatWindow() {
  const { chatList, setChatList, selectedChat } =
    GlobalContext();
  const [value, setvalue] = useState("");

  // console.log(chatList[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      setChatList((prevChatList) => {
        return prevChatList.map((chat) => {
          if (chat.id === selectedChat.id) {
            return {
              ...chat,
              messageList: [
                ...chat.messageList,
                {
                  message: value,
                  messageId: 2,
                  messageType: "text",
                  sender: "USER",
                  timestamp: new Date().toDateString,
                },
              ],
            };
          }else {
            return chat;
          }
        });
      });
      
    }
    setvalue("");
  };


  return (
    <>
      <div className="chatwindow-header">
        <img src={selectedChat.imageURL} />
        <h4>{selectedChat.title}</h4>
      </div>
      <div className="messagewindow-pane">
        {selectedChat?.messageList?.length === 0 ? (
          <div className="message-pane">
            <p className="no-message">Send a message to start chatting</p>
          </div>
        ) : (
          <div className="message-list">
            {selectedChat?.messageList.map((element, ind) => {
              return (
                <p
                  key={ind}
                  className={`${element.sender === "USER" ? "right" : ""}`}
                >
                  <span>{element.message}</span>
                </p>
              );
            })}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} style={{
        display:"flex",
      }}>
        <input
          type="text"
          value={value}
          placeholder="Type a Message"
          onChange={(e) => setvalue(e.target.value)}
        />
        <button>Send</button>
      </form>
    </>
  );
}

export default ChatWindow;
