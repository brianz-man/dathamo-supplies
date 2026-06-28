import React from "react";
import * as Icons from "lucide-react";
import { categories } from "../config/categories";

interface CategoryBarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryBar({
  selectedCategory,
  onSelectCategory,
}: CategoryBarProps) {
  const tabs: { id: string | null; name: string; icon: string }[] = [
    { id: null, name: "All", icon: "Home" },
    ...categories,
  ];

  return (
    <div className="mb-8 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex gap-8 overflow-x-auto"
          style={{ scrollbarWidth: "thin" }}
        >
          {tabs.map((tab) => {
            const IconComponent = Icons[
              tab.icon as keyof typeof Icons
            ] as React.ComponentType<{ className?: string }>;
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id ?? "all"}
                onClick={() => onSelectCategory(tab.id)}
                className={`relative flex items-center gap-2 whitespace-nowrap py-4 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {IconComponent && (
                  <IconComponent
                    className={`h-4 w-4 ${isActive ? "text-amber-500" : "text-slate-400"}`}
                  />
                )}
                <span>{tab.name}</span>
                <span
                  className={`absolute -bottom-px left-0 h-0.5 w-full bg-amber-400 transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
