import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

function Widgets() {
  return (
    <div>
      {/* Search */}
      <div className="flex items-center">
        <SearchIcon className="h-5 w-5" />
        <input type="text" placeholder="Search twitter" />
      </div>
    </div>
  );
}

export default Widgets;
