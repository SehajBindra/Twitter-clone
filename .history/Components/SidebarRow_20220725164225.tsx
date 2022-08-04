import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="flex max-w-fit items-center space-x-1 py-3 px-4 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-100 group ">
      <Icon className=" h-7 w-7" />
      <p className=" hidden md:inline-flex group-hover:text-twitter">
        {" "}
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
