import React from 'react';
import * as Icons from 'lucide-react';
import { categories } from '../config/categories';

interface CategoryBarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryBar({ selectedCategory, onSelectCategory }: CategoryBarProps) {
  return (
    <div className="bg-white shadow-sm mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 py-4 overflow-x-auto">
          <button
            onClick={() => onSelectCategory(null)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md whitespace-nowrap ${
              !selectedCategory ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Icons.Home className="h-5 w-5" />
            <span>All</span>
          </button>
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons];
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}