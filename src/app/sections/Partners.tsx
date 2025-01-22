"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa6";

export default function Partners() {
  const { t } = useTranslation();

  const partners = [
    {
      id: 1,
      image: "/assets/electrolux.svg",
    },
    {
      id: 2,
      image: "/assets/bosch.svg",
    },
    {
      id: 3,
      image: "/assets/zanussi.svg",
    },
  ];

  return (
    <div id="partners" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-main">
          {t("ourPartners")}
        </h2>
        <p className="text-base font-normal my-6 text-secondary">
          {t("proudlyPartneredWithIndustryLeaders")}
        </p>
        <div className="grid md:grid-cols-2 pb-8">
          <div>
            <div className="mt-8">
              <Image
                src="/assets/partner.svg"
                alt="marketing"
                className="w-full"
                width={1150}
                height={500}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              {partners.map((partner) => (
                <Image
                  key={partner.id}
                  src={partner.image}
                  alt="partner"
                  className="w-2/3 mx-auto"
                  width={1150}
                  height={500}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-base font-semibold my-6 text-main text-center hover:underline cursor-pointer flex justify-center items-center gap-2">
            {<FaPlus />}
            {t("exploreOurPartners")}
          </p>
        </div>
      </div>
    </div>
  );
}
