import { BlogCategory } from "@/common/types";
import BlogCard from "@/components/Cards/BlogCard";
import ComingSoon from "@/components/Layout/ComingSoon";

const posts = [
  {
    title: "How to improve your SEO",
    description: "Learn how to improve your SEO",
    date: "2024-01-01",
    href: "#",
    categories: [BlogCategory.SEO],
  },
  {
    title: "How to improve your accessibility",
    description: "Learn how to improve your accessibility",
    date: "2024-01-01",
    href: "#",
    categories: [BlogCategory.Accessibility],
  },
  {
    title: "How to improve your development",
    description: "Learn how to improve your development",
    date: "2024-01-01",
    href: "#",
    categories: [BlogCategory.Development],
  },
  {
    title: "How to improve your SEO, coding skills and more",
    description: "Learn how to improve your SEO, coding skills and more",
    date: "2024-01-01",
    href: "#",
    categories: [BlogCategory.SEO, BlogCategory.Development],
  },
  // More posts...
];

const DigitalBrewBlog = () => {
  const notYet = true;
  return (
    <>
      {notYet ? (
        <ComingSoon />
      ) : (
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
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  href={post.href}
                  categories={post.categories}
                  key={post.title}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DigitalBrewBlog;
