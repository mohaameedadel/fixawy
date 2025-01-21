"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div id="home" className="flex items-center pt-40 pb-16">
      <div className="container grid gap-8 lg:grid-cols-2">
        <div className="flex justify-center flex-col text-white">
          <h2 className="text-4xl md:text-6xl font-bold">{t("fixYourHome")}</h2>
          <p className="text-base font-normal my-6">
            {t("fixawyYourTrustedPartner")}
          </p>
          <div className="buttons flex flex-wrap justify-center gap-4">
            <button className="py-3 px-6 rounded-md bg-main font-semibold hover:bg-white hover:text-main duration-200">
              {t("bookAServiceNow")}
            </button>
            <button className="py-3 px-6 rounded-md bg-transparent border-2 border-white text-white font-semibold hover:bg-main hover:text-white hover:border-main duration-200">
              {t("exploreOurServices")}
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/header_app.png"
            alt="home"
            className="w-full lg:min-w-[700px]"
            width={1300}
            height={1150}
          />
        </div>
      </div>
    </div>
  );
}
