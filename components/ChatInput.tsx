import useSocket from "./SocketContext";
import { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
const ChatInput = () => {
  const { socket } = useSocket();
  const canvas = useRef(null);
  const getCanvas = async () => {
    return await canvas.current.exportImage("png");
  };
  return (
    //change later
    <>
      <ReactSketchCanvas
        className="aspect-[5/3] max-w-2xl"
        style={{
          border: "0",
        }}
        canvasColor="#374151"
        strokeColor={"white"}
        ref={canvas}
      />
      <button
        className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-1.5 text-lg font-medium"
        type="button"
        onClick={async (e) => {
          e.preventDefault();
          const image = await getCanvas();
          console.log(image);
          socket.emit("message", image);
          canvas.current.resetCanvas();
        }}
      >
        Submit
      </button>
    </>
  );
};
export default ChatInput;
