'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaFileAlt, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { sampleApplications } from './data';

export default function ApplicationFillingPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter applications based on search
  const filteredApplications = sampleApplications.filter(app =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentApplications = filteredApplications.slice(startIndex, endIndex);

  // Reset to first page when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleViewDetails = (application: typeof sampleApplications[0], e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/services/application-filling/${application.id}`);
  };

  const handleItemClick = (application: typeof sampleApplications[0]) => {
    router.push(`/services/application-filling/${application.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A]">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Applications List Section */}
        <section className="py-4 sm:py-6">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-5xl mx-auto">
              {/* Header with Title and Search */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-1 min-w-0">
                  <h1 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                    Online Application Filling
                  </h1>
                </div>
                
                {/* Search Input */}
                <div className="relative w-full sm:w-auto sm:min-w-[200px] md:w-80">
                  <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#00D9FF] text-sm sm:text-base" />
                  <input
                    type="text"
                    placeholder="Search applications..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-[#1E293B] border border-[#334155] rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Applications List */}
              <div className="space-y-2 mb-6">
                {currentApplications.length > 0 ? (
                  currentApplications.map((application) => (
                    <div
                      key={application.id}
                      onClick={() => handleItemClick(application)}
                      className="bg-[#1E293B] border border-[#334155] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 hover:border-[#00D9FF] transition-all duration-300 flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <h3 className="text-white font-medium text-xs sm:text-sm flex-1 min-w-0 pr-2 break-words line-clamp-1">
                        {application.title}
                      </h3>
                      <button
                        onClick={(e) => handleViewDetails(application, e)}
                        className="bg-[#00D9FF] hover:bg-[#06B6D4] text-[#0F172A] font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg transition-colors duration-300 text-xs whitespace-nowrap cursor-pointer flex-shrink-0"
                      >
                        View Details
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="bg-[#1E293B] border border-[#334155] rounded-lg px-5 py-8 text-center">
                    <p className="text-gray-400 text-sm">No applications found</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="p-2 bg-[#1E293B] border border-[#334155] rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#00D9FF] transition-colors cursor-pointer"
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                          currentPage === page
                            ? 'bg-[#00D9FF] text-[#0F172A]'
                            : 'bg-[#1E293B] border border-[#334155] text-white hover:border-[#00D9FF]'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 bg-[#1E293B] border border-[#334155] rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#00D9FF] transition-colors cursor-pointer"
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
