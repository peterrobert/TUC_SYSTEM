"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Image from "next/image";

type navLinksType = {
  label: string;
  href: string;
};

const NavBar = () => {
  const pathname = usePathname();
  const isListsPage = pathname === "/lists";

  const navLinks: navLinksType[] = [
    { label: "Intro", href: "/#intro" },
    { label: "How it Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Featured Lists", href: "/#lists" },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 h-16 transition-all duration-300"
    >
      <div className="max-w-300 mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:bg-purple-700 transition-colors">
              <i className="fa-solid fa-layer-group text-sm"></i>
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">
              Top10 System
            </span>
          </Link>
          <Link
            href="/lists"
            className={`hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors
              ${isListsPage ? "text-purple-600" : ""}
              `}
          >
            <i className="fa-regular fa-compass"></i>
            Collections
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link: navLinksType, id: number) => {
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={id}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                } flex flex-col items-center`}
              >
                {link.label}
                {isActive && (
                  <span className="mt-1 w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-md shadow-purple-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
            Log in
          </button>

          <div className="relative group cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-linear-to-br from-purple-100 to-purple-200 border border-purple-200 flex items-center justify-center overflow-hidden">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                alt="User Profile"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
              <div className="p-2">
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  My Lists
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Settings
                </Link>
                <div className="h-px bg-gray-100 my-1"></div>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Log out
                </Link>
              </div>
            </div>
          </div>
          <button className="lg:hidden text-gray-500 hover:text-gray-900">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
