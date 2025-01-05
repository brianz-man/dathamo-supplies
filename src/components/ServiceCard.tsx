import React from 'react';
import { Check, Grid, ArrowUp, Tv, Blinds, Utensils, Droplet, Square } from 'lucide-react';
import type { Service } from '../types/service';
import { ServiceBookingButtons } from './ServiceBookingButtons';

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  'tiling': Grid,
  'ceiling': ArrowUp,
  'tv-mounting': Tv,
  'curtains': Blinds,
  'kitchen': Utensils,
  'plumbing': Droplet,
  'windows': Square
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.id as keyof typeof iconMap];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative pb-[60%]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {IconComponent && <IconComponent className="h-6 w-6 text-blue-600 mr-2" />}
          <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <ServiceBookingButtons 
          serviceName={service.title}
          phoneNumber="+1234567890"
        />
      </div>
    </div>
  );
}