"use client"
import React, { useState } from "react";
import SearchIcon from "./components/icons/SearchIcon";
import FormSearchUser from "./components/FormSearchUser";
import UserCardInfo from "./components/UserCardInfo";


const Home = () => {

  const [user, setUser] = useState< User | null>(null);
  const [error, setError] = useState<string | null>(null)

  const getUser = async (username: string) => {
    const res =  await fetch(`https://api.github.com/users/${username}`);
    if(!res.ok){
      setUser(null)
      setError("User not found")
      return
    }
    setUser(await res.json());
    setError(null)
   }

  return (
    <>
      <FormSearchUser getUser={getUser}/>
      {
        user && <UserCardInfo user={user} />
      }
      {
        error && <p className="rounded-lg bg-red-500 p-4 text-white">{error}</p>
      }
    </>
  );
};

export default Home;
