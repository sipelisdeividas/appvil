"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "@/components/ui/navbar-menu";
import { MobileDropDown } from "./mobile-dropdown";
import { UserDropdown } from "./user-dropdown";
import LanguageToggle from "@/components/lang-toggle";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const { status } = useSession();
  const { t } = useTranslation();

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="container px-0 md:mx-auto flex justify-between items-center">
          <Link href="/" aria-label="Grįžti į pagrindinį">
            <Image
              priority
              src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715239489/Appvil/logos/logo_grey_frnmyw.png"
              width="159"
              height="53"
              alt="Appvil Logo"
            />
          </Link>
          <span className="sm:hidden md:hidden lg:hidden">
            <MobileDropDown />
          </span>
          <div className="hidden sm:block">
            <ul className="flex items-center space-x-5 uppercase">
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary"
                  aria-label="Susisiekite su mumis"
                >
                  {t("our_works")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary"
                  aria-label="Susisiekite su mumis"
                >
                  {t("communication")}
                </Link>
              </li>
              {status === "authenticated" && (
                <li>
                  <UserDropdown />
                </li>
              )}
              <li>
                <LanguageToggle />
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </Menu>
    </div>
  );
}
