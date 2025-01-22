"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  const { t } = useTranslation();

  const comments = [
    {
      id: 1,
      image: "/assets/person.png",
      description: t(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      ),
      rating: 5,
      name: "John Doe",
      location: "New York",
    },
    {
      id: 2,
      image: "/assets/person.png",
      description: t(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      ),
      rating: 4,
      name: "John Doe",
      location: "New York",
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-main text-center">
          {t("ourTestimonials")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {comments.map((comment) => (
            <TestimonialCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
