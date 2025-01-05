import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SocialIcons } from './SocialIcons';

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span>+254742581692</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span>nyairobrian@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span>123 Service Street, City</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <span>Mon-Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-3">Follow Us</h4>
              <SocialIcons iconSize={24} className="justify-start" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63819.464519196874!2d36.84432269017292!3d-1.346542492333991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f12096e1f870d%3A0x541f93cb531ad804!2sImara%20Daima%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1736003744753!5m2!1sen!2ske"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}