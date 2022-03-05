import { useEffect } from "react";
import { Socket } from "socket.io-client";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const ChatPage = (socket:Socket) => {

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Bruh moment", socket.id);
    }); // x8WIv7-mJelg7on_ALbx});

    
  }, []);
  return (
    <main className="py-16 px-8">
      <div className="mx-auto max-w-5xl space-y-4">
        <h1 className="text-4xl font-bold">GeoChattr</h1>
        <div className="flex flex-col gap-1 rounded-md bg-gray-900 py-16 px-8">
          <ChatMessage self={false} message={"chat message"} />
          <ChatMessage self={true} message={"hmmmm"} />
        </div>
        <ChatInput socket={socket}/>
      </div>
    </main>
  );
};

export default ChatPage;
