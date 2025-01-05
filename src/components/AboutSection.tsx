import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SocialIcons } from './SocialIcons';

export function AboutSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
              alt="Professional headshot"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">DARIUS MOKAYA</h1>
            <h2 className="text-2xl text-blue-600 mb-6">Home Services Professional</h2>
            <p className="text-gray-600 mb-6">
              With over 10 years of experience in home services, I specialize in delivering high-quality
              solutions for your home improvement needs. My commitment to excellence and attention to
              detail ensures that every project meets the highest standards of quality.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">nyairobrian@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">+254742581692</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">0100 Imara-Daima, Nairobi</span>
              </div>
            </div>
            <SocialIcons className="justify-start" iconSize={24} />
          </div>
        </div>
      </div>
    </section>
  );
}