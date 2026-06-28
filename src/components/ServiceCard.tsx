import React, { useState } from "react";
import {
  Check,
  Grid,
  ArrowUp,
  Tv,
  Blinds,
  Utensils,
  Droplet,
  Square,
  ChevronDown,
  ChevronUp,
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
  const [expanded, setExpanded] = useState(false);
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
          <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
            <IconComponent className="h-3.5 w-3.5 text-amber-500" />
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-base font-bold leading-snug text-slate-900">
          {service.title}
        </h3>
        <p className="mb-2 line-clamp-2 text-sm leading-snug text-slate-500">
          {service.description}
        </p>

        {expanded && (
          <ul className="mb-3 space-y-1.5">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <Check className="h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
        >
          {expanded ? (
            <>
              Show less
              <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              Read more
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>

        <ServiceBookingButtons
          serviceName={service.title}
          phoneNumber="+254742581692"
        />
      </div>
    </div>
  );
}
