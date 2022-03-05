const ChatMessage = ({ self, message }: { self: boolean; message: string }) => {
  return (
    <div
      className={`${
        self
          ? "self-end bg-gradient-to-tr from-purple-500 to-blue-600"
          : "bg-gray-700"
      } w-fit max-w-[60%] rounded-lg px-2 py-2`}
    >
      {message}
    </div>
  );
};

export default ChatMessage;
