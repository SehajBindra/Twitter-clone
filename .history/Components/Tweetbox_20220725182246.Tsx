import React from "react";

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
            <div>{/* icons */}</div>
            <button>Tweet</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tweetbox;
