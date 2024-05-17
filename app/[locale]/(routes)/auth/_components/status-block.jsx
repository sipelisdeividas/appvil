"use client";
import { useSession } from "next-auth/react";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";

export function StatusBlock() {
  const { status } = useSession();
  return (
    <div className="mt-12 flex flex-col items-center">
      {status === "authenticated" ? (
        <>
          <h1 className="text-2xl xl:text-3xl font-extrabold uppercase">
            Atsijungimas
          </h1>
        </>
      ) : (
        <h1 className="text-2xl xl:text-3xl font-extrabold uppercase">
          Prisijungimas
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
