import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimomials",

  fields: [
    {
      name: "quote",
      type: "text",
      required: true,
    },
    {
      name: "author_image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "author_name",
      type: "text",
      required: true,
    },
    {
      name: "author_role",
      type: "text",
      required: true,
    },
    {
      name: "company",
      type: "text",
      required: true,
    },
  ],
};
