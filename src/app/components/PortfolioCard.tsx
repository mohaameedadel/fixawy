import Image from "next/image";
import React from "react";

interface Project {
  id: number;
  image: string;
  description: string;
}
export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
      <Image
        src={project.image}
        alt="project"
        className="w-full"
        width={1150}
        height={1150}
      />
      <p className="p-4 text-base font-semibold text-main text-center">
        {project.description}
      </p>
    </div>
  );
}
