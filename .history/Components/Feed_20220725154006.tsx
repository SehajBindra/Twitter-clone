import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

function Feed() {
  return (
    <div>
      <div className="flex">
        <h1 className="p-5 pb-0 text-xl font-semibold">Home</h1>
        <RefreshIcon className=" mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
    </div>
  );
}

export default Feed;
