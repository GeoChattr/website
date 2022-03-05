import { Socket } from "socket.io-client";

const ChatInput = (socket: Socket) => {

  return (
    //change later
    <form className="flex items-center gap-4" onSubmit={(e: any)=>{
      e.preventDefault();
      console.log(e.target.name.value)
      socket.emit("message", e.target.text.value)
    }}>
      <input className="w-full bg-gray-800 px-4 py-2 text-lg" type="text" name="text"/>
      <button
        className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-1.5 text-lg font-medium"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default ChatInput;
