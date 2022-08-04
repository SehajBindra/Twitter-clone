import React from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";

function Tweetbox() {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full object-cover mt-4"
        src="https://links.papareact.com/gll"
        alt=""
      />

      <div>
        <form>
          <input type="text" placeholder="What's Happening? " />
          <div>
            <div>
              {/* icons */}

              <PhotographIcon className="h-5 w-5" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button>Tweet</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tweetbox;
