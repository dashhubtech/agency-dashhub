import type { CollectionConfig } from "payload";

export const CaseStudy: CollectionConfig = {
  slug: "case-studies",

  fields: [
    {
      name: "case-study",
      type: "text",
      required: true,
    },
    {
      name: "website",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "what-we-did",
      type: "richText",
      required: true,
    },
  ],
};
