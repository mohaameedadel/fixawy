"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../i18n.config";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const queryParams = useSearchParams();

  const onChangeLocale = (locale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${locale};expires=${expires};path=/`;
    const newPathname =
      currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault
        ? `/${locale}${currentPathname}`
        : currentPathname.replace(`/${currentLocale}`, `/${locale}`);

    const queryString = new URLSearchParams(queryParams).toString();
    const newUrl = queryString ? `${newPathname}?${queryString}` : newPathname;

    router.push(newUrl);
    router.refresh();
  };

  return (
    <select
      title="Language"
      name="lang"
      value={currentLocale}
      onChange={(e) => onChangeLocale(e.target.value)}
      className="border rounded pe-4 outline-none bg-white text-main text-sm"
    >
      <option value="en" className="px-2">
        English
      </option>
      <option value="ar">العربية</option>
    </select>
  );
}
