import Header from "./Header";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SelectRoom from "./SelectRoom";

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
        <SelectRoom setRoom={setRoom} />
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
