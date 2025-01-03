import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/common/types";
import { serialize } from "next-mdx-remote/serialize";
export const POSTS_DIRECTORY = path.join(process.cwd(), "blog-content");

/**
 * Fetch a single blog post by slug.
 * @param slug - The slug of the post (e.g., 'my-first-post')
 * @returns The post metadata and content as BlogPost, or `null` if not found.
 *
 *  used for the dynamic [slug] blog page
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Add validation to ensure slug is defined
  if (!slug) {
    console.error("No slug provided to Dynamic Blog Page");
    return null;
  }

  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);

  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    console.error(`Post not found: SLUG: ${slug} - FULL PATH: ${fullPath}`);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // serializing the content to be used in the server side blog page

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    categories: data.categories || [],
    content,
  };
}
