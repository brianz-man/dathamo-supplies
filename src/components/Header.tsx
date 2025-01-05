import React, { useState } from 'react';
import { Menu, X, Search, MapPin, Phone, User } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { SocialIcons } from './SocialIcons';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <header className="bg-blue-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="p-2 rounded-md text-white lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="text-2xl font-bold text-white ml-2 lg:ml-0">PRO DATHAMO</div>
          </div>
          
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-blue-500 text-white placeholder-blue-200 focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 sm:text-sm"
                  placeholder="Search services..."
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <SocialIcons className="hidden md:flex" />
            <a href="#about" className="text-white hover:text-blue-100 flex items-center">
              <User className="h-5 w-5 mr-1" />
              <span className="hidden lg:inline">About</span>
            </a>
            <a href="#location" className="text-white hover:text-blue-100 flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span className="hidden lg:inline">Find Us</span>
            </a>
            <a href="#contact" className="text-white hover:text-blue-100 flex items-center">
              <Phone className="h-5 w-5 mr-1" />
              <span className="hidden lg:inline">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}