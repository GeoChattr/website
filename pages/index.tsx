import type { NextPage } from "next";
import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const Home: NextPage = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Bruh moment", socket.id);
    }); // x8WIv7-mJelg7on_ALbx});
  }, []);

  return <div>GeoChattr</div>;
};

export default Home;
