"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  const { t } = useTranslation();

  const blogs = [
    {
      id: 1,
      image: "/assets/blog-1.jpg",
      description: "Lorem ipsum dolor sit amet",
      date: "20 December, 2023",
    },
    {
      id: 2,
      image: "/assets/blog-2.jpg",
      description: "Lorem ipsum dolor sit amet",
      date: "20 December, 2023",
    },
    {
      id: 3,
      image: "/assets/blog-3.jpg",
      description: "Lorem ipsum dolor sit amet",
      date: "20 December, 2023",
    },
  ];

  return (
    <div id="blog" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-main text-center">
          {t("fromTheBlog")}
        </h2>
        <p className="text-base font-normal my-6 text-secondary text-center max-w-[900px] mx-auto">
          {t(
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore."
          )}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
