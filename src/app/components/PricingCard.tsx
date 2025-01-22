import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface Item {
  title: string;
  price: string;
  description: string;
  icon: ReactElement;
}

export default function PricingCard({ item }: { item: Item }) {
  const { t } = useTranslation();

  function colors() {
    if (item.title === "startup") {
      return "text-[#F85146]";
    }
    if (item.title === "standard") {
      return "text-[#3698EE]";
    }
    if (item.title === "premium") {
      return "text-[#581CCB]";
    }
  }
  return (
    <div id="pricing" className="shadow-lg rounded-2xl p-6 bg-white">
      <h2 className="text-2xl font-semibold text-main text-center mb-4">
        {t(item.title)}
      </h2>
      <div className={`${colors()} text-center pb-6 border-b`}>
        <div className="icon mx-auto text-center p-4 bg-[#F7F8F9] w-fit rounded-full">
          {item.icon}
        </div>
        <p className="text-5xl font-bold mt-4">{item.price}</p>
      </div>
      <p className="text-base font-semibold text-main mt-6 text-center">
        {item.description}
      </p>
      <button className="text-sm md:text-base py-2 px-4 rounded-md bg-transparent border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-200 mx-auto mt-6 block">
        {t("getStarted")}
      </button>
    </div>
  );
}
