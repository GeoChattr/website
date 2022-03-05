const ChatMessage = ({ self, message }: { self: boolean; message: string }) => {
  return (
    <div
      className={`${
        self
          ? "bg-gradient-to-tr from-purple-500 to-blue-600 self-end"
          : "bg-gray-700"
      } px-2 py-2 rounded-lg max-w-[60%] w-fit`}
    >
      {message}
    </div>
  );
};

export default ChatMessage;
