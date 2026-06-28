import React, { useEffect, useState } from "react";
import { SearchX, ChevronDown, ChevronUp } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../config/services";
import { useSearch } from "../hooks/useSearch";

// 4 rows at the widest breakpoint (3 columns) = 12 cards shown before "Read More"
const INITIAL_COUNT = 12;

export function ServiceGrid() {
  const { searchQuery } = useSearch();
  const [showAll, setShowAll] = useState(false);

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Start collapsed again whenever the search changes
  useEffect(() => {
    setShowAll(false);
  }, [searchQuery]);

  if (filteredServices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <SearchX className="mb-3 h-10 w-10 text-slate-300" />
        <p className="font-medium text-slate-500">
          No services match "{searchQuery}".
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Try a different search term.
        </p>
      </div>
    );
  }

  const visibleServices = showAll
    ? filteredServices
    : filteredServices.slice(0, INITIAL_COUNT);
  const hasMore = filteredServices.length > INITIAL_COUNT;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Read More Services
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
