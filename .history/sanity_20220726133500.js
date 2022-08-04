import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  apiVersion: "2021-03-25",

  useCdn: process.env.NODE_ENV === "production",
};
