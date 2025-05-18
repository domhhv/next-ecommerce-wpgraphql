'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import MobileCategories from './mobile-categories';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleCategories = () => setShowCategories(!showCategories);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center p-2"
        aria-label="Open menu"
      >
        <div className="space-y-1.5">
          <span className="block h-0.5 w-6 bg-[#212121]"></span>
          <span className="block h-0.5 w-6 bg-[#212121]"></span>
          <span className="block h-0.5 w-6 bg-[#212121]"></span>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4">
            <button onClick={closeMenu} className="p-2" aria-label="Close menu">
              <X className="h-6 w-6 text-[#212121]" />
            </button>
          </div>

          <div className="px-6 py-4">
            <nav className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <button
                    onClick={toggleCategories}
                    className="flex w-full items-center justify-between py-2 text-[#212121]"
                  >
                    <span>Bags</span>
                    {showCategories ? (
                      <ChevronUp className="h-4 w-4 text-[#212121]" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#212121]" />
                    )}
                  </button>
                  {showCategories && (
                    <MobileCategories onSelectCategory={closeMenu} />
                  )}
                </div>
                <Link
                  href="/collections"
                  className="py-2 text-[#212121]"
                  onClick={closeMenu}
                >
                  Collections
                </Link>
                <Link
                  href="/new-arrivals"
                  className="py-2 text-[#212121]"
                  onClick={closeMenu}
                >
                  New arrivals
                </Link>
                <Link
                  href="/personalisation"
                  className="py-2 text-[#212121]"
                  onClick={closeMenu}
                >
                  Personalisation
                </Link>
              </div>

              <div className="border-t border-[#f3f0f0] pt-8">
                <Link
                  href="/art-gallery"
                  className="block border-b border-[#f3f0f0] py-4 text-[#212121]"
                  onClick={closeMenu}
                >
                  Art Gallery
                </Link>
                <Link
                  href="/about-us"
                  className="block border-b border-[#f3f0f0] py-4 text-[#212121]"
                  onClick={closeMenu}
                >
                  About us
                </Link>
                <Link
                  href="/contacts"
                  className="block border-b border-[#f3f0f0] py-4 text-[#212121]"
                  onClick={closeMenu}
                >
                  Contacts
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
