import Card from "@/components/kokonutui/card";
import { parseImage } from "@/lib/utils";
import type { Blog } from "@/payload-types";

interface BlogProps {
  posts: Blog[];
}

const BlogPage = ({ posts }: BlogProps) => {
  return (
    <section className="section" id="blog">
      <div className="container">
        <h2 className="text-5xl md:text-7xl font-semibold lg:text-8xl font-outfit">
          Our Articles
        </h2>

        <div className="mt-10 md:mt-16 lg:mt-20">
          {posts.map((post) => {
            const img = parseImage(post.heroImage);

            if (!img) {
              return "";
            }

            return (
              <div key={post.slug} className="mb-10">
                <Card
                  title={post.title}
                  subtitle={post.description}
                  image={img.src as string}
                  href={`/blog/${post.slug}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
