'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LaminationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A]">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Title Section */}
        <section className="py-4 sm:py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-lg md:text-xl font-semibold text-white">
                    Lamination Services
                  </h1>
                  <p className="text-sm text-gray-300 mt-1">
                    Protect your documents with professional lamination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Info Section */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Description */}
              <div className="bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-4 mb-6">
                <p className="text-gray-300 text-sm">
                  Protect your important documents, certificates, photos, and ID cards with our 
                  professional lamination services. We offer various sizes and thickness options 
                  to suit your needs.
                </p>
              </div>

              {/* Services We Offer */}
              <div className="bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-4 mb-6">
                <h3 className="text-white font-semibold text-sm mb-3">Services We Offer</h3>
                <ul className="space-y-1.5 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>A4 Size Lamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>A5 Size Lamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>ID Card Lamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>Photo Lamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>Custom Size Lamination</span>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-4">
                <p className="text-gray-300 text-sm mb-4">
                  For pricing and more information, please contact us:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+919876543210"
                    className="bg-[#10B981] text-white px-6 py-2.5 rounded-lg hover:bg-[#059669] transition-colors text-sm font-medium cursor-pointer"
                  >
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#10B981] text-white px-6 py-2.5 rounded-lg hover:bg-[#059669] transition-colors text-sm font-medium cursor-pointer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
