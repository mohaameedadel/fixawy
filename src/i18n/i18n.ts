import { createInstance } from "i18next";
import i18nConfig from "../i18n.config";
import resources from "./resources";

export default async function initTranslations(
  locale: string,
  i18nInstance: ReturnType<typeof createInstance>
) {
  i18nInstance = i18nInstance || createInstance();

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    preload: i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
