'use client';

import Link from 'next/link';
import { useState } from 'react';
import CategoriesDropdown from './categories-dropdown';

export default function Navigation() {
  const [showBagsDropdown, setShowBagsDropdown] = useState(false);

  return (
    <nav className="hidden items-center space-x-8 md:flex">
      <Link href="/" className="text-[#212121] hover:text-[#575555]">
        Home
      </Link>
      <div
        className="relative"
        onMouseEnter={() => setShowBagsDropdown(true)}
        onMouseLeave={() => setShowBagsDropdown(false)}
      >
        <Link href="/bags" className="text-[#212121] hover:text-[#575555]">
          Bags
        </Link>
        {showBagsDropdown && <CategoriesDropdown />}
      </div>
      <Link href="/collections" className="text-[#212121] hover:text-[#575555]">
        Collections
      </Link>
      <Link
        href="/new-arrivals"
        className="text-[#212121] hover:text-[#575555]"
      >
        New arrivals
      </Link>
      <Link
        href="/personalisation"
        className="text-[#212121] hover:text-[#575555]"
      >
        Personalisation
      </Link>
    </nav>
  );
}
