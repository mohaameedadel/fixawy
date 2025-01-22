"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FinancialInstallment() {
  const { t } = useTranslation();
  return (
    <div className="py-16 bg-basic">
      <div className="container">
        <h2 className="text-xl md:text-3xl font-semibold text-white text-center">
          {t("affordableRenovationServices")}
        </h2>
        <p className="text-base md:text-2xl font-medium text-white text-center my-4">
          {t("turnYourDreamProjectIntoReality")}
        </p>
        <p className="text-base md:text-2xl font-medium text-white text-center my-4">
          {t("detailsOnInstallmentPlans")}
        </p>
        <p className="text-base md:text-2xl font-medium text-white text-center my-4">
          {t("includeAPaymentCalculator")}
        </p>
        <div className="buttons flex flex-wrap justify-center gap-4 mt-8">
          <button className="text-sm md:text-base py-3 px-6 rounded-md text-white bg-main font-semibold hover:bg-white hover:text-main duration-200">
            {t("learnMore")}
          </button>
          <button className="text-sm md:text-base py-3 px-6 rounded-md bg-transparent border-2 border-white text-white font-semibold hover:bg-main hover:text-white hover:border-main duration-200">
            {t("applyForInstallmentPlan")}
          </button>
        </div>
      </div>
    </div>
  );
}
