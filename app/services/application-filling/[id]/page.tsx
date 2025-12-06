'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { FaFilePdf, FaRupeeSign, FaListUl, FaArrowLeft, FaTimes } from 'react-icons/fa';
import { sampleApplications } from '../data';

export default function ApplicationDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const applicationId = parseInt(params.id as string);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const application = sampleApplications.find(app => app.id === applicationId);

  if (!application) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0F172A]">
        <Header />
        <main className="flex-grow pt-16 sm:pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <p className="text-white text-lg mb-4">Application not found</p>
              <button
                onClick={() => router.push('/services/application-filling')}
                className="bg-[#00D9FF] hover:bg-[#06B6D4] text-[#0F172A] font-semibold px-6 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Back to Applications
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A]">
      <Header />
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="py-4 sm:py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Back Button - Left Side */}
                <button
                  onClick={() => router.back()}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#00D9FF] transition-colors cursor-pointer text-xs sm:text-sm flex-shrink-0"
                >
                  <FaArrowLeft className="text-xs sm:text-sm" />
                  <span className="hidden sm:inline">Back</span>
                </button>
                
                {/* Title - Right Side */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-base sm:text-lg md:text-xl font-semibold text-white break-words line-clamp-2">
                    {application.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Application Name: <span className="text-white font-medium">{application.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Notification Document */}
              {application.officialNotificationDocument && (
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-4 mb-6">
                  <button
                    onClick={() => setIsPdfModalOpen(true)}
                    className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#06B6D4] text-sm transition-colors cursor-pointer"
                  >
                    <FaFilePdf className="text-base" />
                    <span>View Official Notification Document</span>
                  </button>
                </div>
              )}

              {/* Pricing Information */}
              <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6 mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Pricing Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-[#0F172A] rounded-lg p-4">
                    <p className="text-gray-400 text-xs mb-1">Application Fee</p>
                    <p className="text-white font-semibold flex items-center gap-1">
                      <FaRupeeSign className="text-sm" />
                      {application.applicationFee}
                    </p>
                  </div>
                  <div className="bg-[#0F172A] rounded-lg p-4">
                    <p className="text-gray-400 text-xs mb-1">Applying Charges</p>
                    <p className="text-white font-semibold flex items-center gap-1">
                      <FaRupeeSign className="text-sm" />
                      {application.applyingCharges}
                    </p>
                  </div>
                  <div className="bg-[#00D9FF]/20 rounded-lg p-4 border border-[#00D9FF]/30">
                    <p className="text-gray-300 text-xs mb-1">Total Amount</p>
                    <p className="text-[#00D9FF] font-bold text-xl flex items-center gap-1">
                      <FaRupeeSign className="text-base" />
                      {application.totalAmount}
                    </p>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6 mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaListUl className="text-[#00D9FF]" />
                  Required Documents
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {Object.entries(application.requiredDocuments).map(([category, documents]) => (
                    <div key={category} className="bg-[#0F172A] rounded-lg p-4">
                      <p className="text-[#00D9FF] text-sm font-semibold mb-3 uppercase">
                        {category}
                      </p>
                      <ul className="space-y-2">
                        {documents.map((doc, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-[#00D9FF] mt-1">•</span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
                <button className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-3 rounded-lg transition-colors duration-300 cursor-pointer">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* PDF Modal */}
      {isPdfModalOpen && application?.officialNotificationDocument && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-2 md:p-4"
          onClick={() => setIsPdfModalOpen(false)}
        >
          <div
            className="bg-[#1E293B] rounded-none sm:rounded-lg border-0 sm:border border-[#334155] w-full h-full sm:w-full sm:h-[90vh] sm:max-w-5xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Fixed at top */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-[#334155] flex-shrink-0 bg-[#1E293B] sticky top-0 z-10">
              <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                <FaFilePdf className="text-[#00D9FF] text-sm sm:text-base flex-shrink-0" />
                <span className="truncate text-xs sm:text-sm md:text-base">Official Notification Document</span>
              </h3>
              <button
                onClick={() => setIsPdfModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer p-2 sm:p-2 flex-shrink-0 bg-[#1E293B] rounded-full hover:bg-[#334155]"
                aria-label="Close"
              >
                <FaTimes className="text-lg sm:text-xl" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden bg-gray-900 min-h-0">
              <iframe
                src={`${encodeURI(application.officialNotificationDocument)}#toolbar=0`}
                className="w-full h-full border-0"
                title="Official Notification Document"
                type="application/pdf"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

