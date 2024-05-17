"use client";
import { useSession } from "next-auth/react";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";
import { useTranslation } from "react-i18next";

export function StatusBlock() {
  const { status } = useSession();
  const { t } = useTranslation();

  return (
    <div className="mt-12 flex flex-col items-center">
      {status === "authenticated" ? (
        <>
          <h1 className="text-2xl xl:text-3xl font-extrabold uppercase">
            Atsijungimas {t("logout_header")}
          </h1>
        </>
      ) : (
        <h1 className="text-2xl xl:text-3xl font-extrabold uppercase">
          {t("login")}
        </h1>
      )}

      {status === "authenticated" ? (
        <>
          <LogoutButton />
        </>
      ) : (
        <>
          <LoginButton />
        </>
      )}
    </div>
  );
}
