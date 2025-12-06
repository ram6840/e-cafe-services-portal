'use client';

import { useEffect, useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
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

  const phoneNumber = "+91 9876543210";
  const email = "info@ecafeservices.com";
  const whatsappNumber = "919876543210";
  const address = "123 Main Street, City - 500001";
  const workingHours = {
    weekdays: "9:00 AM - 8:00 PM",
    saturday: "10:00 AM - 6:00 PM",
    sunday: "Closed",
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for any queries or support
          </p>
        </div>

        {/* Get In Touch - Full Width Box */}
        <div 
          className={`bg-[#1E293B]/80 backdrop-blur-sm rounded-xl border border-[#334155]/50 shadow-2xl p-6 hover:border-[#00D9FF]/50 transition-all duration-500 max-w-6xl mx-auto ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h3 className="text-xl font-bold text-white mb-6">
            <span className="text-[#00D9FF]">Get In Touch</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-[#00D9FF]/20 p-2.5 rounded-lg group-hover:bg-[#00D9FF]/30 transition-colors duration-300">
                  <FaPhone className="text-[#00D9FF] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5 text-sm">Phone</h4>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="text-gray-300 hover:text-[#00D9FF] transition-colors text-sm"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-[#00D9FF]/20 p-2.5 rounded-lg group-hover:bg-[#00D9FF]/30 transition-colors duration-300">
                  <FaEnvelope className="text-[#00D9FF] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5 text-sm">Email</h4>
                  <a 
                    href={`mailto:${email}`}
                    className="text-gray-300 hover:text-[#00D9FF] transition-colors text-sm"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-[#00D9FF]/20 p-2.5 rounded-lg group-hover:bg-[#00D9FF]/30 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-[#00D9FF] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5 text-sm">Address</h4>
                  <p className="text-gray-300 text-sm">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-[#00D9FF]/20 p-2.5 rounded-lg group-hover:bg-[#00D9FF]/30 transition-colors duration-300">
                  <FaClock className="text-[#00D9FF] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5 text-sm">Working Hours</h4>
                  <div className="text-gray-300 text-sm space-y-0.5">
                    <p>Mon - Fri: {workingHours.weekdays}</p>
                    <p>Saturday: {workingHours.saturday}</p>
                    <p>Sunday: {workingHours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Button - Left Aligned */}
              <div className="mt-6">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:from-[#059669] hover:to-[#047857] transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-sm cursor-pointer w-full sm:w-auto justify-center"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden h-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] relative">
              {/* Map overlay gradient for dark theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/20 to-transparent pointer-events-none z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2676946073016!2d78.48667191487764!3d17.44849718804646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dac93e348d%3A0xc9039baf28225324!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) brightness(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
