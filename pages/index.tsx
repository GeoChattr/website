import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ChatPage from "../components/ChatPage";
import Login from "../components/Login";

const Home: NextPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setShowChat(true);
    }
  }, []);
  return (
    <main>
      {showChat ? (
        <ChatPage username={username} />
      ) : (
        <Login
          onStart={(user) => {
            setShowChat(true);
            setUsername(user);
          }}
        />
      )}
    </main>
  );
};

export default Home;
