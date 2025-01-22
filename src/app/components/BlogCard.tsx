import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

interface Blog {
  id: number;
  image: string;
  description: string;
  date: string;
}
export default function BlogCard({ blog }: { blog: Blog }) {
  const { t } = useTranslation();
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
      <Image
        src={blog.image}
        alt="project"
        className="w-full"
        width={1150}
        height={1150}
      />
      <div className="p-6">
        <p className="text-base font-semibold text-secondary mb-4">
          {blog.date}
        </p>
        <p className="text-xl font-semibold text-main mb-4">
          {blog.description}
        </p>
        <button className="text-sm md:text-base py-2 px-4 rounded-md bg-transparent border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-200">
          {t("readMore")}
        </button>
      </div>
    </div>
  );
}
