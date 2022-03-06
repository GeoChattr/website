import { useState } from "react";

const Login = ({ onStart }: { onStart: Function }) => {
  const [username, setUsername] = useState("");
  const start = () => {
    if (!username.length) {
      return;
    }
    localStorage.setItem("username", username);
    onStart(username);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="rounded-lg bg-gray-900 px-8 py-6">
        <h1 className="text-2xl font-semibold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold text-transparent">
            GeoChattr
          </span>
        </h1>
        <p className="text-gray-300">
          Chat with people in your area through drawings.
        </p>
        <div className="mt-4 flex w-full flex-col items-stretch gap-y-4">
          <label>
            <p className="ml-1 text-gray-400">Username</p>
            <input
              className="mt-1 w-full border-gray-700 bg-gray-800 px-2 py-2"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <button
            disabled={username.length === 0}
            className="rounded bg-gradient-to-r from-blue-500 to-purple-500 py-1.5 px-2 text-sm font-semibold uppercase hover:from-blue-600 hover:to-purple-600 disabled:saturate-50"
            onClick={(e) => {
              e.preventDefault();
              start();
            }}
          >
            Start Chatting!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
