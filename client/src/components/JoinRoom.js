import logo from "../assets/logo.png";
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
      toast.error("You must enter a username and room number");
    }
  };

  return (
    <div className="joinChatContainer">
      <div>
        <img
          src={logo}
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
        />
        <div>
          <input
            type="text"
            placeholder="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
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
