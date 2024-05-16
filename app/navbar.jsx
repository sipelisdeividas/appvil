"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, MenuItem, ProjectItem } from "@/components/ui/navbar-menu";
import { MobileDropDown } from "./mobile-dropdown";
import { UserDropdown } from "./user-dropdown";
import { APP_NAME } from "@/lib/config";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [projects, setProjects] = useState([]);
  const { status } = useSession();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${APP_NAME}/api/projects`);
        setProjects(res.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

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
            <ul className="flex items-center space-x-10 uppercase">
              <li>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Atlikti darbai"
                >
                  <div className="text-sm grid grid-cols-2 gap-10 p-4">
                    {projects.slice(-4).map((project) => (
                      <div key={project._id}>
                        <ProjectItem
                          title={project.name}
                          href={`/projects/${project.slug}`}
                          src={project.banner}
                          description={project.description}
                        />
                      </div>
                    ))}
                  </div>
                </MenuItem>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary"
                  aria-label="Susisiekite su mumis"
                >
                  Susisiekimas
                </Link>
              </li>
              {status === "authenticated" && (
                <li>
                  <UserDropdown />
                </li>
              )}
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
