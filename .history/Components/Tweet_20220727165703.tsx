import React from "react";
import { Tweet } from "../typing";
import TimeAgo from "react-timeago";
interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  return (
    <div>
      <div className="flex items-center space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1  font-semibold">{tweet.username}</p>
            <p className="hidden text-gray-500 text-sm sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLowerCase()}
            </p>

            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
          <p>{tweet.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
