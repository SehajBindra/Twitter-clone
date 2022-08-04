import React from "react";
import { Tweet } from "../typing";
import TimeAgo from "react-time-ago";
interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  return (
    <div>
      <div>
        <img src={tweet.profileImg} alt="" />
        <div>
          <div>
            <p>{tweet.username}</p>
            <p>@{tweet.username.replace(/\s+/g, "").toLowerCase()}</p>

            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
