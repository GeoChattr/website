import useSocket from "./SocketContext";
import { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

type Color = `#${string}`;
const ColorSelect = ({
  color,
  setColor,
  selected,
}: {
  color: Color;
  setColor: Function;
  selected: boolean;
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setColor(color);
      }}
      className={`h-8 w-8 ${selected ? "ring-2 ring-blue-100" : ""}`}
      style={{ background: color }}
    />
  );
};
const colors: Color[] = [
  "#ffffff",
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
];

const ChatInput = () => {
  const { socket } = useSocket();
  const canvas = useRef(null);
  const [color, setColor] = useState("#ffffff");
  const getCanvas = async () => {
    return await canvas.current.exportImage("png");
  };
  return (
    //change later
    <>
      <div className="flex items-start gap-4">
        <ReactSketchCanvas
          className="aspect-[5/3] max-w-2xl"
          style={{
            border: "0",
          }}
          canvasColor="#374151"
          strokeColor={color}
          ref={canvas}
        />
        <div className="grid grid-cols-2 gap-2">
          {colors.map((c) => (
            <ColorSelect
              selected={c === color}
              key={c}
              setColor={setColor}
              color={c}
            />
          ))}
        </div>
      </div>
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
