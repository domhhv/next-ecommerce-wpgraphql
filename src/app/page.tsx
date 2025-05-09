import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import MobileMenu from '@/components/mobile-menu';
import MobileFooter from '@/components/mobile-footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Navigation */}
      <header className="flex items-center justify-between px-4 py-6 md:px-8">
        {/* Mobile Menu */}
        <MobileMenu />

        {/* Left Navigation - Desktop Only */}
        <nav className="hidden items-center space-x-8 lg:flex">
          <Link href="/" className="text-[#212121] hover:text-[#575555]">
            Home
          </Link>
          <div className="group relative">
            <Link href="/bags" className="text-[#212121] hover:text-[#575555]">
              Bags
            </Link>
            <div className="absolute top-full left-0 z-10 hidden pt-2 group-hover:block">
              <div className="min-w-[180px] bg-white py-4">
                <Link
                  href="/bags"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  View all
                </Link>
                <Link
                  href="/bags/top-handle"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Top handle bags
                </Link>
                <Link
                  href="/bags/cross-body"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Cross body bags
                </Link>
                <Link
                  href="/bags/backpacks"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Backpacks
                </Link>
                <Link
                  href="/bags/shoulder"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Shoulder bags
                </Link>
                <Link
                  href="/bags/business"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Business bags
                </Link>
                <Link
                  href="/bags/shoppers"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Shoppers
                </Link>
                <Link
                  href="/bags/clutches"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Clutches
                </Link>
                <Link
                  href="/bags/travel"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Travel
                </Link>
                <Link
                  href="/bags/small"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Small bags
                </Link>
                <Link
                  href="/bags/leather-goods"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Small leather goods
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/collections"
            className="text-[#212121] hover:text-[#575555]"
          >
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

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 transform">
          <Link
            href="/"
            className="text-4xl font-light tracking-widest text-[#212121]"
          >
            <Image src="/logo.png" alt="Logo" width={89.11} height={63} />
          </Link>
        </div>

        {/* Right Navigation - Desktop Only */}
        <nav className="hidden items-center space-x-8 lg:flex">
          <Link
            href="/art-gallery"
            className="text-[#212121] hover:text-[#575555]"
          >
            Art gallery
          </Link>
          <Link
            href="/about-us"
            className="text-[#212121] hover:text-[#575555]"
          >
            About us
          </Link>
          <div className="group relative">
            <Link
              href="/contacts"
              className="text-[#212121] hover:text-[#575555]"
            >
              Contacts
            </Link>
            <div className="absolute top-full right-0 z-10 hidden pt-2 group-hover:block">
              <div className="min-w-[180px] bg-white px-0 py-4">
                <Link
                  href="/story"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Story
                </Link>
                <Link
                  href="/mission"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Mission
                </Link>
                <Link
                  href="/craftsmanship"
                  className="block py-1 text-[#212121] hover:text-[#575555]"
                >
                  Craftsmanship
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Empty div for mobile to maintain flex layout */}
        <div className="w-6 lg:hidden"></div>
      </header>

      {/* Main Content */}
      <main className="flex flex-grow items-center justify-center">
        {/* Featured Products */}
        <div className="px-24 py-12 md:px-32 md:py-16 xl:px-48">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-16 md:gap-24 lg:gap-32">
              <div className="rounded-sm bg-[#f3f0f0] p-4 md:p-8">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Featured bag in spotlight"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="rounded-sm bg-[#f3f0f0] p-4 md:p-8">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Model with grie bag"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-light tracking-widest text-white">
                      g r i e
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Footer */}
      <MobileFooter />

      {/* Desktop Footer */}
      <footer className="mt-20 hidden border-t border-[#d6caca] px-8 pt-8 pb-16 lg:block">
        <div className="grid grid-cols-5 gap-8">
          {/* Language Selection */}
          <div>
            <h4 className="mb-4 text-sm text-[#646161]">Choose language</h4>
            <button className="text-[#212121] hover:text-[#575555]">
              Ukraine
            </button>
          </div>

          {/* Corporate Info */}
          <div>
            <Link
              href="/corporate-gifts"
              className="block py-1 text-[#212121] hover:text-[#575555]"
            >
              Corporate gifts
            </Link>
            <Link
              href="/care-instructions"
              className="block py-1 text-[#212121] hover:text-[#575555]"
            >
              Care instructions
            </Link>
            <Link
              href="/warranty"
              className="block py-1 text-[#212121] hover:text-[#575555]"
            >
              Warranty
            </Link>
          </div>

          {/* Shop Links */}
          <div>
            <Link
              href="/shop"
              className="block py-1 text-[#212121] hover:text-[#575555]"
            >
              Shop
            </Link>
            <Link
              href="/contact-us"
              className="block py-1 text-[#212121] hover:text-[#575555]"
            >
              Contact us
            </Link>
            <Link
              href="/instagram"
              className="block py-1 text-[#212121] hover:text-[#575555]"
            >
              Instagram
            </Link>
          </div>

          {/* Payment and Shipment */}
          <div>
            <Link
              href="/payment-shipment"
              className="block py-1 text-[#212121] hover:text-[#575555]"
            >
              Payment and shipment
            </Link>
            <Link
              href="/return-policy"
              className="block py-1 text-[#212121] hover:text-[#575555]"
            >
              Return Policy
            </Link>
            <Link
              href="/legal-privacy"
              className="block py-1 text-[#212121] hover:text-[#575555]"
            >
              Legal & privacy
            </Link>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm text-[#212121]">
              Subscribe to newsletter:
            </h4>
            <div className="mb-4 flex items-center border-b border-[#212121] pb-1">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent text-[#212121] outline-none"
              />
              <button className="ml-2">
                <ChevronRight className="h-5 w-5 text-[#212121]" />
              </button>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="privacy-policy" className="mt-1" />
              <label
                htmlFor="privacy-policy"
                className="text-sm text-[#646161]"
              >
                I have read and understand{' '}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
