import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
function Widgets() {
  return (
    <div className="col-span-2 mt-2 px-2 hidden md:inline">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className="bg-transparent flex-1 outline-none"
          type="text"
          placeholder="Search twitter"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="diljitdosanjh"
        data-tweet-limit="3"
        options={{ height: 1000 }}
      />
      {/* <TwitterFollowButton screenName={"Stranger_Things"} /> */}

      {/* <TwitterTimelineEmbed
        sourceType="profile"
        screenName="GameOfThrones"
        options={{ height: 1000 }}
      />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Marvel"
        options={{ height: 1000 }}
      /> */}
    </div>
  );
}

export default Widgets;
