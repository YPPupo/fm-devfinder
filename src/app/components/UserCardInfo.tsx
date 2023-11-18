import React from "react";
import GithubIcon from "./icons/GithubIcon";
import LocationIcon from "./icons/LocationIcon";
import LinkIcon from "./icons/LinkIcon";
import TwitterIcon from "./icons/TwitterIcon";
import BuildingIcon from "./icons/BuildingIcon";
import Image from "next/image";

interface Props {
  user: User;
}

function validateURL(url: string) {
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  return url;
}

const UserCardInfo = ({ user }: Props) => {
  return (
    <article className="grid-areas dark:bg-sky-900 bg-blue-100 shadow-md dark:shadow-none p-4 rounded-xl dark:text-white">
      <div className="section-logo overflow-hidden bg-gray-200 grid place-content-center rounded-full w-24 h-24 mr-3 lg:mx-auto">
        {user.avatar_url ? (
          <Image className="rounded-full" src={user.avatar_url} alt={`profile user image from ${user.name}`} width={100} height={100} />
        ) : (
          <GithubIcon className="relative top-2 w-full h-full" />
        )}
      </div>
      <div className="section-title">
        <h2 className="font-bold text-3xl">{user.name}</h2>
        <p>@{user.login}</p>
      </div>
      <p className="section-date lg:text-right">
        {new Date(user.created_at || "").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="section-description mt-8 leading-loose">
        {user.bio || "Bio no available"}
      </p>
      <div className="section-number flex justify-around shadow-md bg-sky-100 dark:shadow-none dark:bg-blue-950 mt-4 p-8 rounded-xl text-center">
        <article>
          <p>Repos</p>
          <p className="font-bold text-xl">{user.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="font-bold text-xl">{user.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="font-bold text-xl">{user.following}</p>
        </article>
      </div>

      <div className="section-social md:grid md:grid-cols-2 mt-4 space-y-3">
        <article className="flex items-center space-x-2">
          <i>
            <LocationIcon className="dark:fill-white fill-blue-950" width={"1rem"} />
          </i>
          <span>{user.location || "Not available"}</span>
        </article>
        <article className="flex items-center space-x-2">
          <i>
            <LinkIcon className="dark:fill-white fill-blue-950" width={"1rem"} />
          </i>
          <a
            className="truncate"
            target="blank"
            href={user.blog ? validateURL(user.blog) : "#"}
          >
            {user.blog || "Not available"}
          </a>
        </article>
        <article className="flex items-center space-x-2">
          <i>
            <TwitterIcon className="dark:fill-white fill-blue-950" width={"1rem"} />
          </i>
          <a
            target="_blank"
            href={
              user.twitter_username
                ? `https://www.twitter.com/${user.twitter_username}`
                : "#"
            }
          >
            {user.twitter_username || "Not available"}
          </a>
        </article>
        <article className="flex items-center space-x-2">
          <i>
            <BuildingIcon className="dark:fill-white fill-blue-950" width={"1rem"} />
          </i>
          <span>{user.company || "Not available"}</span>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
