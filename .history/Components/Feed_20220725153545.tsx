import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

function Feed() {
  return (
    <div>
      <div>
        <h1>Home</h1>
        <RefreshIcon className=" mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter" />
      </div>
    </div>
  );
}

export default Feed;
