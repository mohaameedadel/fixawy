"use client";
import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa6";

export default function Portfolio() {
  const { t } = useTranslation();
  const projects = [
    {
      id: 1,
      image: "/assets/blog-1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      image: "/assets/blog-2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 3,
      image: "/assets/blog-3.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-main text-center">
          {t("ourPortfolio")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
        <div>
          <p className="text-base font-semibold my-6 text-main text-center hover:underline cursor-pointer flex justify-center items-center gap-2">
            {<FaPlus />}
            {t("seeMoreProjects")}
          </p>
        </div>
      </div>
    </div>
  );
}
