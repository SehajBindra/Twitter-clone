import React, { useRef, useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function Tweetbox() {
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const ImageInputRef = useRef<HTMLInputElement>(null);

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!ImageInputRef.current?.value) return;
    setImage(ImageInputRef.current.value);
    ImageInputRef.current.value = "";
    setImageUrlBoxIsOpen(false);
  };
  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 rounded-full object-cover mt-4"
        src={session?.user?.image || "https://links.papareact.com/gll"}
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-24 outline-none text-xl placehoder:text-xl"
            type="text"
            placeholder="What's Happening? "
          />
          <div className="flex items-center">
            <div className=" flex-1 flex space-x-2 text-twitter">
              {/* icons */}

              <PhotographIcon
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!input || !session}
              className="bg-twitter px-5 py-2 text-white font-semibold rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>

          {imageUrlBoxIsOpen && (
            <form className="rounded-lg mt-5 flex bg-twitter/80 py-2 px-4">
              <input
                ref={ImageInputRef}
                className=" flex-1 p-2 text-white placeholder:text-white outline-none bg-transparent"
                type="text"
                placeholder="Enter Image Url..."
              />
              <button
                type="submit"
                onClick={addImageToTweet}
                className="font-semibold text-white"
              >
                Add a Image
              </button>
            </form>
          )}

          {image && (
            <img
              className="h-40 rounded-xl w-full mt-10 object-contain  shadow-lg"
              src={image}
              alt=""
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default Tweetbox;
function setImage(value: string) {
  throw new Error("Function not implemented.");
}
