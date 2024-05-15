"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListFilter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserDropdown } from "./user-dropdown";
import { useSession } from "next-auth/react";

export function MobileDropDown() {
  const session = useSession();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ListFilter />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex justify-center items-center">
          <SheetTitle>
            <Link href="/" aria-label="Grįžti į pagrindinį">
              <Image
                priority
                src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715239489/Appvil/logos/logo_grey_frnmyw.png"
                alt="Appvil Logo"
                width="159"
                height="53"
              />
            </Link>
          </SheetTitle>
          <SheetDescription>Kai rašome – mes kuriame</SheetDescription>
        </SheetHeader>
        <div className="py-8">
          <ul className="flex flex-col justify-center items-center uppercase space-y-4">
            <li>
              <Link
                className="flex"
                href="/projects"
                aria-label="Pamatykite mūsų atliktus darbus"
              >
                Mūsų darbai
              </Link>
            </li>
            <li>
              <Link
                className="flex"
                href="/contact"
                aria-label="Susisiekite su mumis"
              >
                Susisiekimas
              </Link>
            </li>
            {session.data && (
              <li>
                <UserDropdown />
              </li>
            )}
          </ul>
        </div>
        <SheetFooter className="flex justify-center items-center">
          <ModeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
