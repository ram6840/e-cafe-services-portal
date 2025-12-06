'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OrderPrints from '../../components/OrderPrints';

export default function PrintingPage() {
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
                    Printing Services
                  </h1>
                  <p className="text-sm text-gray-300 mt-1">
                    High-quality printing at affordable prices
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
              {/* Printing Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-4 hover:border-[#00D9FF] transition-all duration-300">
                  <h3 className="text-white font-medium text-base mb-2">One-Side Printing</h3>
                  <p className="text-2xl font-bold text-[#00D9FF] mb-1">₹1.00</p>
                  <p className="text-gray-400 text-xs">per page</p>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-4 hover:border-[#00D9FF] transition-all duration-300">
                  <h3 className="text-white font-medium text-base mb-2">Two-Side Printing</h3>
                  <p className="text-2xl font-bold text-[#00D9FF] mb-1">₹1.40</p>
                  <p className="text-gray-400 text-xs">per page</p>
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-4 mb-6">
                <h3 className="text-white font-semibold text-sm mb-3">Important Information</h3>
                <ul className="space-y-1.5 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>Delivery Time: 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>Minimum Order: 1 page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>Binding charges extra (if required)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>High-quality printing with modern equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D9FF] mt-1">•</span>
                    <span>Supports PDF, DOC, DOCX formats</span>
                  </li>
                </ul>
              </div>

              {/* Order Prints Component */}
              <OrderPrints />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
