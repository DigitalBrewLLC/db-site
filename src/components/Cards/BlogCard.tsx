import { BlogCategory } from "@/common/types";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  href: string;
  categories: BlogCategory[];
}

const BlogCard = ({
  title,
  description,
  date,
  href,
  categories,
}: BlogCardProps) => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={date} className="text-accent">
          {date}
        </time>
        {categories.map((category) => (
          <a
            key={category}
            href={href}
            className="relative z-10 rounded-full px-3 py-1.5 font-medium hover:bg-accent/10"
          >
            {category}
          </a>
        ))}
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg/6 font-semibold  group-hover:text-accent">
          <a href={href}>
            <span className="absolute inset-0" />
            {title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 ">{description}</p>
      </div>
    </article>
  );
};

export default BlogCard;
