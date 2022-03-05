import type { NextPage } from "next";
import { useEffect } from "react";
import { io } from "socket.io-client";
import ChatPage from "../components/ChatPage";

const socket: Socket = io("192.168.34.59:4000");


const Home: NextPage = () => {
  

  return (
    <div>
      <ChatPage socket={socket} />
    </div>
  );
};

export default Home;
