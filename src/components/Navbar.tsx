"use client";

import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200
      ${isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm py-2' 
        : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold text-blue-600 hover:text-blue-700 
                transition-colors duration-150"
            >
              DeepResume
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="#features" 
              className="px-4 py-2 text-gray-600 hover:text-blue-600 rounded-md
                transition-colors duration-150 font-semibold"
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="px-4 py-2 text-gray-600 hover:text-blue-600 rounded-md
                transition-colors duration-150 font-semibold"
            >
              Pricing
            </Link>
            <button 
              className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-md
                transition-all duration-150 hover:bg-blue-700 
                active:scale-[0.98] shadow-sm hover:shadow hover:cursor-pointer
                font-semibold"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 
                hover:bg-blue-50 transition-colors duration-150"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 