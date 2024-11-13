"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "../Theme/ThemeToggle";
import Divider from "./Divider";
import { DigitalBrewLinks } from "@/common/types";
import TeaCupIcon from "@/icons/TeaCupIcon";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-accent">Digital Brew</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {DigitalBrewLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm/6 font-semibold text-text"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Theme Button */}
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-accent" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-accent" aria-hidden="true" />
            )}
          </button>
        </div>
        {/* {!isMenuOpen && <Divider />} */}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-accent/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-accent/10">
              <div className="flex items-center gap-x-6">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Digital Brew LLC</span>
                  <TeaCupIcon />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-6 w-6 text-accent"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {DigitalBrewLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:text-accent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <Divider />
    </header>
  );
};

export default Nav;
