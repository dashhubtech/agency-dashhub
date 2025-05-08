import type { CollectionConfig } from "payload";

export const Portfolio: CollectionConfig = {
  slug: "portfolio",

  fields: [
    {
      name: "portfolio_img",
      type: "upload",
      relationTo: "media",
      required: true,
    },

    {
      name: "portfolio_name",
      type: "text",
      required: true,
    },
  ],
};
