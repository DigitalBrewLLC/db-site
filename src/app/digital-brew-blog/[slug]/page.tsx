import { getPostBySlug } from "@/lib/getPostBySlug";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }> & { slug: string };
}

const DynamicBlogPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <article className="mx-auto max-w-3xl px-6 py-24">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-text-secondary mb-2">{post.description}</p>
          <time className="text-sm text-text-secondary">{post.date}</time>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
};

export default DynamicBlogPage;
