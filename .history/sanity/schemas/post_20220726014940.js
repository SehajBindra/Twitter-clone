export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in Tweet",
      type: "string",
    },
    {
      name: "blockTweet",
      title: "Block Tweet",
      type: "boolean",
      description: "ADMIN controls: Toogle if Tweet Seemed inappropriate",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },

    {
      name: "profileImg",
      title: "Profile Image",
      type: "string",
    },

    {
      name: "image",
      title: "Tweet Image",
      type: "string",
    },
  ],
};
