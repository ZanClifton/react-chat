import "./App.css";
import io from "socket.io-client";
import Chat from "./Chat";
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <Chat socket={socket} />
      </div>
    </div>
  );
}

export default App;
