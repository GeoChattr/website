import type { NextPage } from "next";
import ChatPage from "../components/ChatPage";
import Login from "../components/Login";

const Home: NextPage = () => {
  return (
    <main>
      <Login />
    </main>
  );
};

export default Home;
