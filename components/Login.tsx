import { useContext } from "react";
import { User } from "./types/User";
import { UserContext } from "./UserContext";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const user = useContext(UserContext) as User;

  console.log(user);

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
          <button className="flex items-center justify-center space-x-4 rounded-md bg-gray-800 py-2 px-2 text-xl font-semibold hover:bg-gray-700">
            <FaGoogle className="h-6 w-6" />
            <p>Log in with Google</p>
          </button>
          <button className="flex items-center justify-center space-x-4 rounded-md bg-gray-800 py-2 px-2 text-xl font-semibold hover:bg-gray-700">
            <FaGithub className="h-6 w-6" />
            <p>Log in with GitHub</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
