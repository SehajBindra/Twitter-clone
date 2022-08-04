import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onclick?: () => {};
}

function SidebarRow({ Icon, title, onclick }: Props) {
  return (
    <div
      onClick={() => onclick?.()}
      className="flex max-w-fit items-center space-x-2 py-3 px-4 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-100 group "
    >
      <Icon className=" h-7 w-7" />
      <p className=" text-base text-left hidden md:inline-flex  lg:text-xl group-hover:text-twitter">
        {" "}
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
