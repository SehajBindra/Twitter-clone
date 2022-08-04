import React from "react";
import { Tweet } from "../typing";
interface Props {
  tweet: Tweet[];
}

function Tweet({ tweet }: Props) {
  return <div>Tweet</div>;
}

export default Tweet;
