"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { BiSolidOffer } from "react-icons/bi";

export default function Marketing() {
  const { t } = useTranslation();
  return (
    <div className="py-16">
      <div className="container relative">
        <h2 className="text-3xl md:text-5xl font-bold text-main text-center">
          {t("promotionsAndOffers")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="mb-6">
                <BiSolidOffer className="text-[150px] text-red-600 mx-auto" />
              </div>
              <p className="text-base font-semibold text-green-600 mb-4">
                {t("50% off on first service booking this January!")}
              </p>
              <p className="text-base font-semibold text-basic">
                {t(
                  "Free consultation for renovation projects over [X amount]."
                )}
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/assets/marketing.svg"
                alt="marketing"
                className="w-full"
                width={1150}
                height={500}
              />
            </div>
            <div className="buttons flex flex-wrap justify-center gap-4 mt-6">
              <button className="py-3 px-6 rounded-md bg-red-600 font-semibold hover:bg-red-700 duration-200 text-white">
                {t("claimOfferNow")}
              </button>
              <button className="py-3 px-6 rounded-md bg-basic hover:bg-yellow-700 text-main font-semibold duration-200">
                {t("seeAllPromotions")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
