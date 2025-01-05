import React from 'react';
import { Header } from './components/Header';
import { ServiceGrid } from './components/ServiceGrid';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SUPPLIES & INSTALLATION</h1>
            <p className="text-xl text-gray-600 mb-8">Supplies, installation and maintenance services for your home</p>
            <ServiceGrid />
          </div>
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <ContactSection />
      </main>
    </div>
  );
}

export default App;