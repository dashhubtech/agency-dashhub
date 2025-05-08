import Blog from "@/sections/Blog";
import CTA from "@/sections/CTA";
import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";

import About from "@/sections/About";

// import { getBlogPosts } from "@/action";

export default async function Home() {
  // const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <About />

      {/* <Blog posts={posts.docs} /> */}

      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}
