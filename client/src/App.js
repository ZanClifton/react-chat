import "./App.css";
import io from "socket.io-client";
// import Chat from "./components/Chat";
import JoinRoom from "./components/JoinRoom";
const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <JoinRoom socket={socket} setUsername={setUsername} setRoom={setRoom} />
      </div>
    </div>
  );
}

export default App;
