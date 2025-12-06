'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white py-8 border-t border-[#1E293B]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">E-Cafe Services</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for all printing and application filling services. 
              Fast, reliable, and affordable solutions for all your documentation needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm cursor-pointer">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm cursor-pointer">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/application-filling" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm cursor-pointer">
                  Application Filling
                </Link>
              </li>
              <li>
                <Link href="/services/printing" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm cursor-pointer">
                  Printing Services
                </Link>
              </li>
              <li>
                <Link href="/services/pvc-printing" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm cursor-pointer">
                  PVC Printing
                </Link>
              </li>
              <li>
                <Link href="/services/lamination" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm cursor-pointer">
                  Lamination
                </Link>
              </li>
              <li>
                <Link href="/services/binding" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm cursor-pointer">
                  Binding
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Main Street</li>
              <li>City - 500001</li>
              <li>Phone: +91 9876543210</li>
              <li>Email: info@ecafeservices.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1E293B] pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} E-Cafe Services Portal. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Developed with ❤️ for better service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

