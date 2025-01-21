"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaCircleDot } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";

export default function HowItWork() {
  const { t } = useTranslation();

  const howItWorks = [
    {
      id: 1,
      title: t("howFixawyWorks.downloadFixawyApp"),
      description: t("howFixawyWorks.downloadFixawyAppDescription"),
      icon: <CiMobile4 />,
    },
    {
      id: 2,
      title: t("howFixawyWorks.registerWithEase"),
      description: t("howFixawyWorks.registerWithEaseDescription"),
      icon: <FaRegAddressCard />,
    },
    {
      id: 3,
      title: t("howFixawyWorks.selectYourLocation"),
      description: t("howFixawyWorks.selectYourLocationsDescription"),
      icon: <IoLocationOutline />,
    },
    {
      id: 4,
      title: t("howFixawyWorks.selectService"),
      description: t("howFixawyWorks.selectServiceDescription"),
      icon: <GrServices />,
    },
    {
      id: 5,
      title: t("howFixawyWorks.scheduleService"),
      description: t("howFixawyWorks.scheduleServiceDescription"),
      icon: <CiCalendar />,
    },
  ];

  function renderHowItWorks() {
    return howItWorks.map((item) => {
      return (
        <div
          key={item.id}
          className="mb-4 shadow-lg p-4 rounded-md flex justify-between items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <FaCircleDot className="text-basic" />
            <div>
              <h3 className="text-xl font-semibold text-main">{item.title}</h3>
              <p className="text-base font-normal mt-2 text-secondary">
                {item.description}
              </p>
            </div>
          </div>
          <div className="text-4xl text-basic">{item.icon && item.icon}</div>
        </div>
      );
    });
  }

  return (
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-main">
                {t("howItWorks")}
              </h2>
              <p className="text-base font-normal my-6 text-secondary">
                {t("fixawyAppOffer")}
              </p>
              <p className="text-base font-normal my-6 text-secondary">
                {t("fixawyBooking")}
              </p>
            </div>
          </div>
          <div>{renderHowItWorks()}</div>
        </div>
      </div>
    </div>
  );
}
