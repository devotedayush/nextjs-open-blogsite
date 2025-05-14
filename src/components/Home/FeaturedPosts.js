import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  // 1. Get featured blogs
  const featuredBlogs = blogs.filter(blog => blog.featured);

  // 2. Fallback: If not enough featured, use latest blogs
  const sortedBlogs = sortBlogs(blogs);
  const displayBlogs = featuredBlogs.length >= 3
    ? featuredBlogs
    : sortedBlogs.slice(0, 3);

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Posts
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
        {displayBlogs[0] && (
          <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
            <BlogLayoutOne blog={displayBlogs[0]} />
          </article>
        )}
        {displayBlogs[1] && (
          <article className="col-span-2 sm:col-span-1 row-span-1 relative">
            <BlogLayoutTwo blog={displayBlogs[1]} />
          </article>
        )}
        {displayBlogs[2] && (
          <article className="col-span-2 sm:col-span-1 row-span-1 relative">
            <BlogLayoutTwo blog={displayBlogs[2]} />
          </article>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;
