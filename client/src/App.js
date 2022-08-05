import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import io from "socket.io-client";
import Chat from "./components/Chat";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import JoinRoom from "./components/JoinRoom";
const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="App">
      <div className="App-body">
        <Routes>
          <Route
            path="/"
            element={
              <JoinRoom
                socket={socket}
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                setShowChat={setShowChat}
              />
            }
          />
          <Route
            path="/chat"
            element={
              showChat ? (
                <Chat socket={socket} username={username} room={room} />
              ) : null
            }
          />
        </Routes>
        <ToastContainer closeOnClick pauseOnHover />
      </div>
    </div>
  );
}

export default App;
