'use client';

import { useState, useRef, useEffect } from 'react';
import { FaFile, FaTimes } from 'react-icons/fa';

// Load PDF.js from CDN
declare global {
  interface Window {
    pdfjsLib: any;
  }
}

export default function OrderPrints() {
  const [printType, setPrintType] = useState<'one-side' | 'two-side'>('one-side');
  const [numPages, setNumPages] = useState<number>(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [fileSize, setFileSize] = useState<number>(0);
  const [isCountingPages, setIsCountingPages] = useState(false);
  const [pageCountError, setPageCountError] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load PDF.js from CDN
    if (typeof window !== 'undefined' && !window.pdfjsLib) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
      script.async = true;
      script.onload = () => {
        // Set worker source after library loads
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
        }
      };
      document.head.appendChild(script);
    }

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

  const pricePerPage = printType === 'one-side' ? 1 : 1.40;
  const totalPrice = numPages * pricePerPage;
  const deliveryTime = '24-48 hours';

  const countPDFPages = async (file: File): Promise<number> => {
    try {
      // Wait for PDF.js to load if not already loaded
      if (typeof window === 'undefined' || !window.pdfjsLib) {
        // Wait a bit for the script to load
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (!window.pdfjsLib) {
          throw new Error('PDF.js library not loaded');
        }
      }

      // Read file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();

      // Load with pdf.js (same as your example)
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      // Get page count
      const numPages = pdf.numPages;

      if (numPages && numPages > 0) {
        setPageCountError('');
        return numPages;
      } else {
        throw new Error('Invalid page count');
      }
    } catch (error: any) {
      console.error('Error counting PDF pages:', error);
      setPageCountError('Failed to count pages. Please enter manually.');
      return 0;
    }
  };

  const handleFileUpload = async (file: File) => {
    setUploadedFile(file);
    setFileName(file.name);
    setFileSize(file.size);
    
    // Reset page count and errors
    setNumPages(0);
    setPageCountError('');
    setIsCountingPages(true);

    // Check if it's a PDF file
    const isPDF = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    
    if (isPDF) {
      try {
        const pageCount = await countPDFPages(file);
        if (pageCount > 0) {
          setNumPages(pageCount);
        }
      } catch (error) {
        console.error('Error in handleFileUpload:', error);
        setPageCountError('Unable to detect pages. Please enter manually.');
      } finally {
        setIsCountingPages(false);
      }
    } else {
      // For DOC/DOCX files, user needs to enter manually
      setIsCountingPages(false);
      setPageCountError('');
    }
  };

  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleFileUpload(file);
    }
  };

  const handleClearFile = () => {
    setUploadedFile(null);
    setFileName('');
    setFileSize(0);
    setNumPages(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'application/pdf' || file.name.endsWith('.doc') || file.name.endsWith('.docx'))) {
      await handleFileUpload(file);
    }
  };

  const handlePlaceOrder = () => {
    if (!uploadedFile) {
      alert('Please upload a file first');
      return;
    }
    if (numPages <= 0) {
      alert('Please enter the number of pages (minimum 1 page)');
      return;
    }
    if (numPages < 1) {
      alert('Minimum order is 1 page');
      return;
    }
    alert(`Order placed successfully!\nFile: ${fileName}\nPages: ${numPages}\nType: ${printType}\nTotal: ₹${totalPrice.toFixed(2)}`);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-[#0F172A]"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div 
          className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-white px-2">
            Order Your Prints
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-2">
            Upload your file and get an <span className="text-[#00D9FF] font-semibold">instant price quote</span>
          </p>
        </div>

        {/* Single Box Container */}
        <div 
          className={`bg-[#1E293B] rounded-xl border-2 border-[#00D9FF] transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Details */}
              <div className="space-y-6">
                <h3 className="text-white font-semibold text-lg">Details</h3>
                
                {/* File Upload */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 ${
                    isDragging
                      ? 'border-[#00D9FF] bg-[#00D9FF]/10'
                      : uploadedFile
                      ? 'border-[#10B981] bg-[#10B981]/5'
                      : 'border-[#334155] hover:border-[#00D9FF] hover:bg-[#00D9FF]/5'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                  {uploadedFile ? (
                    <div className="w-full relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClearFile();
                        }}
                        className="absolute top-0 right-0 text-gray-400 hover:text-red-400 transition-colors p-1 z-10 cursor-pointer"
                        title="Remove file"
                      >
                        <FaTimes className="text-lg" />
                      </button>
                      <div className="flex flex-col items-center gap-2 pt-4">
                        <FaFile className="text-[#10B981] text-3xl" />
                        <p className="text-white font-medium text-sm mt-2">{fileName}</p>
                        <p className="text-gray-400 text-xs">{formatFileSize(fileSize)}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-gray-300 text-sm">Upload or drag file here</p>
                      <p className="text-gray-500 text-xs mt-1">PDF / DOC / DOCX - Max 50MB</p>
                    </div>
                  )}
                </div>

                {/* Print Type and Number of Pages in Single Line */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Print Type */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Print Type</label>
                    <select
                      value={printType}
                      onChange={(e) => setPrintType(e.target.value as 'one-side' | 'two-side')}
                      className="w-full px-4 py-2.5 bg-[#0F172A] border border-[#334155] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent cursor-pointer"
                    >
                      <option value="one-side">One-side (₹1.00/page)</option>
                      <option value="two-side">Two-side (₹1.40/page)</option>
                    </select>
                  </div>

                  {/* Number of Pages */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Number of Pages</label>
                    <input
                      type="number"
                      value={numPages || ''}
                      onChange={(e) => setNumPages(parseInt(e.target.value) || 0)}
                      min={0}
                      className="w-full px-4 py-2.5 bg-[#0F172A] border border-[#334155] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="Enter pages"
                      style={{ MozAppearance: 'textfield' }}
                    />
                  </div>
                </div>

                {/* Info Text */}
                <p className="text-gray-400 text-xs">
                  Minimum order 1 page. Binding charges extra.
                </p>
              </div>

              {/* Right Column - Quick Summary */}
              <div className="space-y-6">
                <h3 className="text-white font-semibold text-lg">Quick Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Type:</span>
                    <span className="text-white font-medium text-sm">{printType === 'one-side' ? 'One-side' : 'Two-side'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Pages:</span>
                    <span className="text-white font-medium text-sm">{numPages || 0}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Per Page:</span>
                    <span className="text-white font-medium text-sm">₹{pricePerPage.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-[#334155]">
                    <span className="text-gray-400 text-sm">Delivery:</span>
                    <span className="text-white font-medium text-sm">{deliveryTime}</span>
                  </div>
                </div>

                {/* Total Price */}
                <div className="pt-4 border-t border-[#334155]">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-300 text-base">Total Price:</span>
                    <span className="text-2xl font-bold text-[#00D9FF]">₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={!uploadedFile || numPages <= 0 || numPages < 1}
                  className="w-full bg-[#10B981] text-white py-3 rounded-lg font-medium text-sm hover:bg-[#059669] disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                >
                  Place Order
                </button>

                <p className="text-gray-500 text-xs text-center">
                  * Binding charges extra (if required)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
