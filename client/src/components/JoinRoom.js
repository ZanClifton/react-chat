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

  console.log(username);
  console.log(room);

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="room number"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button type="submit" onClick={joinRooms}>
        Join Room
      </button>
    </div>
  );
};

export default JoinRoom;
