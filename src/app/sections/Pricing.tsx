"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../components/PricingCard";
import { PiCoffeeLight } from "react-icons/pi";
import { LuCrown } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";

export default function Pricing() {
  const { t } = useTranslation();

  const pricing = [
    {
      title: "startup",
      price: "$0.0",
      description: t("Lorem ipsum dolor sit."),
      icon: <PiCoffeeLight className="mx-auto text-5xl" />,
    },
    {
      title: "standard",
      price: "$15.00",
      description: t("Lorem ipsum dolor sit."),
      icon: <LuCrown className="mx-auto text-5xl" />,
    },
    {
      title: "premium",
      price: "$30.00",
      description: t("Lorem ipsum dolor sit."),
      icon: <IoDiamondOutline className="mx-auto text-5xl" />,
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-main text-center">
          {t("pricing")}
        </h2>
        <p className="text-base font-normal my-6 text-secondary text-center max-w-[900px] mx-auto">
          {t("transparentPrices")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {pricing.map((item, index) => (
            <PricingCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
