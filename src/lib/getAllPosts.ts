import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/info-maps/blog-types";

export const POSTS_DIRECTORY = path.join(process.cwd(), "blog-content");

/**
 * Reads all Markdown/MDX files in the `/blog-content/` directory
 * and returns their metadata and slug.
 *
 * this is used for the main blog page
 */
export const getAllPosts = (): BlogPost[] => {
  // Read all file names in the content directory
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  // Filter and map through MDX files
  const posts = fileNames
    // Only process .mdx files
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Get slug by removing the extension
      const slug = fileName.replace(/\.mdx$/, "");
      // Get full path to the file
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      // Read the file contents
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parse the file for metadata using gray-matter
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        content,
        categories: data.categories || [],
      } as BlogPost;
    });

  // Return posts sorted by date (newest first)
  const orderedPosts = (a: BlogPost, b: BlogPost): number => {
    if (!a.date || !b.date) {
      throw new Error("Post is missing date metadata");
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  };

  return posts.sort(orderedPosts);
};
