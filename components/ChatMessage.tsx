const ChatMessage = ({ self, message }: { self: boolean; message: string }) => {
  return (
    <div
      className={`${
        self
          ? "self-end bg-gradient-to-tr from-purple-500 to-blue-600"
          : "bg-gray-700"
      } relative mb-8 w-fit max-w-[60%] rounded-lg px-2 py-2`}
    >
      <img alt="chat image" src={message} />
      <div
        className={`absolute h-16 w-16 ${
          self ? "right-0 -scale-x-100 bg-indigo-500" : "bg-gray-700"
        }`}
        style={{ clipPath: " polygon(31% 0, 0 49%, 100% 0)" }}
      />
    </div>
  );
};

export default ChatMessage;
