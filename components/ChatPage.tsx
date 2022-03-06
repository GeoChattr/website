import { useEffect, useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import useSocket from "./SocketContext";

interface Message {
  msg: {
    image: string;
    username: string;
  };
  self: boolean;
}

const ChatPage = ({ username }: { username: string }) => {
  const { socket } = useSocket();
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [roomName, setRoomName] = useState<string>("Mountain View");
  const [inputUser, setInputUser] = useState(username);
  const [saved, setSaved] = useState(true);
  const [savedUser, setSavedUser] = useState(username);
  useEffect(() => {
    if (socket === null) return;
    socket.on("connected", () => {
      //react toastify this later
      console.log("Connected");
    });

    // socket.on("locationUpdate", (location) => {
    //   setRoomName(location.city);
    // });

    socket.on("message", (msg) => {
      console.log(msg);
      let curr_msgs = [...msgs, { msg: msg.msg, self: msg.id === socket.id }];
      setMsgs(curr_msgs);
    });
  }, [socket, msgs, setMsgs]);
  return (
    <div className="py-16 px-8">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">GeoChattr</h1>
            <p className="font-mono">Room / {roomName}</p>
          </div>
          <div className="flex items-center gap-2">
            Logged in as{" "}
            <input
              className={`border-b-2 bg-transparent focus-visible:outline-none ${
                saved ? "border-white" : "border-yellow-300"
              }`}
              type="text"
              value={inputUser}
              onChange={(e) => {
                setInputUser(e.target.value);
                setSaved(e.target.value === savedUser);
              }}
            />
            <button
              className="bg-gradient-to-tr from-blue-800 to-purple-800 px-2 py-1"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("username", inputUser);
                setSaved(true);
                setSavedUser(inputUser);
              }}
            >
              Save
            </button>
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>
        </div>
        <div className="flex flex-col gap-1 rounded-md bg-gray-900 py-16 px-8">
          {msgs.map((msg, i) => {
            return <ChatMessage key={i} self={msg.self} message={msg.msg} />;
          })}
          <ChatInput username={savedUser} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
