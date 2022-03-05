import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import useSocket from "./SocketContext";

interface Message {
  msg: string;
  self: boolean;
}

const ChatPage = () => {
  const { socket } = useSocket();
  const [msgs, setMsgs] = useState<Message[]>([]);
  useEffect(() => {
    if (socket === null) return;
    socket.on("connected", () => {
      //react toastify this later
      console.log("Connected");

      // socket.id
    }); // x8WIv7-mJelg7on_ALbx});

    // socket.emit("newUser", "bob")

    socket.on("message", (msg) => {
      console.log(msg);
      let curr_msgs = [...msgs, { msg: msg.msg, self: msg.id === socket.id }];
      setMsgs(curr_msgs);
    });
  }, [socket, msgs, setMsgs]);
  return (
    <div className="py-16 px-8">
      <div className="mx-auto max-w-5xl space-y-4">
        <h1 className="text-4xl font-bold">GeoChattr</h1>
        <div className="flex flex-col gap-1 rounded-md bg-gray-900 py-16 px-8">
          {msgs.map((msg, i) => {
            return <ChatMessage key={i} self={msg.self} message={msg.msg} />;
          })}
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
