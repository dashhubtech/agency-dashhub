import { createMetadata } from "@/lib/metadata";
import { LoaderIcon } from "lucide-react";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = createMetadata({
  title: "Loading",
  description: "",
  icons: {
    icon: "/favicon/favicon.ico",
  },
});

const Loading = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <LoaderIcon className="animate-spin w-8 h-8" />
    </section>
  );
};

export default Loading;
