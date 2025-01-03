import { getAllPosts } from "@/lib/getAllPosts";

export async function generateStaticParams() {
  const posts = getAllPosts(); // Fetch all posts

  return posts.map((post) => ({
    slug: post.slug, // Generate route params for each post
  }));
}
