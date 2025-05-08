"use server";

import configPromise from "@payload-config";
import { getPayload } from "payload";

export const payloadServer = async () => {
  return await getPayload({
    config: configPromise,
  });
};
