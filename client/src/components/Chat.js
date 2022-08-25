import { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Header from "./Header";
import { Link } from "react-router-dom";

const Chat = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);

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
          (new Date(Date.now()).getMinutes() < 10
            ? "0"
            : "" + new Date(Date.now()).getMinutes()),
      };

      await socket.emit("send_message", messageData);
      setMessageHistory((list) => [...list, messageData]);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("output-messages", (data) => {
      if (data.length) {
        data.forEach((message) => {
          setMessageHistory((list) => [...list, message]);
          console.log("message received");
        });
      }
    });
  }, [room]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageHistory((messageHistory) => [...messageHistory, data]);
    });
  }, [socket]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Header />
      </div>
      <Link to={`/`}>
        <button
          onClick={() => {
            socket.emit("leave_room", room);
          }}
        >
          Leave {room} Room
        </button>
      </Link>
      <div className="chat-window">
        <div className="chat-header">
          <div>
            <h2>{room}</h2>
          </div>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            <ul>
              {messageHistory.map((message, index) => (
                <div
                  key={index}
                  className="message"
                  id={username === message.author ? "you" : "other"}
                >
                  <li>
                    <div className="message-content">{message.text}</div>
                    <div className="message-meta">
                      <p id="time">{message.time}</p>
                      <p id="author">{message.author}</p>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </ScrollToBottom>
        </div>

        <form
          onSubmit={(event) => {
            sendMessage(event);
          }}
          className="chat-footer"
        >
          <textarea
            className="chat-input"
            type="text"
            placeholder="Enter a message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button>&#9658;</button>
        </form>
      </div>
    </>
  );
};

export default Chat;
