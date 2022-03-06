import { User } from "./types/User";
import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const UserContext = createContext({});
export const Context = (props: any) => {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        method: "GET",
        url: "http://localhost:4000/user",
        withCredentials: true,
      });

      console.log(data)

      if (!data) {
        router.push("/");
      } else {
        setUser(data);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};