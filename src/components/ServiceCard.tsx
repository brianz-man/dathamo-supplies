import React from "react";
import {
  Check,
  Grid,
  ArrowUp,
  Tv,
  Blinds,
  Utensils,
  Droplet,
  Square,
} from "lucide-react";
import type { Service } from "../types/service";
import { ServiceBookingButtons } from "./ServiceBookingButtons";

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  tiling: Grid,
  ceiling: ArrowUp,
  "tv-mounting": Tv,
  curtains: Blinds,
  kitchen: Utensils,
  plumbing: Droplet,
  windows: Square,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.id as keyof typeof iconMap];

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative pb-[58%] bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          className="absolute h-full w-full object-cover"
        />
        {IconComponent && (
          <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
            <IconComponent className="h-4 w-4 text-amber-500" />
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold text-slate-900">
          {service.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-500">
          {service.description}
        </p>
        <ul className="mb-6 space-y-2">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <Check className="h-4 w-4 flex-shrink-0 text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>
        <ServiceBookingButtons
          serviceName={service.title}
          phoneNumber="+254742581692"
        />
      </div>
    </div>
  );
}
