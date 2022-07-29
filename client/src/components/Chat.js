import { useState, useEffect } from "react";

const Chat = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message !== "") {
      const messageData = {
        room: room,
        author: username,
        text: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessages((list) => [...list, messageData]);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, [socket]);

  console.log(messages);

  return (
    <div className="chat">
      <h2>Room: {room}</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <div className="time">{message.time}</div>
            <div className="author">{message.author}</div>
            <div className="message">{message.text}</div>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          sendMessage(event);
        }}
      >
        <input
          type="text"
          placeholder="Enter a message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
