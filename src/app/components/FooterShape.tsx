"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FooterShape() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  return (
    <div
      className={`w-full absolute bottom-0 right-0 h-[500%] lg:min-h-[1205.643px] z-[-1] ${
        isRtl && "scale-x-[-1]"
      }`}
      style={{
        backgroundImage: "url(/assets/footer_shape.svg)",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
