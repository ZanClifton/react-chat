import Header from "./Header";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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
    } else {
      toast.error("You must enter a username and select a room");
    }
  };

  return (
    <div className="joinChatContainer">
      <div>
        <Header />
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <select
          className="roomSelect"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        >
          <option selected disabled value="">
            Select a room
          </option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
          <option value="SQL">SQL</option>
          <option value="C#">C#</option>
          <option value="Tailwind">Tailwind</option>
          <option value="Drupal">Drupal</option>
          <option value="Strapi">Strapi</option>
          <option value="Django">Django</option>
        </select>
      </div>
      <div>
        <Link
          to={
            username !== "" && room !== ""
              ? `/chat?username=${username}&room=${room}`
              : "/"
          }
        >
          <button type="submit" onClick={joinRooms}>
            Join Room
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinRoom;
