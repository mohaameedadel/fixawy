"use client";
import React from "react";
import FooterShape from "../components/FooterShape";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TiSocialFacebook } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="relative pt-16">
      <FooterShape />
      <div className="container pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
          <div>
            <div className="logo flex justify-center items-center border-b pb-4">
              <Image
                src="assets/logo.svg"
                alt="Fixawy Logo"
                className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]"
                width={90}
                height={90}
              />
              <h1
                className={`text-white text-3xl lg:text-5xl ps-3 font-semibold
                `}
              >
                {t("fixawy")}
              </h1>
            </div>
            <div className="icons flex justify-center items-center gap-4 mt-4">
              <a
                href="#"
                className="block w-fit p-2 border-2 rounded-full text-white text-3xl hover:bg-white hover:text-[#3698EE] duration-200"
              >
                <TiSocialFacebook />
              </a>
              <a
                href="#"
                className="block w-fit p-2 border-2 rounded-full text-white text-3xl hover:bg-white hover:text-[#3698EE] duration-200"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/fixawy/"
                className="block w-fit p-2 border-2 rounded-full text-white text-3xl hover:bg-white hover:text-[#3698EE] duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="block w-fit p-2 border-2 rounded-full text-white text-3xl hover:bg-white hover:text-[#3698EE] duration-200"
              >
                <MdEmail />
              </a>
            </div>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-semibold">{t("usefulLinks")}</h2>
            <a className="text-base my-4 block ps-2 hover:underline" href="">
              {t("faqs")}
            </a>
            <a className="text-base my-4 block ps-2 hover:underline" href="">
              {t("privacyPolicy")}
            </a>
            <a className="text-base mt-4 block ps-2 hover:underline" href="">
              {t("termsOfService")}
            </a>
          </div>
          <div className="text-white ">
            <h2 className="text-xl font-semibold">{t("location")}</h2>
            <div className="flex flex-col gap-4 mt-4">
              <span className="text-base flex items-center justify-center gap-1">
                {<GoDotFill />} {"G.Cairo"}
              </span>
              <span className="text-base flex items-center justify-center gap-1">
                {<GoDotFill />} {"Alexandria"}
              </span>
              <span className="text-base flex items-center justify-center gap-1">
                {<GoDotFill />} {"N.Coast"}
              </span>
            </div>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-semibold">{t("contactDetails")}</h2>
            <a
              className="text-base mt-4 ps-2 hover:underline flex items-center justify-center gap-2 "
              href=""
            >
              {<FaPhone />} {"+201222207333"}
            </a>
          </div>
        </div>
      </div>
      <p className="py-6 text-center text-white border-t">{t("copyRight")}</p>
    </div>
  );
}
