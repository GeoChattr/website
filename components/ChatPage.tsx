import ChatMessage from "./ChatMessage";

const ChatPage = () => {
  return (
    <main className="py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">GeoChattr</h1>
        <div className="flex flex-col bg-gray-900 py-16 px-8 rounded-md">
          <ChatMessage self={false} message={"chat message"} />
          <ChatMessage self={true} message={"hmmmm"} />
        </div>
      </div>
    </main>
  );
};

export default ChatPage;
