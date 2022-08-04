import React, { useEffect, useState } from "react";
import { Comment, Tweet } from "../typing";
import TimeAgo from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComments } from "../utils/FetchComments";
interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  console.log(comments);
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex  space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1  font-semibold">{tweet.username}</p>
            <p className="hidden text-gray-500 text-sm sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLowerCase()} ·
            </p>

            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
          <p className="pt-1">{tweet.text}</p>

          {tweet.image && (
            <img
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover  shadow-sm"
              src={tweet.image}
              alt=""
            />
          )}
        </div>
      </div>

      <div className="flex mt-5 justify-between">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5" />
          <p>8</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>

      {comments?.length > 0 && (
        <div className=" relative my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
          {comments.map((comment) => (
            <div className="flex space-x-2" key={comment._id}>
              <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
              <img
                className="h-7 w-7 rounded-full object-cover"
                src={comment.profileImg}
                alt=""
              />

              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-semibold">{comment.username}</p>
                  <p className="hidden text-sm text-gray-500 md:inline">
                    @{comment.username.replace(/\s+/g, "").toLowerCase()} ·
                  </p>

                  <TimeAgo
                    className="text-sm text-gray-500"
                    date={tweet._createdAt}
                  />
                </div>

                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tweet;
