'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaFileAlt, FaPrint, FaIdCard, FaBook } from 'react-icons/fa';
import { sampleApplications } from '../services/application-filling/data';

export default function Services() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Prepare application services list - show top 5 with "Other Applications" at bottom
  const regularApps = sampleApplications;
  
  // Take top 4 regular apps, then add "Other Applications" at bottom
  const topApps = regularApps.slice(0, 4).map(app => ({
    name: app.title,
    path: `/services/application-filling/${app.id}`
  }));
  
  // Add "Other Applications" at bottom as a navigation item to the list page
  topApps.push({
    name: 'Other Applications',
    path: '/services/application-filling' // Navigate to list page
  });
  
  const applicationServices = topApps;

  const serviceCategories = [
    {
      title: 'Online Application Filling',
      icon: FaFileAlt,
      gradient: 'from-[#00D9FF] to-[#06B6D4]',
      services: applicationServices,
    },
    {
      title: 'Printing Services',
      icon: FaPrint,
      gradient: 'from-[#10B981] to-[#059669]',
      services: [
        { name: 'One-side print – ₹1/-', path: '/services/printing' },
        { name: 'Two-side print – ₹1.40/-', path: '/services/printing' },
      ],
      details: 'Delivery Time: 24–48 hours | Minimum order: 1000 pages | Binding charges extra',
    },
    {
      title: 'PVC Printing Services',
      icon: FaIdCard,
      gradient: 'from-[#00D9FF] to-[#0891B2]',
      services: [
        { name: 'ID Cards', path: '/services/pvc-printing' },
        { name: 'Custom PVC Cards', path: '/services/pvc-printing' },
      ],
    },
    {
      title: 'Lamination',
      icon: FaBook,
      gradient: 'from-[#10B981] to-[#047857]',
      services: [
        { name: 'A4 Lamination', path: '/services/lamination' },
        { name: 'Custom Sizes', path: '/services/lamination' },
      ],
    },
    {
      title: 'Binding',
      icon: FaBook,
      gradient: 'from-[#00D9FF] to-[#0E7490]',
      services: [
        { name: 'Spiral Binding', path: '/services/binding' },
        { name: 'Book Binding', path: '/services/binding' },
      ],
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-white px-2">
            Our Services
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-2">
            Comprehensive solutions for all your documentation and printing needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group relative bg-[#1E293B] rounded-lg overflow-hidden border border-[#334155] hover:border-[#00D9FF] transition-all duration-300 h-full flex flex-col ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-5 flex flex-col h-full">
                  {/* Heading and Icon in single line */}
                  <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className={`p-2 rounded-md bg-gradient-to-br ${category.gradient}`}>
                      <Icon className="text-white text-base" />
                    </div>
                    <h3 className="text-base font-semibold text-white flex-1">
                      {category.title}
                    </h3>
                  </div>

                  {/* Details badge (only for printing services) */}
                  {category.details && (
                    <div className="mb-3 p-2 bg-[#00D9FF]/10 rounded border border-[#00D9FF]/20 flex-shrink-0">
                      <p className="text-xs text-[#00D9FF]">{category.details}</p>
                    </div>
                  )}

                  {/* Services List - flex-1 to fill remaining space */}
                  <div className="space-y-1.5 flex-1">
                    {category.services.map((service, serviceIndex) => (
                      <button
                        key={serviceIndex}
                        onClick={() => router.push(service.path)}
                        className="w-full text-left px-3 py-2 bg-[#0F172A] hover:bg-[#00D9FF]/10 rounded text-gray-300 hover:text-white text-sm border border-[#334155] hover:border-[#00D9FF] transition-colors cursor-pointer"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
