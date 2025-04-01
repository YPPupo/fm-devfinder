import React from "react";
import SearchIcon from "./icons/SearchIcon";

interface Props {
  getUser: (username: string) => Promise<void>;
}

const FormSearchUser = ({ getUser }: Props) => {
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-center gap-2  dark:bg-sky-900 bg-blue-100 dark:shadow-none shadow-md p-4 rounded-xl mb-6"
    >
      <span className="min-w-[20px]">
        <SearchIcon className="fill-sky-400" />
      </span>
      <input
        name="username"
        className="flex-1 h-14 p-2 rounded-lg bg-blue-100 dark:bg-transparent dark:text-white dark:placeholder:text-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
        type="text"
        placeholder="Search Github username..."
      />
      <button className="bg-sky-400 rounded-lg p-4 text-white font-bold">
        Search
      </button>
    </form>
  );
};

export default FormSearchUser;
