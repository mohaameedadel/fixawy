"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function HeaderShape() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  return (
    <div
      className={`w-full absolute -top-56 left-0 min-h-[1205.643px] z-[-1] ${
        isRtl && "scale-x-[-1]"
      }`}
      style={{
        backgroundImage: "url(/assets/header_shape.svg)",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
