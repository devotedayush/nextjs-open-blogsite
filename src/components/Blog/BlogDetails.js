import { format, parseISO } from "date-fns";
import Link from "next/link";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="flex flex-wrap gap-3 px-0 md:px-0 py-2 items-center justify-center  text-center">
      <span className="rounded-full bg-white/80 dark:bg-dark/80 text-dark dark:text-light px-4 py-1 text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700">
        {format(parseISO(blog.publishedAt), "LLL d, yyyy")}
      </span>
      <span className="rounded-full bg-white/80 dark:bg-dark/80 text-dark dark:text-light px-4 py-1 text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700">
        <ViewCounter slug={blogSlug} />
      </span>
      <span className="rounded-full bg-white/80 dark:bg-dark/80 text-dark dark:text-light px-4 py-1 text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700">
        {blog.readingTime.text}
      </span>
      <Link
        href={`/categories/${blog.tags[0]}`}
        className="rounded-full bg-primary/10 text-primary px-4 py-1 text-sm font-medium shadow-sm border border-primary/20 hover:bg-primary/20 transition"
      >
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
