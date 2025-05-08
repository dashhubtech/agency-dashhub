import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        // @ts-expect-error - TS doesn't know about the `test` property
        const fileLoaderRule = config.module.rules.find((rule) =>
          rule.test?.test?.(".svg"),
        );

        config.module.rules.push(
          // Reapply the existing rule, but only for svg imports ending in ?url
          {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
          },
          // Convert all other *.svg imports to React components
          {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
            use: ["@svgr/webpack"],
          },
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
      },
      experimental: {
        turbo: {
          rules: {
            "*.svg": {
              loaders: ["@svgr/webpack"],
              as: "*.js",
            },
          },
        },
      },
      typescript: { ignoreBuildErrors: true },
      eslint: { ignoreDuringBuilds: true }
};

export default withPayload(nextConfig);
