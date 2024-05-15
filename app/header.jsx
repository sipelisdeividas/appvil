"use client";
import React from "react";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
