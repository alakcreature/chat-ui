import GlobalContext from "../context/GlobalContext";
import date from "../helpers/date";

// imageURL title orderId last from messageList
function ChatCard({
  imageURL,
  title,
  orderId,
  messageList,
  latestMessageTimestamp,
  id,
  chat,
  
}) {
  const { selectedChat, setselectedChat } = GlobalContext();

  return (
    <div
      className={`chat-card ${selectedChat && selectedChat.id === id ? "selected" : ""}`}
      onClick={() => {
        setselectedChat(chat);
      }}
    >
      <div className="details">
        <img src={imageURL} alt={title} />
        <div className="info">
          <h1>{title}</h1>
          <h1>Order {orderId}</h1>
          {messageList.length > 0 && (
            <p>{messageList[messageList.length - 1].message}</p>
          )}
        </div>
      </div>
      <h4>{date(latestMessageTimestamp)}</h4>
    </div>
  );
}

export default ChatCard;
