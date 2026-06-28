import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function SocialIcons({
  className = "",
  iconSize = 18,
  iconColor = "text-slate-500",
}: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex h-9 w-9 items-center justify-center rounded-full border border-current/15 ${iconColor} transition-colors duration-200 hover:border-amber-400 hover:bg-amber-400 hover:text-slate-900`}
        >
          <Icon size={iconSize} strokeWidth={2} />
        </a>
      ))}
    </div>
  );
}
