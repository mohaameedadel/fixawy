import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

interface Comment {
  id: number;
  image: string;
  description: string;
  rating: number;
  name: string;
  location: string;
}
export default function TestimonialCard({ comment }: { comment: Comment }) {
  const totalStars = 5;
  const filledStars = comment.rating;
  const emptyStars = totalStars - filledStars;

  return (
    <div className="shadow-lg p-8 rounded-2xl bg-white">
      <div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/person.png"
            alt="comment"
            width={70}
            height={70}
          />
          <h2 className="font-semibold text-xl text-main">{comment.name}</h2>
        </div>
        <div className="flex items-center gap-2">
          {[...Array(filledStars)].map((_, index) => (
            <Image
              key={index}
              src="/assets/icons/yelloStar.svg"
              alt="star"
              width={20}
              height={20}
            />
          ))}
          {[...Array(emptyStars)].map((_, index) => (
            <Image
              key={index}
              src="/assets/icons/emptyStar.svg"
              alt="star"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
      <p className="font-base text-lg mt-4 text-basic flex items-center gap-2">
        {<IoLocationOutline />}
        {comment.location}
      </p>
      <p className="font-medium text-sm mt-4 text-secondary">
        {comment.description}
      </p>
    </div>
  );
}
