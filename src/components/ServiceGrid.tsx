import React from 'react';
import { ServiceCard } from './ServiceCard';
import { services } from '../config/services';
import { useSearch } from '../hooks/useSearch';

export function ServiceGrid() {
  const { searchQuery } = useSearch();
  
  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}