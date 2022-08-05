import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const JoinRoom = ({
  socket,
  username,
  setUsername,
  room,
  setRoom,
  setShowChat,
}) => {
  const joinRooms = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="joinChatContainer">
      <div>
        <img
          src={logo}
          style={{ textAlign: "center", height: "300px", width: "300px" }}
          alt="Smack Chat Logo"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="room number"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
      </div>
      <div>
        <Link to={`/chat?username=${username}&room=${room}`}>
          <button type="submit" onClick={joinRooms}>
            Join Room
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinRoom;
