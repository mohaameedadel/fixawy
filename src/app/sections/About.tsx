"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div id="about" className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="image">
            <Image
              src="/assets/about_us.svg"
              alt="about us"
              className="w-full"
              width={1150}
              height={1150}
            />
          </div>
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-main">
                {t("aboutUs")}
              </h2>
              <p className="text-base font-normal my-6 text-secondary">
                {t("aboutFixawy.fixawyIsFirstTechnologyDrivenPlatform")}
              </p>
              <p className="text-base font-normal my-6 text-secondary">
                {t("aboutFixawy.fixawyEstablished")}
              </p>
              <p className="text-base font-normal my-6 text-secondary">
                {t("aboutFixawy.fixawyIsTheIndustryLeader")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
