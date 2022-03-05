import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const ChatPage = () => {
  return (
    <main className="py-16 px-8">
      <div className="mx-auto max-w-5xl space-y-4">
        <h1 className="text-4xl font-bold">GeoChattr</h1>
        <div className="flex flex-col gap-1 rounded-md bg-gray-900 py-16 px-8">
          <ChatMessage self={false} message={"chat message"} />
          <ChatMessage self={true} message={"hmmmm"} />
        </div>
        <ChatInput />
      </div>
    </main>
  );
};

export default ChatPage;
