import GlobalContext from "../context/GlobalContext";
import ChatCard from "./ChatCard";

const filterData = (searchQuery, chatList) => {
  if (searchQuery === "") {
    return chatList;
  } else {
    return chatList.filter((chat) => {
      if (
        chat.title.toLowerCase().includes(searchQuery) ||
        chat.orderId.includes(searchQuery)
      ) {
        return true;
      }
    });
  }
};

function ChatList() {
  const { chatList, searchQuery } = GlobalContext();

  return (
    <div className="chat-list">
      {chatList?.length > 0 &&
        filterData(searchQuery, chatList).map((chat) => {
          return <ChatCard key={chat.id} {...chat} chat={chat} />;
        })}
    </div>
  );
}

export default ChatList;
