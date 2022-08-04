import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

function Widgets() {
  return (
    <div>
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2">
        <SearchIcon className="h-5 w-5" />
        <input
          className="bg-transparent flex-1 outline-none"
          type="text"
          placeholder="Search twitter"
        />
      </div>
    </div>
  );
}

export default Widgets;
