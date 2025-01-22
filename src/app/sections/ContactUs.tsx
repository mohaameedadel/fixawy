"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  return (
    <div className="py-16">
      <div className="container">
        <h2 className="text-xl md:text-3xl font-bold text-white text-center">
          {t("stayUpdatedWithFixawy")}
        </h2>
        <form className="mx-auto w-full md:w-1/2 relative mt-8">
          <input
            className="ps-6 py-5 bg-white rounded-md focus:outline-none w-full"
            type="email"
            name="email"
            placeholder={t("enterEmail")}
          />
          <button
            className={`absolute top-1/2 -translate-y-1/2 font-semibold ${
              isRtl ? "left-2" : "right-2"
            }  bg-main text-white py-3 px-4 rounded-md`}
            type="submit"
          >
            {t("subscribe")}
          </button>
        </form>
      </div>
    </div>
  );
}
