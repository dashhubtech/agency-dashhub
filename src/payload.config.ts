// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres"; // database-adapter-import
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { seoPlugin } from "@payloadcms/plugin-seo";

import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "node:path";
import { buildConfig } from "payload";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

import { Media } from "./collections/Media";
import { CaseStudy } from "./collections/Case-Study";
import { Portfolio } from "./collections/Portfolio";
import { Testimonials } from "./collections/Testimonials";
import { Users } from "./collections/Users";
import { Blog as Post } from "./collections/Blog";
import { FAQ } from "./collections/FAQ";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { getServerSideURL } from "./lib/getUrl";
import { Blog } from "./payload-types";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const generateTitle: GenerateTitle<Blog> = ({ doc }) => {
  return doc?.title ? `${doc.title} | DashHub` : "DashHub";
};

const generateURL: GenerateURL<Blog> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
      autoGenerate: true,
    },
    user: Users.slug,
    suppressHydrationWarning: true,
  },

  collections: [Users, Media, CaseStudy, Portfolio, Testimonials, Post, FAQ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  // database-adapter-config-start
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: "public-read",
      },
    }),
    seoPlugin({
      generateTitle,
      generateURL,
    }),
  ],
});
