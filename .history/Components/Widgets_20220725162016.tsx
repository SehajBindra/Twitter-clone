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
    <div className="mt-2 px-2">
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
        screenName="Elon Musk"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
