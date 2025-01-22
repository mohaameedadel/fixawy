"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 duration-500 z-[999] ${
        showItems && "bg-white"
      } ${scrolling ? "bg-white py-4 shadow-lg" : "bg-transparent py-6"}`}
    >
      <div
        className={`container flex justify-between items-center flex-col lg:flex-row`}
      >
        <div className="flex items-center justify-between w-full lg:w-auto">
          <a href="" className="logo flex justify-center items-center">
            <Image
              src="assets/logo.svg"
              alt="Fixawy Logo"
              className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]"
              width={90}
              height={90}
            />
            <h1
              className={`text-main text-3xl lg:text-5xl ps-3 font-semibold ${
                scrolling ? "text-main" : showItems ? "text-main" : "text-white"
              }`}
            >
              {t("fixawy")}
            </h1>
          </a>
          <div
            onClick={() => setShowItems(!showItems)}
            className={`icon lg:hidden cursor-pointer duration-500 ${
              scrolling ? "text-main" : showItems ? "text-main" : "text-white"
            }`}
          >
            {showItems ? (
              <TfiClose className="text-3xl" />
            ) : (
              <TfiAlignJustify className="text-3xl" />
            )}
          </div>
        </div>
        <ul
          className={`${
            showItems ? "flex " : "hidden"
          } lg:flex gap-6 flex-col lg:flex-row w-full lg:w-auto lg:bg-transparent p-4 lg:p-0`}
        >
          <li onClick={() => setShowItems(false)} className="nav-item">
            <a
              href="#home"
              className={`block ${
                scrolling ? "text-main" : showItems ? "text-main" : "text-white"
              } duration-500 `}
            >
              {t("home")}
            </a>
          </li>
          <li onClick={() => setShowItems(false)} className="nav-item">
            <a
              href="#about"
              className={`block ${
                scrolling ? "text-main" : showItems ? "text-main" : "text-white"
              } duration-500 `}
            >
              {t("about")}
            </a>
          </li>
          <li onClick={() => setShowItems(false)} className="nav-item">
            <a
              href="#services"
              className={`block ${
                scrolling ? "text-main" : showItems ? "text-main" : "text-white"
              } duration-500 `}
            >
              {t("services")}
            </a>
          </li>
          <li onClick={() => setShowItems(false)} className="nav-item">
            <a
              href="#blog"
              className={`block ${
                scrolling ? "text-main" : showItems ? "text-main" : "text-white"
              } duration-500 `}
            >
              {t("blog")}
            </a>
          </li>
          <li onClick={() => setShowItems(false)} className="nav-item">
            <a
              href="#pricing"
              className={`block ${
                scrolling ? "text-main" : showItems ? "text-main" : "text-white"
              } duration-500 `}
            >
              {t("pricing")}
            </a>
          </li>
          <LanguageSwitcher />
        </ul>
      </div>
    </div>
  );
}
