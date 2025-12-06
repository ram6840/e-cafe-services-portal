'use client';

import { FaPhone, FaEnvelope, FaWhatsapp, FaWifi } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const phoneNumber = "+91 9876543210";
  const email = "info@ecafeservices.com";
  const whatsappNumber = "919876543210";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] shadow-md border-b border-[#1E293B] backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-3 sm:px-4 py-2">
        <div className="flex items-center justify-between gap-2">
          {/* Left Side - Logo and Shop Info */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer flex-shrink-0 min-w-0">
            <div className="bg-[#00D9FF] text-[#0F172A] p-1.5 sm:p-2 rounded-full flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
              <FaWifi className="text-base sm:text-lg" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-white whitespace-nowrap">E-Cafe</h1>
            </div>
          </Link>

          {/* Right Side - Contact Info */}
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 flex-shrink-0">
            {/* Phone - Show only icon on mobile, full on larger screens */}
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-1 text-gray-300 hover:text-[#00D9FF] transition-colors cursor-pointer text-xs sm:text-sm flex-shrink-0 p-1"
              title={phoneNumber}
            >
              <FaPhone className="text-[#00D9FF] text-sm sm:text-base" />
              <span className="hidden lg:inline truncate">{phoneNumber}</span>
            </a>
            
            {/* Email - Show only icon on mobile, full on larger screens */}
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-1 text-gray-300 hover:text-[#00D9FF] transition-colors cursor-pointer text-xs sm:text-sm flex-shrink-0 p-1"
              title={email}
            >
              <FaEnvelope className="text-[#00D9FF] text-sm sm:text-base" />
              <span className="hidden xl:inline truncate">{email}</span>
            </a>
            
            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#10B981] text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-[#059669] transition-colors cursor-pointer text-xs sm:text-sm flex-shrink-0"
            >
              <FaWhatsapp className="text-sm sm:text-base" />
              <span className="hidden md:inline font-medium whitespace-nowrap">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

