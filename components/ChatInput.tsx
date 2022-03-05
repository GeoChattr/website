import useSocket from "./SocketContext";
import { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
const randColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const ChatInput = () => {
  const { socket } = useSocket();
  const canvas = useRef(null);
  const [color, setColor] = useState(randColor());
  const getCanvas = async () => {
    console.log(await canvas.current.exportImage("png"));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(randColor());
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    //change later
    <>
      <ReactSketchCanvas
        className="aspect-[5/3] max-w-2xl"
        style={{
          border: "0",
        }}
        canvasColor="#374151"
        strokeColor={color}
        ref={canvas}
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          getCanvas();
        }}
      >
        get canvas
      </button>
      <form
        className="flex items-center gap-4"
        onSubmit={(e: any) => {
          e.preventDefault();
          console.log(e.target.text.value);
          socket.emit("message", e.target.text.value);
        }}
      >
        <input
          className="w-full bg-gray-800 px-4 py-2 text-lg"
          type="text"
          name="text"
        />
        <button
          className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-1.5 text-lg font-medium"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default ChatInput;
