import { getPostBySlug } from "@/lib/getPostBySlug";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const DynamicBlogPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-text-secondary mb-2">{post.description}</p>
        <time className="text-sm text-text-secondary">
          {new Date(post.date).toLocaleDateString()}
        </time>
      </header>

      <div className="prose prose-lg dark:prose-invert">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
};

export default DynamicBlogPage;

/*
 * server side component for dynamic routes
 *
 * The dynamic blog post page uses fs (Node.js file system module) via a
 * utility function like getPostBySlug
 * to fetch content for individual blog posts from MDX or Markdown files.
 *
 * fs can only run in a Node.js environment, which is available server-side,
 * not in the browser.
 *
 * post is fetched on the server side (at build time), so it can be used in
 * the MDXRemote component
 */
