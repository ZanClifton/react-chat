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
    <div>
      <input
        className="username"
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        className="room"
        type="text"
        placeholder="room number"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button className="room-button" type="submit" onClick={joinRooms}>
        Join Room
      </button>
    </div>
  );
};

export default JoinRoom;
