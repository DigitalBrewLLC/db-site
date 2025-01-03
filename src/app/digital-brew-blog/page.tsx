import BlogCard from "@/components/Cards/BlogCard";
import { getAllPosts } from "@/lib/getAllPosts";

const DigitalBrewBlog = async () => {
  const posts = await getAllPosts();
  console.log(posts);

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-accent pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              href={`/digital-brew-blog/${post.slug}`}
              categories={post.categories}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalBrewBlog;

/*
 * server side component for the main blog page
 *
 * posts are fetched on the server side (at build time), so they can be used in
 * the BlogCard components
 */
