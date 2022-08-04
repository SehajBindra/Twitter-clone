import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

function Widgets() {
  return (
    <div className="flex items-center">
      {/* Search */}
      <div>
        <SearchIcon className="h-6 w-6" />
        <input type="text" placeholder="Search twitter" />
      </div>
    </div>
  );
}

export default Widgets;
