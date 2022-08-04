export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
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

    {
      name: "tweet",
      title: "Tweet",
      type: "reference",
      description: "refrence the tweet the comment is associated to :",

      to: {
        type: "tweet",
      },
    },
  ],
};
