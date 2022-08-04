import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import { signIn, signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col col-span-1 items-center px-4 md:col-span-2 lg:col-span-2 md:items-start">
      <img
        className=" m-2  max-w-fit w-10 h-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      <SidebarRow Icon={HomeIcon} title={"Home"} />
      <SidebarRow Icon={HashtagIcon} title={"Explore"} />
      <SidebarRow Icon={BellIcon} title={"Notifiactions"} />
      <SidebarRow Icon={MailIcon} title={"Messages"} />
      <SidebarRow Icon={BookmarkIcon} title={"Bookmark"} />
      <SidebarRow Icon={CollectionIcon} title={"Lists"} />
      <SidebarRow
        onclick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? "Sign out" : "Sign In"}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title={"More"} />
    </div>
  );
}

export default Sidebar;
