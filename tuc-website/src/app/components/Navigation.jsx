"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import logo from "@/assets/logo.png";

const navigation = [
  {
    label: "Overview",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },

  {
    label: "Workflow",
    path: "/workflow",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const displayNavItem = navigation.map((item) => {
    const isActive = pathname === item.path;

    return (
      <Link
        key={item.label}
        href={item.path}
        className={`relative text-medium-gray hover:text-deep-blue font-medium transition-colors cursor-pointer ${
          isActive ? "text-deep-blue" : ""
        }`}
      >
        <span
          className={`relative inline-block ${
            isActive ? "text-deep-blue" : ""
          }`}
        >
          {item.label}

          {isActive && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-1.5 w-1.5 h-1.5 bg-deep-blue rounded-full"></span>
          )}
        </span>
      </Link>
    );
  });

  const displayMobileNavItem = () => {
    return navigation.map((item) => {
      const isActive = pathname === item.path;

      return (
        <Link
          key={item.label}
          href={item.path}
          className={`
          px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
          ${
            isActive
              ? "bg-deep-blue text-white"
              : "text-medium-gray hover:text-deep-blue"
          }
        `}
        >
          {item.label}
        </Link>
      );
    });
  };

  return (
    <header
      id="header"
      className="bg-white border-b border-cool-gray sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <div className="rounded-md flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="sm:w-12 sm:h-12"
            />
            {/* <span className="text-white font-bold text-base sm:text-lg">T</span> */}
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">
          {displayNavItem}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md border border-cool-gray"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block w-5 h-0.5 bg-dark-gray"></span>
            <span className="block w-5 h-0.5 bg-dark-gray"></span>
            <span className="block w-5 h-0.5 bg-dark-gray"></span>
          </div>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col bg-white border-t border-cool-gray px-4 py-4 space-y-4">
          {displayMobileNavItem()}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
