import React, { useState } from "react";
import { Menu, X, Search, Phone, Mail, User, MapPin } from "lucide-react";
import { useSearch } from "../hooks/useSearch";
import { SocialIcons } from "./SocialIcons";

const navItems = [
  { href: "#about", icon: User, label: "About" },
  { href: "#location", icon: MapPin, label: "Find Us" },
  { href: "#contact", icon: Phone, label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") || "";
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden sm:block bg-slate-900 text-slate-300 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href="tel:+254742581692"
              className="flex items-center gap-1.5 transition-colors hover:text-amber-400"
            >
              <Phone className="h-3.5 w-3.5" />
              +254 742 581 692
            </a>
            <a
              href="mailto:nyairobrian@gmail.com"
              className="hidden md:flex items-center gap-1.5 transition-colors hover:text-amber-400"
            >
              <Mail className="h-3.5 w-3.5" />
              nyairobrian@gmail.com
            </a>
          </div>
          <SocialIcons
            iconSize={13}
            iconColor="text-slate-400"
            className="gap-1.5"
          />
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                className="-ml-2 rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              <a href="#" className="leading-tight">
                <span className="block text-xl font-extrabold tracking-tight text-slate-900">
                  PRO <span className="text-amber-500">DATHAMO</span>
                </span>
                <span className="mt-0.5 block h-0.5 w-10 bg-amber-400" />
              </a>
            </div>

            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services or products..."
                  className="w-full rounded-lg border border-transparent bg-slate-100 py-2 pl-9 pr-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleNavClick}
                  className="group relative flex items-center gap-2 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900"
                >
                  <Icon className="h-4 w-4 text-slate-400 transition-colors group-hover:text-amber-500" />
                  {label}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <a
              href="tel:+254742581692"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold uppercase tracking-wide text-slate-900 transition-colors hover:bg-amber-300"
            >
              <Phone className="h-4 w-4" />
              Get a Quote
            </a>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={`overflow-hidden border-t transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen
              ? "max-h-[26rem] border-slate-100"
              : "max-h-0 border-transparent"
          }`}
        >
          <div className="px-4 py-4 sm:px-6">
            <div className="relative mb-3 md:hidden">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or products..."
                className="w-full rounded-lg border border-transparent bg-slate-100 py-2 pl-9 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleNavClick}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                  <Icon className="h-5 w-5 text-amber-500" />
                  <span className="font-medium">{label}</span>
                </a>
              ))}
            </nav>
            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
              <SocialIcons iconSize={16} iconColor="text-slate-400" />
              <a
                href="tel:+254742581692"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-900"
              >
                <Phone className="h-3.5 w-3.5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
