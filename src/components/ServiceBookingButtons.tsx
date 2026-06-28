import React from "react";
import { Phone, MessageCircle } from "lucide-react";

interface ServiceBookingButtonsProps {
  serviceName: string;
  phoneNumber: string;
}

export function ServiceBookingButtons({
  serviceName,
  phoneNumber,
}: ServiceBookingButtonsProps) {
  const digits = phoneNumber.replace(/[^\d+]/g, "");

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in booking your ${serviceName} service.`;
    window.open(
      `https://wa.me/${digits.replace("+", "")}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${digits}`;
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        onClick={handleCall}
        className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-slate-900 py-2 px-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        <Phone className="h-3.5 w-3.5" />
        Call Now
      </button>
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-emerald-600 py-2 px-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        WhatsApp
      </button>
    </div>
  );
}
