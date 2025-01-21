"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";
import { FaPlus } from "react-icons/fa6";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t("fixawyServices.homeMaintenance"),
      description: t("fixawyServices.fixawyHomeMaintenance"),
      src: "/assets/icons/home-repair.png",
      color: "red",
    },
    {
      id: 2,
      title: t("fixawyServices.interiorDesign"),
      description: t("fixawyServices.fixawyInteriorDesign"),
      src: "/assets/icons/interior_design.png",
      color: "green",
    },
    {
      id: 3,
      title: t("fixawyServices.officeRenovations"),
      description: t("fixawyServices.fixawyOfficeRenovations"),
      src: "/assets/icons/office_renovations.png",
      color: "yellow",
    },
    {
      id: 4,
      title: t("fixawyServices.consultingServices"),
      description: t("fixawyServices.fixawyConsultingServices"),
      src: "/assets/icons/consultant_services.png",
      color: "blue",
    },
  ];

  return (
    <div id="services" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-main text-center">
          {t("ourServices")}
        </h2>
        <p className="text-base font-normal my-6 text-secondary text-center max-w-[900px] mx-auto">
          {t("fixawyServices.fixawyServicesDescription")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div>
          <p className="text-base font-semibold my-6 text-main text-center hover:underline cursor-pointer flex justify-center items-center gap-2">
            {<FaPlus />}
            {t("viewAllServices")}
          </p>
        </div>
      </div>
    </div>
  );
}
