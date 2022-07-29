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
      <h1>Smack Chat</h1>
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
        <button type="submit" onClick={joinRooms}>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default JoinRoom;
