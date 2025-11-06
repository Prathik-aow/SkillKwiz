"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-col w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto bg-[#335f92] text-white rounded-b-3xl">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="md:hidden relative group py-4 px-2 text-sm lg:text-base transition-all text-yellow-400 font-semibold"
          >
            <div className="relative flex items-center">
              <div className="w-auto h-14 flex items-center justify-start scale-[1.1]">
                <Image
                  src="/images/Logo1.png"
                  alt="SkillKwiz Logo"
                  width={160}
                  height={60}
                  className="w-auto h-auto max-h-20 object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <Link
              href="/"
              className="relative group py-4 px-2 text-sm lg:text-base md:px-4 transition-all text-yellow-400 font-semibold"
            >
              <div className="relative flex items-center">
                <div className="w-auto h-14 flex items-center justify-start scale-[1.1]">
                  <Image
                    src="/images/Logo1.png"
                    alt="SkillKwiz Logo"
                    width={180}
                    height={70}
                    className="w-auto h-auto max-h-24 object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </Link>

            <Link
              href="/"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
            >
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/about"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/about" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
            >
              <span>About Us</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/services"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/services" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
            >
              <span>Services</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/blog"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/blog" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
            >
              <span>Blog</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 bg-[#335f92] rounded-b-3xl border-t border-white/20 transition-all duration-300 ease-in-out">
            <Link
              href="/"
              className={`text-base font-medium relative group py-3 w-full text-center transition-all ${
                pathname === "/" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Home</span>
              <span className="absolute left-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/about"
              className={`text-base font-medium relative group py-3 w-full text-center transition-all ${
                pathname === "/about" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>About Us</span>
              <span className="absolute left-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/services"
              className={`text-base font-medium relative group py-3 w-full text-center transition-all ${
                pathname === "/services" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Services</span>
              <span className="absolute left-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/blog"
              className={`text-base font-medium relative group py-3 w-full text-center transition-all ${
                pathname === "/blog" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Blog</span>
              <span className="absolute left-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
