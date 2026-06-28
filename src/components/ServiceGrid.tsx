import React from "react";
import { SearchX } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../config/services";
import { useSearch } from "../hooks/useSearch";

export function ServiceGrid() {
  const { searchQuery } = useSearch();

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
