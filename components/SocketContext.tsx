import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { json } from "stream/consumers";

const SocketContext = createContext<{ socket: Socket; setSocket: Function }>({
  socket: null,
  setSocket: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState<Socket>(null);
  useEffect(() => {
    axios.get(`https://ifconfig.me/ip`).then((res) => {
      const s = io(process.env.NEXT_PUBLIC_API_URL);
      console.log(res.data);
      s.emit("locationRoomUpdate", res.data);
      setSocket(s);
    });
  }, []);
  return (
    //@ts-ignore
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => useContext(SocketContext);

export default useSocket;
