import React from "react";
import { User, MapPin, Phone } from "lucide-react";
import { SocialIcons } from "../SocialIcons";

interface NavLinksProps {
  className?: string;
  mobile?: boolean;
  onLinkClick?: () => void;
}

const links = [
  { href: "#about", icon: User, label: "About" },
  { href: "#location", icon: MapPin, label: "Find Us" },
  { href: "#contact", icon: Phone, label: "Contact" },
];

export function NavLinks({
  className = "",
  mobile = false,
  onLinkClick,
}: NavLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") || "";
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onLinkClick?.();
    }
  };

  return (
    <div
      className={
        mobile
          ? `flex flex-col gap-1 ${className}`
          : `flex items-center gap-7 ${className}`
      }
    >
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          onClick={handleClick}
          className={
            mobile
              ? "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
              : "group relative flex items-center gap-2 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900"
          }
        >
          <Icon
            className={
              mobile
                ? "h-5 w-5 text-amber-500"
                : "h-4 w-4 text-slate-400 transition-colors group-hover:text-amber-500"
            }
          />
          <span>{label}</span>
          {!mobile && (
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-200 group-hover:w-full" />
          )}
        </a>
      ))}
      <SocialIcons
        className={mobile ? "justify-start mt-3 px-3" : "ml-2"}
        iconColor="text-slate-400"
        iconSize={16}
      />
    </div>
  );
}
