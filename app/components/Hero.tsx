'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaFileAlt, FaPrint, FaIdCard, FaBook } from 'react-icons/fa';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const quickServices = [
    { name: 'Online Application Filling', icon: FaFileAlt, path: '/services/application-filling' },
    { name: 'Printing Services', icon: FaPrint, path: '/services/printing' },
    { name: 'PVC Printing', icon: FaIdCard, path: '/services/pvc-printing' },
    { name: 'Lamination', icon: FaBook, path: '/services/lamination' },
    { name: 'Binding', icon: FaBook, path: '/services/binding' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <section className="relative bg-[#0F172A] text-white -mt-40 md:-mt-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern - Document/Printing Theme */}
      <div className="absolute inset-0 opacity-30">
        {/* Paper grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Subtle document shapes */}
        <div className="absolute top-10 right-10 w-64 h-80 opacity-5">
          <div 
            className="absolute inset-0 border-2 border-[#00D9FF] rounded-sm transform rotate-12"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, transparent 100%)'
            }}
          ></div>
        </div>
        
        <div className="absolute bottom-20 left-10 w-56 h-72 opacity-5">
          <div 
            className="absolute inset-0 border-2 border-[#10B981] rounded-sm transform -rotate-6"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%)'
            }}
          ></div>
        </div>
        
        {/* Printing dots pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 217, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '20px 20px',
            opacity: 0.4
          }}
        ></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00D9FF]/5 via-transparent to-[#10B981]/5"></div>
      </div>
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="container mx-auto px-4 relative z-10 w-full flex items-center min-h-[calc(100vh-10rem)]">
        <div className="max-w-3xl mx-auto text-center w-full">
          {/* Top spacing wrapper - equal to bottom spacing */}
          <div className="pt-24 pb-24 sm:pt-28 sm:pb-28 md:pt-40 md:pb-40">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 px-2">
              Fast, Reliable & <span className="text-[#00D9FF]">Affordable Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-300 px-2">
              Your one-stop solution for all printing and application filling services
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-6 sm:mb-8 px-2">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Services..."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-11 sm:pl-14 rounded-full bg-[#1E293B] text-white text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00D9FF]/30 shadow-lg border border-[#334155] placeholder-gray-400"
                />
                <FaSearch className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 text-[#00D9FF] text-base sm:text-xl" />
              </div>
            </form>

            {/* Quick Service Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {quickServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => router.push(service.path)}
                  className="flex items-center gap-1.5 sm:gap-2 bg-[#10B981] hover:bg-[#059669] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-200 shadow-lg cursor-pointer"
                >
                  <Icon className="text-sm sm:text-base" />
                  <span className="whitespace-nowrap">{service.name}</span>
                </button>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

