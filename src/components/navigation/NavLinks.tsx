import React from 'react';
import { User, MapPin, Phone } from 'lucide-react';
import { SocialIcons } from '../SocialIcons';

interface NavLinksProps {
  className?: string;
  mobile?: boolean;
  onLinkClick?: () => void;
}

export function NavLinks({ className = '', mobile = false, onLinkClick }: NavLinksProps) {
  const links = [
    { href: '#about', icon: User, label: 'About' },
    { href: '#location', icon: MapPin, label: 'Find Us' },
    { href: '#contact', icon: Phone, label: 'Contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href') || '';
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onLinkClick?.();
    }
  };

  return (
    <div className={className}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          onClick={handleClick}
          className={`flex items-center transition-colors ${
            mobile 
              ? 'text-blue-600 hover:text-blue-800' 
              : 'text-white hover:text-blue-100'
          }`}
        >
          <Icon className="h-5 w-5 mr-2" />
          <span>{label}</span>
        </a>
      ))}
      <SocialIcons 
        className={mobile ? 'justify-start mt-4' : ''} 
        iconColor={mobile ? 'text-blue-600' : 'text-white'}
      />
    </div>
  );
}