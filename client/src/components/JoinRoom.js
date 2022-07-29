const JoinRoom = ({ socket, setUsername, setRoom }) => {
  const joinRooms = (event) => {
    event.preventDefault();
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  console.log(username);
  console.log(room);

  return (
    <div>
      <h1>Chat</h1>
      <form>
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
        <button
          type="submit"
          onClick={(event) => {
            joinRooms(event);
          }}
        >
          Join Room
        </button>
      </form>
    </div>
  );
};

export default JoinRoom;
