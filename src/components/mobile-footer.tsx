import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function MobileFooter() {
  return (
    <div className="space-y-6 px-8 py-6 lg:hidden">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Subscribe to newsletter:</h4>
        <div className="border border-[#d6caca] p-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent text-[#212121] outline-none"
          />
        </div>
        <button className="w-full bg-[#212121] px-4 py-3 text-white">
          Submit
        </button>
        <div className="flex items-start gap-2 pt-2">
          <input type="checkbox" id="privacy-policy-mobile" className="mt-1" />
          <label
            htmlFor="privacy-policy-mobile"
            className="text-sm text-[#646161]"
          >
            I have read and understand{' '}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
          </label>
        </div>
      </div>

      <div className="space-y-0 border-t border-[#f3f0f0] pt-4">
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">Choose language: English</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">Shipping</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">Return Policy</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">Warranty</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">Shipping</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">Return Policy</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">Warranty</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">FAQ</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">Legal & privacy</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
        <div className="flex items-center justify-between border-b border-[#f3f0f0] py-3">
          <span className="text-sm">Mission</span>
          <ChevronRight className="h-5 w-5 text-[#212121]" />
        </div>
      </div>

      <div className="pt-4 text-center text-sm text-[#646161]">
        Grie &copy; 2025
      </div>
    </div>
  );
}
