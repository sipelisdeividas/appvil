import React from "react";
import { Navbar } from "./navbar";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/translations-provider";

const i18mNamespaces = ["common"];

export async function Header({ locale }) {
  const { t, resources } = await initTranslations(locale, i18mNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18mNamespaces}
    >
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>
    </TranslationsProvider>
  );
}
