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
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setColor(color);
      }}
      className={`h-8 w-8 ${selected ? "ring-2 ring-blue-100" : ""}`}
      style={{ background: color }}
    />
  );
};

const StrokeWidthSelect = ({
  width,
  setStrokeWidth,
  selected,
}: {
  width: number;
  setStrokeWidth: Function;
  selected: boolean;
}) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setStrokeWidth(width);
      }}
    >
      <div
        style={{ width: `${width}px`, height: `${width}px` }}
        className={`rounded-full bg-white ring-2 ring-offset-4 ring-offset-black ${
          selected ? "ring-blue-300" : "ring-white"
        }`}
      />
    </button>
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

const strokeWidths = [5, 8, 11];

const ChatInput = () => {
  const { socket } = useSocket();
  const canvas = useRef(null);
  const [color, setColor] = useState("#ffffff");
  const [strokeWidth, setStrokeWidth] = useState(8);
  const [erasing, setErasing] = useState(false);
  const getCanvas = async () => {
    return await canvas.current.exportImage("png");
  };
  return (
    //change later
    <>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div className="flex-grow">
          <p className="text-gray-400">Draw your image...</p>
          <ReactSketchCanvas
            className="aspect-[5/3] w-full max-w-2xl"
            style={{
              border: "0",
            }}
            canvasColor="#4b5563"
            strokeColor={color}
            strokeWidth={strokeWidth}
            eraserWidth={strokeWidth}
            ref={canvas}
          />
        </div>
        <div className="flex items-start gap-4">
          <div className="mt-1 grid grid-cols-1 gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                canvas.current.eraseMode(false);
                setErasing(false);
              }}
              className={`px-2 ${!erasing ? "ring-2 ring-blue-100" : ""}`}
            >
              pen
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                canvas.current.eraseMode(true);
                setErasing(true);
              }}
              className={`px-2 ${erasing ? "ring-2 ring-blue-100" : ""}`}
            >
              eraser
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                canvas.current.undo();
              }}
              className="px-2"
            >
              undo
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                canvas.current.redo();
              }}
              className="px-2"
            >
              redo
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                canvas.current.clearCanvas();
              }}
              className="px-2"
            >
              clear
            </button>
          </div>
          <div className="mt-1 grid grid-cols-2 gap-2">
            {colors.map((c) => (
              <ColorSelect
                selected={c === color}
                key={c}
                setColor={setColor}
                color={c}
              />
            ))}
          </div>
          <div className="mt-2 grid grid-cols-1 justify-items-center gap-6">
            {strokeWidths.map((w) => (
              <StrokeWidthSelect
                selected={w === strokeWidth}
                key={w}
                setStrokeWidth={setStrokeWidth}
                width={w}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        className="mt-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-1.5 text-lg font-medium hover:from-blue-700 hover:to-purple-600"
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
