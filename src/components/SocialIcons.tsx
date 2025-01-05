import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

export function SocialIcons({ className = '', iconSize = 20 }: SocialIconsProps) {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-200 transition-colors"
          aria-label={label}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}