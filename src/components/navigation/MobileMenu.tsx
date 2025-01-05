import React from 'react';
import { X } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { SearchBar } from './SearchBar';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-64 bg-white px-6 py-4 shadow-xl">
        <div className="flex justify-end mb-6">
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-6">
          <SearchBar className="w-full" />
        </div>
        <NavLinks 
          className="flex flex-col space-y-4" 
          mobile 
          onLinkClick={onClose}
        />
      </div>
    </div>
  );
}