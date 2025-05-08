"use server";

import { payloadServer } from "./lib/payload";

export const getBlogPosts = async () => {
  const payload = await payloadServer();

  const posts = await payload.find({
    collection: "blog",
  });

  return posts;
};
