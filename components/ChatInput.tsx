const ChatInput = () => {
  return (
    <div className="flex items-center gap-4">
      <input className="w-full bg-gray-800 px-4 py-2 text-lg" type="text" />
      <button
        className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-1.5 text-lg font-medium"
        type="button"
      >
        Submit
      </button>
    </div>
  );
};
export default ChatInput;
