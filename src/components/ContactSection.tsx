import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export function ContactSection() {
  const details = [
    {
      Icon: Phone,
      label: "Phone",
      value: "+254 742 581 692",
      href: "tel:+254742581692",
    },
    {
      Icon: Mail,
      label: "Email",
      value: "nyairobrian@gmail.com",
      href: "mailto:nyairobrian@gmail.com",
    },
    {
      Icon: MapPin,
      label: "Address",
      value: "0100 Imara Daima, Nairobi",
      href: undefined,
    },
    {
      Icon: Clock,
      label: "Hours",
      value: "Mon – Sat, 8:00 AM – 6:00 PM",
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
          <span className="h-0.5 w-5 bg-amber-400" />
          Get in touch
        </span>
        <h2 className="mb-10 mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Reach us directly
            </h3>
            <div className="mb-6 space-y-4">
              {details.map(({ Icon, label, value, href }) => {
                const row = (
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {label}
                      </div>
                      <div className="font-medium text-slate-800">{value}</div>
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="block transition-opacity hover:opacity-80"
                  >
                    {row}
                  </a>
                ) : (
                  <div key={label}>{row}</div>
                );
              })}
            </div>
            <div className="border-t border-slate-100 pt-5">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Follow Us
              </h4>
              <SocialIcons
                iconSize={18}
                iconColor="text-slate-500"
                className="justify-start"
              />
            </div>
          </div>
          <div
            id="location"
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Our Location
            </h3>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63819.464519196874!2d36.84432269017292!3d-1.346542492333991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f12096e1f870d%3A0x541f93cb531ad804!2sImara%20Daima%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1736003744753!5m2!1sen!2ske"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
