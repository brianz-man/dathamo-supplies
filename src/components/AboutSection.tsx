import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export function AboutSection() {
  const contactRows = [
    {
      Icon: Mail,
      value: "nyairobrian@gmail.com",
      href: "mailto:nyairobrian@gmail.com",
    },
    { Icon: Phone, value: "+254 742 581 692", href: "tel:+254742581692" },
    { Icon: MapPin, value: "0100 Imara Daima, Nairobi", href: "#location" },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative mx-auto max-w-md md:mx-0">
            <div className="absolute -inset-3 -z-10 hidden rounded-2xl border-2 border-amber-400 sm:block" />
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
              alt="Darius Mokaya, home services professional"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
              <span className="h-0.5 w-5 bg-amber-400" />
              About the team
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Darius Mokaya
            </h1>
            <h2 className="mt-1 text-lg font-semibold text-slate-500">
              Home Services Professional
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              With over 10 years of hands-on experience in home services, I
              specialize in delivering reliable, high-quality work across
              tiling, plumbing, fittings and finishing. Every project gets the
              same attention to detail, start to finish.
            </p>
            <div className="mt-8 space-y-3">
              {contactRows.map(({ Icon, value, href }) => (
                <a
                  key={value}
                  href={href}
                  className="group flex items-center gap-3 text-slate-700 transition-colors hover:text-slate-900"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors group-hover:bg-amber-100 group-hover:text-amber-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{value}</span>
                </a>
              ))}
            </div>
            <SocialIcons
              className="mt-8 justify-start"
              iconSize={18}
              iconColor="text-slate-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
