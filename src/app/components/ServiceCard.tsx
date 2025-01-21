import Image from "next/image";
import React from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  src: string;
  color: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  function color() {
    if (service.color === "red") {
      return "bg-red-500";
    }
    if (service.color === "green") {
      return "bg-green-500";
    }
    if (service.color === "yellow") {
      return "bg-yellow-500";
    }
    if (service.color === "blue") {
      return "bg-blue-500";
    }
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div
        className={`${color()} w-fit mx-auto rounded-xl hover:rounded-full p-4 duration-[5000ms] ease-in-out overflow-hidden`}
      >
        <Image
          src={service.src}
          alt="service"
          className="mx-auto"
          width={65}
          height={65}
        />
      </div>
      <h3 className="text-lg font-semibold my-4 text-main text-center">
        {service.title}
      </h3>
      <p className="text-base font-normal text-secondary text-center">
        {service.description}
      </p>
    </div>
  );
}
