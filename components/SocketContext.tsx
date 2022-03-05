import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SocketContext = createContext<{ socket: Socket; setSocket: Function }>({
  socket: null,
  setSocket: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState<Socket>(null);
  useEffect(() => {
    const s = io(process.env.NEXT_PUBLIC_API_URL);
    setSocket(s);
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
